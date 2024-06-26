import { cn } from "@/lib/cn";
import { SendOTP } from "@/services/auth";
import { formatTime } from "@/utils/format-string";
import { set } from "nprogress";
import React, { useEffect } from "react";
import { IOtpRes } from "./forgot-container";
import toast from "react-hot-toast";
interface ResentOTPButtonProps {
    setOtpRes: React.Dispatch<React.SetStateAction<IOtpRes>>;
    otpRes: IOtpRes;
}
const ResentOTPButton = ({ setOtpRes, otpRes }: ResentOTPButtonProps) => {
    const [resentTime, setResentTime] = React.useState<number>(new Date(otpRes.expires).getTime() - new Date().getTime());
    const [loading, setLoading] = React.useState<boolean>(false);
    const handleSendEmail = async () => {
        setLoading(true);
        const res = await SendOTP(otpRes.email);
        if (res.status === 200) {
            setOtpRes({
                email: otpRes.email,
                expires: res.data.expires,
            });
            setResentTime(new Date(res.data.expires).getTime() - new Date().getTime());
            toast.success("Gửi mã OTP thành công");
        } else {
            toast.error("Gửi mã OTP thất bại, vui lòng thử lại sau");
        }
        console.log("SendOTP res", res);
        setLoading(false);
    };
    useEffect(() => {
        const expiresTime = new Date(otpRes.expires).getTime();
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            console.log("currentTime", currentTime, "expiresTime", expiresTime);
            if (currentTime < expiresTime) {
                console.log("resentTime", resentTime);
                setResentTime(expiresTime - currentTime);
            } else {
                setResentTime(0);
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [otpRes.expires]);

    return (
        <div className="text-xs text-default/70 mt-4">
            Không nhận được mã?{" "}
            <button
                onClick={handleSendEmail}
                disabled={resentTime > 0 || loading}
                className={cn("font-medium ", resentTime > 0 ? "text-default/70" : "text-mainColor/90 hover:text-mainColor")}
            >
                {loading ? "Đang gửi..." : resentTime > 0 ? `Gửi lại sau ${formatTime(resentTime)}` : "Gửi lại"}
            </button>
        </div>
    );
};

export default ResentOTPButton;
