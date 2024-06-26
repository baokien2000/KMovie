import ForgotForm from "@/containers/(auth)/forgot/send-email-form";
import ForgotFormSkeleton from "@/containers/(auth)/forgot/forgot-form-skeleton";
import LoginForm from "@/containers/(auth)/login/login-form";
import LoginFormSkeleton from "@/containers/(auth)/login/login-form-skeleton";
import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";
import ForgotContainer from "@/containers/(auth)/forgot/forgot-container";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Trang quên mật khẩu - kmovies`,
    };
}
export default async function Page() {
    return (
        <main className="p-6 py-4 flex justify-center items-center space-y-3 min-h-[calc(100svh-72px)]">
            {/* <LoginPage /> */}
            <div className="bg-cardBackground shadow-mainColor rounded shadow">
                <div className="border-b border-[#656565] py-5 font-bold text-white  text-center text-xl tracking-widest uppercase">
                    Đặt lại mật khẩu
                </div>
                <Suspense fallback={<ForgotFormSkeleton />}>
                    <ForgotContainer />
                </Suspense>

                <div className="border-t border-[#656565] px-6 py-4 flex justify-between text-xs">
                    <Link href="/dang-nhap" className="text-default/70  hover:text-mainColor no-underline">
                        Quay lại đăng nhập
                    </Link>
                </div>
            </div>
        </main>
    );
}
