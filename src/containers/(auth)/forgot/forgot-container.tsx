"use client";
import React, { useState } from "react";
import SendEmailForm from "./send-email-form";
import ConfirmOtpForm from "./confirm-otp-form";
import ResetForm from "./reset-form";
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
    switch (form) {
        case "send-email":
            return <SendEmailForm setOtpRes={setOtpRes} setForm={setForm} />;
        case "confirm-otp":
            return <ConfirmOtpForm setOtpRes={setOtpRes} otpRes={otpRes} setForm={setForm} />;
        case "reset-password":
            return <ResetForm otpRes={otpRes} />;
        default:
            return <SendEmailForm setOtpRes={setOtpRes} setForm={setForm} />;
    }
};

export default ForgotContainer;
