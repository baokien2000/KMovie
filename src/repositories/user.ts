import { cache } from "react";
import { baseURL } from ".";
import axios from "axios";
import { IUser } from "@/interface/user";
import { getBase64 } from "@/utils/image";

class UserRepository {

    static updateUser = async (user: IUser,payload: any) => {
        const url = `${baseURL}/users/update`;
        const controller = new AbortController();
        try {
            const response = await axios({
                url: url,
                method: 'put',
                headers: {
                    'Authorization': `Bearer ${user.accessToken}`, // Sử dụng access token để xác thực
                    'Content-Type': 'application/json',
                  },
                data: payload,
                withCredentials: true,
                signal: controller.signal,
            })

            return response
            
        } catch (error:any) {
            return error.response
        }
    }
    static sendFeedback = async (userId: string, rating: number, feedback: string) => {
        const url = `${baseURL}/users/sendFeedback`;
        const controller = new AbortController();
        try {
            const response = await axios({
                url: url,
                method: 'post',
                data: {
                    userId,
                    rating,
                    feedback
                },
                withCredentials: true,
                signal: controller.signal,
            })

            return response
            
        } catch (error: any) {
            return error.response
        }
    }
}

export default UserRepository;
