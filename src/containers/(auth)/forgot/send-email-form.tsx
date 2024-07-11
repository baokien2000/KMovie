"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorIcon, LoadingIcon } from "../../../../public/static/svg";
import { useRouter } from "@/lib/router-events";
import { cn } from "@/lib/cn";
import { IForgotForm } from "@/enum/auth";
import { SendOTP } from "@/services/auth";
import { IOtpRes } from "./forgot-container";
import ProcessLoading from "@/components/UI/loading/process-loading";
interface SendEmailFormProps {
    setForm: (form: IForgotForm) => void;
    setOtpRes: (data: IOtpRes) => void;
}
const SendEmailForm = ({ setForm, setOtpRes }: SendEmailFormProps) => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const formSchema = z.object({
        email: z.string().trim().min(1, { message: "Email không được để trống" }).email({ message: "Email không hợp lệ" }),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const handleSendEmail = async (value: z.infer<typeof formSchema>) => {
        setLoading(true);
        const res = await SendOTP(value.email);
        if (res.status === 200) {
            setOtpRes({
                email: value.email,
                expires: res.data.expires,
            });
            setForm("confirm-otp");
        } else {
            setError("email", {
                message: res.data.message,
            });
        }
        setLoading(false);
    };
    console.log("error", errors);
    return (
        <form
            onSubmit={handleSubmit((value) => handleSendEmail(value))}
            className="  text-sm  text-default p-3 sm:p-6 w-[calc(100svw-24px)] max-w-[500px] sm:w-[500px]"
        >
            <div className="">
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
            <div className="text-red-500 text-xs min-h-6 h-fit flex gap-1 items-center">
                {errors.email && (
                    <>
                        <ErrorIcon className="h-4 w-4" />
                        <span>{errors?.email?.message}</span>
                    </>
                )}
            </div>
            {loading ? (
                <ProcessLoading className="cursor-wait text-center bg-mainColor/90  w-full p-2 text-xs sm:text-sm text-des uppercase font-bold tracking-wider" />
            ) : (
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-mainColor/90   w-full p-2 text-xs sm:text-sm text-des uppercase font-bold tracking-wider cursor-pointer hover:bg-mainColor hover:text-black "
                >
                    Gửi mã xác nhận
                </button>
            )}
        </form>
    );
};

export default SendEmailForm;
