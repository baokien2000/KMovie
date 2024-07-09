import { cache } from "react";
import { baseURL } from ".";
import axios from "axios";
import { IUser } from "@/interface/user";

class AuthRepository {

    static Login = async (email: string,password:string) => {
        const payload = {email,password }
        const url = `${baseURL}/users/login`;
        const controller = new AbortController();

        try {
            const response = await axios({
                url: url,
                method: 'post',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: payload,
                signal: controller.signal,
            })
            // get cookie, but it still undefined 

            return response
            
        } catch (error:any) {
            return error.response
        }
    }
    static SignUp = async (email: string,password:string) => {
        const payload = {email,password }
        const url = `${baseURL}/users/create`;
        const controller = new AbortController();

        try {
            const response = await axios({
                url: url,
                method: 'post',
                data: payload,
                withCredentials: true,
                signal: controller.signal,
            })

            return response
            
        } catch (error:any) {
            return error.response
            console.log(error)
        }
    }
    static ResetPassword = async (email: string, password: string, token: string) => { 
        const payload = {email, password,token }
        const url = `${baseURL}/users/resetPassword`;
        const controller = new AbortController();

        try {
            const response = await axios({
                url: url,
                method: 'post',
                data: payload,
                withCredentials: true,
                signal: controller.signal,
            })

            return response
            
        } catch (error:any) {
            return error.response
        }
    }
    static changePassword = async (user: IUser, oldPassword: string, newPassword: string) => {
        const url = `${baseURL}/users/changePassword`;
        const payload = { userId: user._id, email: user.email, oldPassword, newPassword }
        const controller = new AbortController();
        try {
            const response = await axios({
                url: url,
                method: 'put',
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
                data: payload,
                withCredentials: true,
                signal: controller.signal,
            })

            return response
            
        } catch (error: any) {
            return error.response
        }
    }

    static getAccessToken = async () => {
        const url = `${baseURL}/users/refreshToken`;
        const controller = new AbortController();

        try {
            const response = await axios({
                url: url,
                method: 'post',
                withCredentials: true,
                signal: controller.signal,
            })

            return response.data
            
        } catch (error) {
            console.log(error)
        }
    }
    static SendOTP = async (email: string) => { 
        const payload = {email }
        const url = `${baseURL}/otp/sendOTP`;
        const controller = new AbortController();

        try {
            const response = await axios({
                url: url,
                method: 'get',
                params: payload,
                withCredentials: true,
                signal: controller.signal,
            })

            return response
            
        } catch (error:any) {
            return error.response
        }
    }
    static VerifyOTP = async (email: string, otp: string,isSignIn:boolean) => { 
        
        const url = `${baseURL}/otp/${isSignIn ? "verifySignUpOTP" : "verifyOTP"}`;
        const payload = { email, otp }
        const controller = new AbortController();
        try {   
            const response = await axios({
                url: url,
                method: 'post',
                data: payload,
                withCredentials: true,
                signal: controller.signal,
            })

            return response
            
        } catch (error:any) {
            return error.response
        }

    }

    static verifyCaptcha = async (token: string) => {
        const url = `${baseURL}/users/verifyCaptcha`;
        const controller = new AbortController();
        try {
            const response = await axios({
                url: url,
                method: 'post',
                data: { token },
                signal: controller.signal,
            })

            return response
            
        } catch (error:any) {
            return error.response
        }
    }

    static verifyToken = async (accessToken:string) => { 
        const url = `${baseURL}/users/verifyToken`;
        const controller = new AbortController();
        try {
            const response = await axios({
                url: url,
                method: 'get',
                withCredentials: true,
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                signal: controller.signal,
            })

            return response
            
        } catch (error:any) {
            return error.response
        }
    }
}

export default AuthRepository;
