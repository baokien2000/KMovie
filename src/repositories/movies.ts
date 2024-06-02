import { ImovieList } from "@/interface/movies";
import { cache } from "react";
import axios from "axios";


// const baseURL = "https://kmovie-api.vercel.app/m ovies"
const baseURL = "http://localhost:5000/movies";
class MoviesRepository {

    static searchKMovie = cache(async (value: string,limit:number) => {
        const payload = {
            value: value,
            limit: limit,
        }
        const url = `${baseURL}/Search`;
        try {
            const response = await axios({
                method: 'get',
                url: url,
                params: payload,
            });
            return response.data
        } catch (error) {
            console.log(error)
        }
    })

    static getKMovie = cache(async (
        page: number,
        pageSize: number,
        search?: string,
    ) => { 
        const payload = {
            page: page,
            pageSize: pageSize,
            search: search ?? "",
        }
        const url = baseURL;
    
        try {
            const response = await axios({
                method: 'get',
                url: url,
                params: payload,
            });
            return response.data
        } catch (error) {
            console.log(error)
        } 
    })

}

export default MoviesRepository;
