"use client";
import { refreshToken } from "@/services/auth";
import { useAuthStore } from "@/store/auth/auth.store";
import { isTokenExpired } from "@/utils/auth";
import { isTokenOneDayToExpired } from "@/utils/auth";
import axios from "axios";
import { ReactNode, useEffect } from "react";
import toast from "react-hot-toast";

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const user = useAuthStore((state) => state.user);
    const setToken = useAuthStore((state) => state.updateUserToken);
    const setUser = useAuthStore((state) => state.setUser);
    const tokenCheck = async () => {
        const RefToken = (await axios({ url: "/api", method: "get", withCredentials: true }))?.data?.token?.value;
        if ((RefToken && isTokenExpired(RefToken)) || !RefToken) {
            setUser(null);
            await axios({ url: "/api", method: "post", withCredentials: true });
            toast.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
        } else {
            if (isTokenExpired(user?.accessToken) || isTokenOneDayToExpired(user?.accessToken)) {
                const newToken = await refreshToken();
                setToken(newToken.accessToken);
            }
        }
    };
    useEffect(() => {
        if (!user || !user?.accessToken) return;
        tokenCheck();
    }, [setToken, setUser, user]);

    return children;
};

export default AuthProvider;
