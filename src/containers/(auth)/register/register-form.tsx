"use client";
import { Login, SignUp } from "@/services/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorIcon } from "../../../../public/static/svg";
import { useRouter } from "@/lib/router-events";
import toast from "react-hot-toast";
import { cn } from "@/lib/cn";
import { IOtpRes } from "../forgot/forgot-container";
import ConfirmOtpForm from "../forgot/confirm-otp-form";

const RegisterForm = () => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const [otpRes, setOtpRes] = useState<IOtpRes>({
        email: "",
        expires: "",
    });
    const formSchema = z
        .object({
            system: z.string().optional(),
            email: z
                .string()
                .trim()
                .min(1, { message: "Email không được để trống" })
                .max(40, { message: "Email quá dài" })
                .email({ message: "Email không hợp lệ" }),
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

    const handleRegister = async (value: z.infer<typeof formSchema>) => {
        setLoading(true);
        const res = await SignUp(value.email, value.password);
        if (res.status === 200) {
            // reset();
            // router.push("/dang-nhap");
            toast.success("Đăng ký thành công, vui lòng xác thực tài khoản");
            setOtpRes({
                email: value.email,
                expires: res?.data.expires,
            });
        } else {
            setError("email", {
                message: res.data.message,
            });
        }
        setLoading(false);
    };
    return otpRes?.expires?.length ? (
        <ConfirmOtpForm
            otpRes={otpRes}
            setOtpRes={setOtpRes}
            isSignIn={true}
            callback={() => {
                router.push("/dang-nhap");
                toast.success("Xác thực tài khoản thành công");
            }}
        />
    ) : (
        <form
            onSubmit={handleSubmit((value) => handleRegister(value))}
            className="  text-sm  text-default p-3 sm:p-6 w-[calc(100svw-24px)] max-w-[500px] sm:w-[500px]"
        >
            <div className="sm:mb-3 mb-2">
                <input
                    {...register("email")}
                    className={cn(" bg-dark4  max-h-[36px] outline-none w-full px-3 py-2 ", {
                        "border border-red-500": errors.email,
                    })}
                    name="email"
                    maxLength={40}
                    type="text"
                    placeholder="Email"
                />
            </div>
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
                        <span>
                            {errors?.email?.message || errors?.password?.message || errors?.confirmPassword?.message || errors?.system?.message || ""}
                        </span>
                    </>
                )}
            </div>

            {loading ? (
                <div className="loadingText cursor-wait text-center bg-mainColor/90  w-full p-2 text-xs sm:text-sm text-des uppercase font-bold tracking-wider" />
            ) : (
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-mainColor/90  w-full p-2 text-xs sm:text-sm text-des uppercase font-bold tracking-wider cursor-pointer hover:bg-mainColor hover:text-black "
                >
                    Đăng ký
                </button>
            )}
        </form>
    );
};

export default RegisterForm;
