"use client";
import React, { useRef, useState } from "react";
import { Button } from "@headlessui/react";
import { useAuthStore } from "@/store/auth/auth.store";
import Modal from "@/components/UI/modal";
import { Link } from "@/lib/router-events";
import toast from "react-hot-toast";
import { cn } from "@/lib/cn";
import { StarIcon as StarOutlineIcon } from "../../../../public/static/svg";
import { StarIcon } from "@heroicons/react/20/solid";
import { addMovieReview, getUserMovieReview } from "@/services/movies";
import { useQuery } from "@tanstack/react-query";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/services/auth";
interface ReviewMovieProps {
    slug: string;
}
const ReviewMovie = ({ slug }: ReviewMovieProps) => {
    const user = useAuthStore((state) => state.user);
    const [hoveredStar, setHoveredStar] = useState(-1); // -1 indicates no star is hovered
    const [selectedStar, setSelectedStar] = useState(-1); // -1 indicates no star is selected
    const [loading, setLoading] = React.useState(false);
    const [captcha, setCaptcha] = React.useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const { data: review, isFetching } = useQuery({
        queryKey: ["reviewMoive", slug, user?._id],
        queryFn: async () =>
            getUserMovieReview(slug, user?._id!).then((res) => {
                console.log("getUserMovieReview", res);
                if (res?.rating) setSelectedStar(res.rating - 1);
                return res;
            }),
        refetchOnWindowFocus: false,
        enabled: user?._id ? true : false,
    });
    console.log("review", review);
    if (!user)
        return (
            <Button
                onClick={() => toast.error("Vui lòng đăng nhập để thực hiện chức năng này")}
                className={"py-1  bg-[#191919] px-3   hover:text-mainColor  rounded-md flex items-center justify-center gap-2 w-fit  "}
            >
                <StarOutlineIcon fill="currentColor" />
                <span className="hidden sm:inline">Đánh giá</span>
            </Button>
        );
    const onClose = () => {
        setSelectedStar(review?.rating ? review.rating - 1 : -1);
    };
    const handleReview = async (closeModal?: () => void) => {
        setLoading(true);
        try {
            const verify = await verifyCaptcha(captcha!);
            if (verify.status !== 200) {
                toast.error("Dữ liệu captcha không hợp lệ, vui lòng thử lại sau");
                return;
            }
            const res = await addMovieReview(user._id, slug, selectedStar + 1);
            console.log(" reviewMovie res", res);
            toast.success("Đánh giá thành công");
            closeModal && closeModal();
        } catch (error) {
            console.log("error", error);
            toast.error("Đánh giá thất bại");
        } finally {
            setLoading(false);
        }
    };
    const onChange = async (value: string | null) => {
        if (!value) {
            setCaptcha(null);
        } else {
            setCaptcha(value);
        }
    };
    return (
        <Modal onRequestClose={onClose}>
            <Modal.Open>
                <Button
                    className={cn(
                        "py-1  bg-[#191919] px-3   hover:text-mainColor  rounded-md flex items-center justify-center gap-2 w-fit  ",
                        review?.rating && "text-mainColor"
                    )}
                >
                    {review?.rating ? <StarIcon className="size-6 min-w-[24px]" /> : <StarOutlineIcon fill="currentColor" />}
                    <span className="hidden sm:inline whitespace-nowrap">Đánh giá</span>
                </Button>
            </Modal.Open>
            <Modal.Content
                disableOutsideClick={loading}
                className=" aspect-auto w-[calc(100svw-24px)] sm:w-[400px]  rounded bg-cardBackground p-4 sm:p-6 text-default"
                icon={<></>}
            >
                {(closeModal) => {
                    return (
                        <div className="space-y-5">
                            <div onMouseLeave={() => setHoveredStar(-1)} className="flex gap-2 text-default mx-auto w-full justify-center">
                                {Array.from({ length: 10 }).map((_, index) => {
                                    return (
                                        <StarIcon
                                            className={cn(`cursor-pointer size-8 text-default `, {
                                                "text-mainColor": index <= hoveredStar || index <= selectedStar,
                                                "text-default": index <= selectedStar && index > hoveredStar && hoveredStar > -1,
                                            })} // Change color based on hover
                                            fill="currentColor"
                                            key={index}
                                            onClick={() => setSelectedStar(index)} // Update selected star
                                            onMouseEnter={() => setHoveredStar(index)} // Update hovered star
                                        />
                                    );
                                })}
                            </div>
                            <div className="captcha scale-75 phone:scale-100 " style={{ transformOrigin: "0 0" }}>
                                <ReCAPTCHA
                                    className="mt-2"
                                    onChange={onChange}
                                    theme={"dark"}
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
                                />
                            </div>
                            <div className="flex justify-end text-sm  items-center gap-3">
                                <button
                                    onClick={closeModal}
                                    disabled={loading}
                                    className={`py-1 h-8 sm:h-9 px-2 font-bold text-default rounded flex items-center justify-center  gap-2 w-fit  bg-dark1  ${"block ml-auto"}`}
                                >
                                    Trở lại
                                </button>
                                <button
                                    disabled={loading || selectedStar < 0 || !captcha}
                                    onClick={() => handleReview(closeModal)}
                                    className={`py-1 disabled:bg-mainColor/50  h-8 sm:h-9 px-2 font-bold text-[#111827] rounded flex items-center justify-center gap-2 w-fit bg-[#ffce4f]/90 hover:bg-[#ffce4f] ${"block "}`}
                                >
                                    {loading ? <div className="loadingText" /> : "Đánh giá"}
                                </button>
                            </div>
                        </div>
                    );
                }}
            </Modal.Content>
        </Modal>
    );
};

export default ReviewMovie;
