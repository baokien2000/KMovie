"use client";
import { refreshToken } from "@/services/auth";
import { useAuthStore } from "@/store/auth/auth.store";
import { isTokenExpired } from "@/utils/auth";
import { isTokenOneDayToExpired } from "@/utils/auth";
import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import React, { ReactNode, useEffect, useLayoutEffect } from "react";
import toast from "react-hot-toast";

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const user = useAuthStore((state) => state.user);
    const setToken = useAuthStore((state) => state.updateUserToken);
    const setUser = useAuthStore((state) => state.setUser);
    const tokenCheck = async () => {
        const RefToken = (await axios({ url: "/api", method: "get", withCredentials: true }))?.data?.token?.value;
        if ((RefToken && isTokenExpired(RefToken)) || !RefToken) {
            setUser(null);
            const deleteRefreshToken = await axios({ url: "/api", method: "post", withCredentials: true });

            console.log("deleteRefreshToken", deleteRefreshToken);
            toast.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
        } else {
            if (isTokenExpired(user?.accessToken) || isTokenOneDayToExpired(user?.accessToken)) {
                const newToken = await refreshToken();
                setToken(newToken.accessToken);
                console.log("get new access token");
            }
            console.log("Token is still valid");
        }
    };
    useEffect(() => {
        // console.log("token", user);
        // if (!user || !user?.accessToken) return;
        // // When refresh token is expired
        // console.log("RefToken", RefToken, RefToken && isTokenExpired(RefToken.value));
        // if (RefToken && isTokenExpired(RefToken.value)) {
        //     setUser(null);
        //     toast.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
        // } else if (isTokenExpired(user?.accessToken) || isTokenOneDayToExpired(user?.accessToken)) {
        //     refreshToken().then((res) => {
        //         console.log("refreshToken", res);
        //         setToken(res.accessToken);
        //     });
        //     console.log("call fetch new token");
        // }
        // // When refresh token is expired or one day to expired

        // console.log("AuthProvider");
        if (!user || !user?.accessToken) return;
        tokenCheck();
    }, [setToken, setUser, user]);

    return children;
};

export default AuthProvider;
