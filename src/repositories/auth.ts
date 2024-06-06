import { cache } from "react";
import { baseURL } from ".";
import axios from "axios";

class AuthRepository {

    static Login = async (name: string,password:string) => {
        const payload = {name,password }
        const url = `${baseURL}/users/login`;
        const controller = new AbortController();

        try {
            const response = await axios({
                url: url,
                method: 'post',
                data: payload,
                withCredentials: true,
                signal: controller.signal,
            })

            return response.data
            
        } catch (error) {
            console.log(error)
        }
    }
    static SignUp = async (name: string,password:string) => {
        const payload = {name,password }
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

            return response.data
            
        } catch (error) {
            console.log(error)
        }
    }
    static RefreshToken = async () => {
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
    
}

export default AuthRepository;
