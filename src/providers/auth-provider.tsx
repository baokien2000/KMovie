"use client";
import { verifyToken } from "@/services/auth";
import { useAuthStore } from "@/store/auth/auth.store";
import { useEffect } from "react";
import toast from "react-hot-toast";

const AuthProvider = () => {
    const user = useAuthStore((state) => state.user);
    const setToken = useAuthStore((state) => state.updateUserToken);
    const setUser = useAuthStore((state) => state.setUser);

    const tokenCheck = async (accessToken: string, email: string) => {
        const res = await verifyToken(accessToken, email);
        switch (res?.status) {
            case 200:
                if (res?.data?.accessToken) setToken(res?.data?.accessToken);
                break;
            case 401:
                toast.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
                setUser(null);
                break;
            case 403:
                toast.error("Không có quyền truy cập, vui lòng đăng nhập lại");
                setUser(null);
                break;
            case 500:
                toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
                break;
            default:
                toast.error("Có lỗi xảy ra, vui lòng thử lại sau");
                break;
        }
    };
    useEffect(() => {
        if (!user?._id) return;
        tokenCheck(user?.accessToken, user?.email);
    }, [user?._id]);

    return null;
};

export default AuthProvider;
