import Modal from "@/components/UI/modal";
import { Button, Textarea } from "@headlessui/react";
import React, { FormEvent, useRef } from "react";
import { PencilSquareIcon } from "../../../public/static/svg";
import status_icon_1 from "../../../public/static/images/status/status_1.webp";
import status_icon_2 from "../../../public/static/images/status/status_2.webp";
import status_icon_3 from "../../../public/static/images/status/status_3.webp";
import status_icon_4 from "../../../public/static/images/status/status_4.webp";
import status_icon_5 from "../../../public/static/images/status/status_5.webp";
import Image from "next/image";
import { IUser } from "@/interface/user";
import { cn } from "@/lib/cn";
import { sendFeedback } from "@/services/user";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/services/auth";

const statusList = [status_icon_1, status_icon_2, status_icon_3, status_icon_4, status_icon_5];
const WebFeedback = ({ user }: { user: IUser }) => {
    const [loading, setLoading] = React.useState(false);
    const [rating, setRating] = React.useState(-1);
    const [captcha, setCaptcha] = React.useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleFeedback = async (e: FormEvent<HTMLFormElement>, closeModal?: () => void) => {
        e.preventDefault();
        setLoading(true);
        try {
            const verify = await verifyCaptcha(captcha!);
            if (verify.status !== 200) {
                toast.error("Dữ liệu captcha không hợp lệ, vui lòng thử lại sau");
                return;
            }
            const formData = new FormData(e.target as HTMLFormElement);
            const feedback = formData.get("feedback") as string;
            const res = await sendFeedback(user._id, rating + 1, feedback);
            if (res.status === 200) {
                closeModal && closeModal();
                setRating(-1);
                toast.success("Đánh giá đã được ghi nhận, cảm ơn bạn rất nhiều!", {
                    duration: 3000,
                });
            } else {
                console.log("error", res);
                toast.error("Đánh giá thất bại, vui lòng thử lại sau");
            }
        } catch (error) {
            console.log("error", error);
            // toast.error("Đánh giá thất bại");
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
        <Modal>
            <Modal.Open>
                <Button className=" flex w-fit h-8 sm:h-9  border border-mainColor text-mainColor items-center gap-2 rounded py-1.5 px-3 ">
                    <PencilSquareIcon className="size-5" fill="currentColor" />
                    <span className=" whitespace-nowrap">Đánh giá</span>
                </Button>
            </Modal.Open>
            <Modal.Content
                disableOutsideClick={loading}
                className=" aspect-auto w-[calc(100svw-24px)] sm:w-[400px]  rounded bg-cardBackground p-4 sm:p-6 text-default"
                icon={<></>}
            >
                {(closeModal) => {
                    return (
                        <form onSubmit={(e) => handleFeedback(e, closeModal)} className="space-y-5">
                            <div className="flex gap-2 text-default mx-auto w-full justify-center">
                                {statusList.map((status, index) => {
                                    return (
                                        <div
                                            onClick={() => setRating(index)}
                                            className={cn(
                                                "relative size-10 smallPhone:size-12 sm:size-16 opacity-75 hover:opacity-100 cursor-pointer",
                                                {
                                                    "opacity-100": rating === index,
                                                }
                                            )}
                                            key={`status-feedback-${index}`}
                                        >
                                            <Image src={status} sizes="100px" quality={50} priority fill alt={"status-" + index} />
                                        </div>
                                    );
                                })}
                            </div>
                            <Textarea
                                rows={5}
                                maxLength={1000}
                                name="feedback"
                                placeholder="Hay dành một ít phút để cho mình xin ý kiến của bạn về trang web nhé. Để mình phát hiển và cải thiện hơn nữa. Cảm ơn bạn rất nhiều!"
                                className="w-full resize-none p-2 text-sm    bg-black rounded focus:outline-none "
                            />
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
                                    disabled={loading || rating < 0 || !captcha}
                                    type="submit"
                                    className={`py-1 disabled:bg-mainColor/50  h-8 sm:h-9 px-2 font-bold text-[#111827] rounded flex items-center justify-center gap-2 w-fit bg-[#ffce4f]/90 hover:bg-[#ffce4f] ${"block "}`}
                                >
                                    {loading ? <div className="loadingText" /> : "Đánh giá"}
                                </button>
                            </div>
                        </form>
                    );
                }}
            </Modal.Content>
        </Modal>
    );
};

export default WebFeedback;
