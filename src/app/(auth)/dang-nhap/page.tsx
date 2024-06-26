import LoginForm from "@/containers/(auth)/login/login-form";
import LoginFormSkeleton from "@/containers/(auth)/login/login-form-skeleton";
import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Trang đăng nhập - kmovies`,
    };
}
export default async function Page() {
    return (
        <main className="p-6 py-4 flex justify-center items-center space-y-3 min-h-[calc(100svh-72px)]">
            {/* <LoginPage /> */}
            <div className="bg-cardBackground shadow-mainColor rounded shadow">
                <div className="border-b border-[#656565] py-5 font-bold text-white  text-center text-xl tracking-widest uppercase">
                    Welcome back!
                </div>
                <Suspense fallback={<LoginFormSkeleton />}>
                    <LoginForm />
                </Suspense>

                <div className="border-t border-[#656565] px-6 py-4 flex justify-between text-xs">
                    <Link href="/dang-ky" className="font-bold text-mainColor/80 hover:text-mainColor no-underline">
                        {"Không có tài khoản?"}
                    </Link>
                    <Link href="/quen-mat-khau" className="text-default  hover:text-mainColor no-underline">
                        Quên mật khẩu?
                    </Link>
                </div>
            </div>
        </main>
    );
}
