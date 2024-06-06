import { IMovie, IOphimMovie, ImovieList } from "@/interface/movies";
import { cache } from "react";
import axios from "axios";
import { dynamicBlurDataUrl } from "@/utils/image";
import { baseURL, resourceURL } from ".";



class MoviesRepository {

    static searchKMovie = cache(async (value: string,limit:number) => {
        const payload = {
            value: value,
            limit: limit,
        }
        const url = `${baseURL}/movies/Search`;
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
        const url = baseURL+"/movies";
    
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

    static getMovieBySlug = async (slug: string): Promise<IOphimMovie | undefined> => { 
            const url = resourceURL + slug
            try {
                const response = await axios({
                    method: 'get',
                    url: url,
                });
                return response.data as IOphimMovie
            } catch (error) {
                console.log(error)
            } 
        }
    
}

export default MoviesRepository;
