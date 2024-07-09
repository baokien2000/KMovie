"use client";
import { getAccessToken } from "@/services/auth";
import { useAuthStore } from "@/store/auth/auth.store";
import { isTokenExpired } from "@/utils/auth";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

const AuthProvider = ({ refreshToken }: { refreshToken: string | undefined }) => {
    const user = useAuthStore((state) => state.user);
    const setToken = useAuthStore((state) => state.updateUserToken);
    const setUser = useAuthStore((state) => state.setUser);
    let token = refreshToken;
    console.log("refreshToken outside", token);
    const tokenCheck = async () => {
        console.log("refreshToken inside", token);
        if (!refreshToken) {
            const res = await axios({ url: "/api", method: "get", withCredentials: true });
            token = res?.data?.token?.value || token;
            console.log("new token", token);
        }
        if ((token && isTokenExpired(token)) || !token) {
            setUser(null);
            await axios({ url: "/api", method: "delete", withCredentials: true });
            toast.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
        } else {
            if (!user?.accessToken || isTokenExpired(user?.accessToken)) {
                const newToken = await getAccessToken();
                setToken(newToken?.accessToken);
            }
        }
    };
    useEffect(() => {
        if (!user?._id) return;
        tokenCheck();
    }, [user?._id]);

    return null;
};

export default AuthProvider;
