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


export async function SendOTP (email: string) {
    return await AuthRepository.SendOTP(email);
}

export async function verifyToken (accessToken:string,email:string) {
    return await AuthRepository.verifyToken(accessToken,email);
}
export async function VerifyOTP (email: string, otp: string,isSignIn: boolean) {
    return await AuthRepository.VerifyOTP(email,otp,isSignIn);
}
export async function verifyCaptcha(token: string) {
    return await AuthRepository.verifyCaptcha(token);
 }