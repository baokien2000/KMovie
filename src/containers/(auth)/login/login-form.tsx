"use client";
import { Login, verifyCaptcha } from "@/services/auth";
import React, { FormEvent, useRef, useState } from "react";
import { ErrorIcon, LoadingIcon } from "../../../../public/static/svg";
import { useRouter } from "@/lib/router-events";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/auth/auth.store";
import { cn } from "@/lib/cn";
import { IOtpRes } from "../forgot/forgot-container";
import ConfirmOtpForm from "../forgot/confirm-otp-form";
import ReCAPTCHA from "react-google-recaptcha";

const LoginForm = () => {
    const [requestTime, setRequestTime] = useState<number>(0);
    const [loading, setLoading] = React.useState(false);
    const [captcha, setCaptcha] = React.useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const [otpRes, setOtpRes] = useState<IOtpRes>({
        email: "",
        expires: "",
    });
    const [errors, setErrors] = React.useState<string | null>(null);
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (requestTime > 3) {
                const verify = await verifyCaptcha(captcha!);
                if (verify.status !== 200) {
                    toast.error("Dữ liệu captcha không hợp lệ, vui lòng thử lại sau");
                    return;
                }
            }
            setErrors(null);
            setRequestTime((pre) => pre + 1);
            const formData = new FormData(e.target as HTMLFormElement);
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;
            const res = await Login(email, password);
            recaptchaRef.current?.reset();
            setCaptcha(null);
            switch (res.status) {
                case 200:
                    setUser(res.data);
                    router.push("/");
                    toast.success("Đăng nhập thành công");
                    break;
                case 401:
                    setErrors("Email hoặc mật khẩu không đúng");
                    break;
                case 404:
                    setErrors("Email hoặc mật khẩu không đúng");
                    break;
                case 403:
                    setOtpRes({
                        email,
                        expires: res.data.expires,
                    });
                    toast.error("Bạn chưa xác thực tài khoản");
                    break;
                default:
                    setErrors("Đã có lỗi xảy ra, vui lòng thử lại sau");
                    break;
            }
        } catch (error) {
            console.log("Error", error);
            setErrors("Đã có lỗi xảy ra, vui lòng thử lại sau");
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
    return otpRes?.expires?.length ? (
        <ConfirmOtpForm
            otpRes={otpRes}
            setOtpRes={setOtpRes}
            isSignIn={true}
            callback={() => {
                setOtpRes({ email: "", expires: "" });
                toast.success("Xác thực thành công, Vui lòng đăng nhập lại!");
            }}
        />
    ) : (
        <form onSubmit={handleLogin} className="  text-sm  text-default p-2 phone:p-3 sm:p-6 w-[calc(100svw-24px)] max-w-[500px] sm:w-[500px]">
            <div className="phone:mb-3 mb-2">
                <input className=" bg-dark4  max-h-[36px] outline-none w-full px-3 py-2 " name="email" type="text" placeholder="Email" />
            </div>
            <div className="">
                <input className=" bg-dark4 max-h-[36px]  outline-none w-full  px-3 py-2" name="password" type="password" placeholder="Password" />
            </div>
            {requestTime > 3 && (
                <div className="captcha scale-75 phone:scale-100 " style={{ transformOrigin: "0 0" }}>
                    <ReCAPTCHA
                        className="mt-2"
                        onChange={onChange}
                        theme={"dark"}
                        ref={recaptchaRef}
                        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY!}
                    />
                </div>
            )}
            <div className="text-red-500 text-xs min-h-6 h-fit flex gap-1 items-center">
                {errors && (
                    <>
                        <ErrorIcon className="h-4 w-4" />
                        <span>{errors}</span>
                    </>
                )}
            </div>
            {loading ? (
                <div className="loadingText cursor-wait text-center bg-mainColor/90  w-full p-2 text-xs sm:text-sm text-des uppercase font-bold tracking-wider" />
            ) : (
                <button
                    type="submit"
                    disabled={loading || (requestTime > 3 && !captcha)}
                    className="bg-mainColor/90  w-full p-2 text-xs sm:text-sm text-des uppercase font-bold tracking-wider cursor-pointer hover:bg-mainColor hover:text-black "
                >
                    Đăng nhập
                </button>
            )}
        </form>
    );
};

export default LoginForm;
