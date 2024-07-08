"use client";
import React, { useState } from "react";
import SendEmailForm from "./send-email-form";
import ConfirmOtpForm from "./confirm-otp-form";
import ResetForm from "./reset-form";
import toast from "react-hot-toast";
export interface IOtpRes {
    email: string;
    expires: string;
    token?: string;
}
const ForgotContainer = () => {
    const [form, setForm] = useState("send-email");
    const [otpRes, setOtpRes] = useState<IOtpRes>({
        email: "",
        expires: "",
    });
    const handleVerifySuccess = () => {
        toast.success("Xác thực thành công, vui lòng đặt lại mật khẩu");
        setForm("reset-password");
    };
    switch (form) {
        case "send-email":
            return <SendEmailForm setOtpRes={setOtpRes} setForm={setForm} />;
        case "confirm-otp":
            return <ConfirmOtpForm setOtpRes={setOtpRes} otpRes={otpRes} callback={handleVerifySuccess} />;
        case "reset-password":
            return <ResetForm otpRes={otpRes} />;
        default:
            return <SendEmailForm setOtpRes={setOtpRes} setForm={setForm} />;
    }
};

export default ForgotContainer;
