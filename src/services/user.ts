import { IUser } from "@/interface/user";
import UserRepository from "@/repositories/user";
export interface IUpdateUserPayloadProps{
    gender: string;
    name: string;
    avatar: string | null;
}
export async function updateUser (user: IUser, payload: IUpdateUserPayloadProps) {
    return await UserRepository.updateUser(user,payload);
}
export async function sendFeedback ( userId: string, rating: number, feedback: string ) {
    return await UserRepository.sendFeedback(userId,rating,feedback);
}