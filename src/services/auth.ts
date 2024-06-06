import AuthRepository from "@/repositories/auth";

export async function Login(name: string, password: string) {
    return await AuthRepository.Login(name,password);
}
export async function SignUp(name: string, password: string) {
    return await AuthRepository.SignUp(name,password);
}
export async function refreshToken() {
    return await AuthRepository.RefreshToken();
}