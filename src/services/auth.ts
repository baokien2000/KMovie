import { IUser } from "@/interface/user";
import AuthRepository from "@/repositories/auth";

export async function Login(email: string, password: string) {
    return await AuthRepository.Login(email,password);
}
export async function SignUp(email: string, password: string) {
    return await AuthRepository.SignUp(email,password);
}
export async function resetPassword(email: string, password: string, token: string) { 
    return await AuthRepository.ResetPassword(email,password,token);
}
export async function changePassword(user: IUser,  oldPassword: string, newPassword: string) { 
    return await AuthRepository.changePassword(user,oldPassword,newPassword);
}
export async function refreshToken() {
    return await AuthRepository.RefreshToken();
}

export async function SendOTP (email: string) {
    return await AuthRepository.SendOTP(email);
}

export async function VerifyOTP (email: string, otp: string) {
    return await AuthRepository.VerifyOTP(email,otp);
}

export async function verifyCaptcha(token: string) {
    return await AuthRepository.verifyCaptcha(token);
 }