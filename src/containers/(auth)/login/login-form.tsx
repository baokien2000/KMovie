"use client";
import { Login } from "@/services/auth";
import React, { FormEvent } from "react";
import { ErrorIcon, LoadingIcon } from "../../../../public/static/svg";
import { useRouter } from "@/lib/router-events";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/auth/auth.store";
import { cn } from "@/lib/cn";

const LoginForm = () => {
    const [loading, setLoading] = React.useState(false);
    const [errors, setErrors] = React.useState<string | null>(null);
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors(null);
        setLoading(true);
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const res = await Login(email, password);
        if (res.status === 200) {
            setUser(res.data);
            router.push("/");
            toast.success("Đăng nhập thành công", {
                duration: 1000,
            });
        } else {
            if (res.status === 401 || res.status === 404) setErrors("Email hoặc mật khẩu không đúng");
            else setErrors("Đã có lỗi xảy ra, vui lòng thử lại sau");
        }
        setLoading(false);
    };
    return (
        <form onSubmit={handleLogin} className="  text-sm  text-default p-6 w-[400px]">
            <div className="mb-3">
                <input className=" bg-dark4  max-h-[36px] outline-none w-full px-3 py-2 " name="email" type="text" placeholder="Email" />
            </div>
            <div className="">
                <input className=" bg-dark4 max-h-[36px]  outline-none w-full  px-3 py-2" name="password" type="password" placeholder="Password" />
            </div>
            <div className="text-red-500 text-xs min-h-6 h-fit flex gap-1 items-center">
                {errors && (
                    <>
                        <ErrorIcon className="h-4 w-4" />
                        <span>{errors}</span>
                    </>
                )}
            </div>
            {loading ? (
                <div className="loadingText cursor-wait text-center bg-mainColor/90  w-full p-2 text-sm text-des uppercase font-bold tracking-wider" />
            ) : (
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-mainColor/90  w-full p-2 text-sm text-des uppercase font-bold tracking-wider cursor-pointer hover:bg-mainColor hover:text-black "
                >
                    Đăng nhập
                </button>
            )}
        </form>
    );
};

export default LoginForm;
