import { UserProfileType } from "@/enum/user";
import { updateUser } from "@/services/user";
import { useAuthStore } from "@/store/auth/auth.store";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useUserStore } from "@/store/user/user.store";
import ChangePassModal from "./change-pass-modal";
import ReCAPTCHA from "react-google-recaptcha";
import { isCaptchaValid } from "@/utils/auth";

const UserActionButton = ({ status, setStatus }: { status: UserProfileType; setStatus: (value: UserProfileType) => void }) => {
    const [loading, setLoading] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const onChange = async (value: string | null) => {
        if (!value) {
            setCaptchaVerified(false);
        } else {
            setCaptchaVerified(true);
        }
    };
    const user = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);
    const currentAvatar = useUserStore((state) => state.currentAvatar);
    const setCurrentAvatar = useUserStore((state) => state.setCurrentAvatar);
    const handleUpdate = async () => {
        setLoading(true);
        const captcha = await isCaptchaValid(recaptchaRef.current?.getValue());
        try {
            if (!captcha) {
                toast.error("Xảy ra lỗi khi xác thực captcha, vui lòng thử lại sau");
                return;
            }
            if (!user?._id) return;
            const name = (document.querySelector("#userEditName") as HTMLInputElement).value;
            const gender = (document.querySelector("input[name=gender]:checked") as HTMLInputElement).value;
            const payload = { name, gender, userId: user._id, avatar: currentAvatar };
            const res = await updateUser(user, payload);
            if (res.status === 200) {
                setStatus("idle");
                toast.success("Cập nhật thông tin thành công");
                setUser(res.data);
                setCurrentAvatar(null);
            } else {
                toast.error("Cập nhật thông tin thất bại");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="w-full flex-wrap px-3 sm:px-0 text-sm gap-4 flex">
            {user && status === "idle" && <ChangePassModal user={user} />}
            {status === "edited" && !loading && (
                <div className="captcha scale-75 phone:scale-100 " style={{ transformOrigin: "0 0" }}>
                    <ReCAPTCHA
                        onChange={onChange}
                        className="w-full sm:w-fit "
                        theme={"dark"}
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
                    />
                </div>
            )}
            <button
                onClick={() => setStatus("idle")}
                className={`py-1 h-8 sm:h-9 px-2 font-bold text-default rounded flex items-center justify-center  gap-2 w-fit  bg-cardBackground  ${
                    status === "idle" ? "hidden" : "block ml-auto"
                }`}
            >
                Trở lại
            </button>
            <button
                disabled={status === "editing" || loading || !captchaVerified}
                className={`py-1 disabled:bg-mainColor/50  h-8 sm:h-9 px-2 font-bold text-[#111827] rounded flex items-center justify-center gap-2 w-fit bg-[#ffce4f]/90 hover:bg-[#ffce4f] ${
                    status === "idle" ? "hidden" : "block "
                }`}
                onClick={handleUpdate}
            >
                {loading ? <div className="loadingText" /> : "Cập nhật"}
            </button>
            <button
                onClick={() => setStatus("editing")}
                className={`py-1 disabled:bg-mainColor/50  h-8 sm:h-9 px-2 font-bold text-[#111827] rounded flex items-center justify-center gap-2 w-fit bg-[#ffce4f]/90 hover:bg-[#ffce4f] ${
                    status !== "idle" ? "hidden" : "block ml-auto"
                }`}
            >
                Chỉnh sữa
            </button>
        </div>
    );
};

export default UserActionButton;
