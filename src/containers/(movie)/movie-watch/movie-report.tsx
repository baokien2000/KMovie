"use client";
import React, { FormEvent, useRef, useState } from "react";
import { ReportIcon } from "../../../../public/static/svg";
import Modal from "@/components/UI/modal";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/services/auth";
import toast from "react-hot-toast";
import { Textarea } from "@headlessui/react";
import { useAuthStore } from "@/store/auth/auth.store";
import { addMovieReport } from "@/services/movies";
interface MovieReportProps {
    name: string;
    slug: string;
    episode: string;
}
const MovieReport = ({ slug, episode, name }: MovieReportProps) => {
    const [loading, setLoading] = useState(false);
    const [captcha, setCaptcha] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const user = useAuthStore((state) => state.user);
    const onChange = async (value: string | null) => {
        if (!value) {
            setCaptcha(null);
        } else {
            setCaptcha(value);
        }
    };
    const onSubmit = async (e: FormEvent<HTMLFormElement>, closeModal: () => void) => {
        e.preventDefault();
        if (!user?._id) return;
        setLoading(true);

        const verify = await verifyCaptcha(captcha!);
        if (verify.status !== 200) {
            toast.error("Dữ liệu captcha không hợp lệ, vui lòng thử lại sau");
            return;
        }

        const formData = new FormData(e.target as HTMLFormElement);
        const errorDescription = formData.get("error-description") as string;
        if (errorDescription.length < 10) {
            toast.error("Vui lòng mô tả lỗi chi tiết hơn!");
            setLoading(false);
            return;
        }
        // Send report to server
        const res = await addMovieReport(user._id, slug, episode, errorDescription);
        setLoading(false);
        toast.success("Đã gửi báo cáo thành công, cảm ơn bạn đã đóng góp! Tôi sẽ cố gắn xử lý sớm nhất có thể!");
        closeModal();
    };
    return user?._id ? (
        <Modal>
            <Modal.Open>
                <button className="p-1 rounded opacity-90 hover:opacity-100 bg-[#b73a3a]">
                    <ReportIcon />
                </button>
            </Modal.Open>
            <Modal.Content
                className=" aspect-auto w-[calc(100svw-24px)] sm:w-[500px]  rounded bg-cardBackground p-3 sm:p-6 text-default"
                icon={<></>}
            >
                {(closeModal) => {
                    return (
                        <div className="space-y-2">
                            <h2 className="text-base uppercase sm:text-2xl font-medium">Báo cáo lỗi</h2>
                            <p className="text-sm">
                                Phim <b className="text-mainColor">{name}</b> - tập {episode}
                            </p>
                            <form onSubmit={(value) => onSubmit(value, closeModal!)} className="  text-sm  text-default">
                                <Textarea
                                    rows={5}
                                    maxLength={1000}
                                    name="error-description"
                                    placeholder={
                                        "Vui lòng mô tả lỗi bạn gặp phải! Càng chi tiết càng tốt nhé.           " +
                                        " Ví dụ: Iphone 12, Safari, lỗi không thể xem được, màn hình đen, không có tiếng, không có phụ đề..."
                                    }
                                    className="w-full resize-none p-2 text-sm  bg-black rounded focus:outline-none "
                                />
                                <div className="captcha scale-75 phone:scale-100 " style={{ transformOrigin: "0 0" }}>
                                    <ReCAPTCHA
                                        className="my-3"
                                        onChange={onChange}
                                        theme={"dark"}
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
                                    />
                                </div>

                                <div className="flex text-sm items-center gap-3 justify-end">
                                    <button
                                        onClick={closeModal}
                                        disabled={loading}
                                        type="button"
                                        className="bg-dark1 rounded w-fit  p-2 text-default  font-bold tracking-wider"
                                    >
                                        Hủy
                                    </button>
                                    {loading ? (
                                        <div className="loadingText rounded cursor-wait text-center bg-mainColor/90  w-fit p-2 text-des  font-bold tracking-wider" />
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={loading || !captcha}
                                            className="bg-mainColor/90 rounded disabled:bg-mainColor/50 disabled:text-des  w-fit p-2 text-des  font-bold tracking-wider hover:text-black hover:bg-mainColor"
                                        >
                                            Xác nhận
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Modal.Content>
        </Modal>
    ) : (
        <button
            onClick={() => toast.error("Vui lòng đăng nhập để thực hiện chức năng này!")}
            className="p-1 rounded opacity-90 hover:opacity-100 bg-[#b73a3a]"
        >
            <ReportIcon />
        </button>
    );
};

export default MovieReport;
