import RegisterForm from "@/containers/(auth)/register/register-form";
import RegisterFormSkeleton from "@/containers/(auth)/register/register-form-skeleton";
import { Metadata } from "next";
import Link from "next/link";
import React, { Suspense } from "react";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Trang đăng ký - kmovies`,
    };
}
export default async function Page() {
    return (
        <main className="p-6 py-4 flex justify-center items-center space-y-3 min-h-[calc(100svh-72px)]">
            {/* <LoginPage /> */}
            <div className="bg-cardBackground shadow-mainColor rounded shadow">
                <div className="border-b border-[#656565] py-5 font-bold text-white  text-center text-xl tracking-widest uppercase">
                    Tạo tài khoản
                </div>
                <Suspense fallback={<RegisterFormSkeleton />}>
                    <RegisterForm />
                </Suspense>

                <div className="border-t border-[#656565] text-default px-6 py-4 flex gap-1 text-xs">
                    <span>Đã có tài khoản?</span>
                    <Link href="/dang-nhap" className="text-mainColor/90  hover:text-mainColor no-underline">
                        Đăng ký
                    </Link>
                </div>
            </div>
        </main>
    );
}
