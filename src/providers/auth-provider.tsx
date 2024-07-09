// "use client";
// import { getAccessToken } from "@/services/auth";
// import { useAuthStore } from "@/store/auth/auth.store";
// import { isTokenExpired } from "@/utils/auth";
// import axios from "axios";
// import { useEffect } from "react";
// import toast from "react-hot-toast";

// const AuthProvider = ({ refreshToken }: { refreshToken: string | undefined }) => {
//     const user = useAuthStore((state) => state.user);
//     const setToken = useAuthStore((state) => state.updateUserToken);
//     const setUser = useAuthStore((state) => state.setUser);
//     let token = refreshToken;
//     console.log("refreshToken outside", token);
//     const tokenCheck = async () => {
//         console.log("refreshToken inside", token);
//         if (!refreshToken) {
//             token = res?.data?.token?.value || token;
//             console.log("new token", token);
//         }
//         if ((token && isTokenExpired(token)) || !token) {
//             setUser(null);
//             toast.error("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại");
//         } else {
//             if (!user?.accessToken || isTokenExpired(user?.accessToken)) {
//                 const newToken = await getAccessToken();
//                 setToken(newToken?.accessToken);
//             }
//         }
//     };
//     useEffect(() => {
//         if (!user?._id) return;
//         tokenCheck();
//     }, [user?._id]);

//     return null;
// };

// export default AuthProvider;

"use client";
import { baseURL } from "@/repositories";
import { getAccessToken, verifyToken } from "@/services/auth";
import { useAuthStore } from "@/store/auth/auth.store";
import { isTokenExpired } from "@/utils/auth";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

const AuthProvider = ({ refreshToken, tokenlegacy }: { refreshToken?: string; tokenlegacy?: string }) => {
    const user = useAuthStore((state) => state.user);
    const setToken = useAuthStore((state) => state.updateUserToken);
    const setUser = useAuthStore((state) => state.setUser);
    console.log("refreshToken", refreshToken);
    console.log("tokenlegacy", tokenlegacy);
    const tokenCheck = async (accessToken: string) => {
        const res = await verifyToken(accessToken);
        const nextRes = await axios({
            method: "GET",
            url: `/api`,
            params: {
                accessToken: accessToken,  
            },
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }) 
        console.log("nextRes",nextRes);
        switch (res?.status || nextRes?.status) {
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
        tokenCheck(user?.accessToken);
    }, [user?._id]);

    return null;
};

export default AuthProvider;
