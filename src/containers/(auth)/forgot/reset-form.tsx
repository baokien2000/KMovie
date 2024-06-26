"use client";
import { Login, SignUp, resetPassword } from "@/services/auth";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { ErrorIcon, LoadingIcon } from "../../../../public/static/svg";
import { useRouter } from "@/lib/router-events";
import toast from "react-hot-toast";
import { cn } from "@/lib/cn";
import { IOtpRes } from "./forgot-container";

const ResetForm = ({ otpRes }: { otpRes: IOtpRes }) => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const formSchema = z
        .object({
            password: z
                .string()
                .trim()
                .min(1, { message: "Mật khẩu không được để trống" })
                .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" })
                .max(25, { message: "Mật khẩu quá dài" })
                .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
                    message: "Mật khẩu phải có ít nhất 1 chữ thường, 1 chữ hoa và 1 số bất kỳ",
                }),
            confirmPassword: z.string().trim().min(1, { message: "Xác nhận mật khẩu không được để trống" }),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Mật khẩu không trùng khớp",
            path: ["confirmPassword"],
        });
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const handleReset = async (value: z.infer<typeof formSchema>) => {
        if (!otpRes.token) {
            toast.error("Xác thực không hợp lệ, vui lòng thử lại");
            return;
        }
        setLoading(true);
        const res = await resetPassword(otpRes.email, value.password, otpRes.token);
        if (res.status === 200) {
            toast.success("Đặt lại mật khẩu thành công");
            router.push("/dang-nhap");
        } else {
            toast.error("Đã xảy ra lỗi, vui lòng xác thực lại OTP");
        }
        console.log("resetPassword res", res);
        console.log("otpRes", otpRes);
        console.log("data", value);
        setLoading(false);
    };
    console.log("error", errors);
    return (
        <form onSubmit={handleSubmit((value) => handleReset(value))} className="  text-sm  text-default p-6 w-[400px]">
            <div className="mb-3">
                <input
                    {...register("password")}
                    className={cn(" bg-dark4 max-h-[36px]  outline-none w-full  px-3 py-2", {
                        "border border-red-500": errors.password,
                    })}
                    name="password"
                    maxLength={25}
                    type="password"
                    placeholder="Mật khẩu"
                />
            </div>
            <div className="">
                <input
                    {...register("confirmPassword")}
                    className={cn(" bg-dark4 max-h-[36px]  outline-none w-full  px-3 py-2", {
                        "border border-red-500": errors.confirmPassword,
                    })}
                    name="confirmPassword"
                    maxLength={25}
                    type="password"
                    placeholder="Xác nhận mật khẩu"
                />
            </div>
            <div className="text-red-500 text-xs min-h-6 h-fit flex gap-1 items-center">
                {Object.keys(errors).length > 0 && (
                    <>
                        <ErrorIcon className="h-4 w-4" />
                        <span>{errors?.password?.message || errors?.confirmPassword?.message || ""}</span>
                    </>
                )}
            </div>
            {loading ? (
                <div className="loadingText cursor-wait text-center bg-mainColor/90  w-full p-2 text-sm text-des uppercase font-bold tracking-wider" />
            ) : (
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-mainColor/90  w-full p-2 text-sm text-des uppercase font-bold tracking-wider hover:text-black hover:bg-mainColor"
                >
                    Đặt lại mật khẩu
                </button>
            )}
        </form>
    );
};

export default ResetForm;
