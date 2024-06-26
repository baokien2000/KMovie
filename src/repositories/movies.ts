import { IOphimMovie} from "@/interface/movies";
import { cache } from "react";
import axios from "axios";
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

    static getMovieBySlug = cache(async (slug: string): Promise<IOphimMovie | undefined> => { 
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
        })
    
    static getFilterMovie = cache(async(
        page: number,
        pageSize: number,
        sort?: string,
        type?: string,
        year?: string,
        category?: string,
        status?: string,
        country?: string,
    ) => {
        const payload = {
            page: page,
            pageSize: pageSize,
            sort: sort ?? null,
            type: type ?? null,
            status:status?? null,
            year: year ?? null,
            categories: category?.split(" ") ?? null,
            country: country ?? null,
        }
        const url = baseURL+"/movies/FilterMovie";
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
    static getCountryMovies = cache(async (page: number,pageSize:number,country:string) => {
        const url = baseURL + "/movies/Country";
        const payload = {
            page: page,
            pageSize: pageSize,
            country: country
        }
        try {
            const response = await axios({
                method: "get",
                url: url,
                params:payload
            })
            return response.data
        } catch (error) {
            console.log("error",error);
            return;
        }
    })
    static getCategoryMovies = cache(async (page: number,pageSize:number,category:string) => {
        const url = baseURL + "/movies/Category";
        const payload = {
            page: page,
            pageSize: pageSize,
            category: category
        }
        try {
            const response = await axios({
                method: "get",
                url: url,
                params:payload
            })
            return response.data
        } catch (error) {
            console.log("error",error);
            return;
        }
    })
    static getYearMovies = cache(async (page: number,pageSize:number,year:string) => {
        const url = baseURL + "/movies/Year";
        const payload = {
            page: page,
            pageSize: pageSize,
            year: year
        }
        try {
            const response = await axios({
                method: "get",
                url: url,
                params:payload
            })
            return response.data
        } catch (error) {
            console.log("error",error);
            return;
        }
    })
    
    static getMovieBySlugArray = cache(async (page: number, pageSize: number, slugs: string[]) => {
        const url = baseURL + "/movies/getMoviesBySlug";
        const payload = {
            page: page,
            pageSize: pageSize,
            slugs: slugs
        }
        try {
            const response = await axios({
                method: "get",
                url: url,
                params:payload
            })
            return response.data
        } catch (error) {
            console.log("error",error);
            return;
        }
    })

    static getEpisodeHistory = async (userId: string, slug: string) => {
        const url = baseURL + "/history/getEpisodeHistory";
        const payload = {
            userId: userId,
            movieSlug: slug
        }
        try {
            const response = await axios({
                method: "get",
                url: url,
                params:payload
            })
            return response.data
        } catch (error) {
            console.log("error",error);
            return;
        }
    }
    static addEpisodeHistory = async (userId: string, movieSlug: string, episodeSlug: string) => { 
        const url = baseURL + "/history/addEpisodeHistory";
        const payload = {
            userId: userId,
            movieSlug: movieSlug,
            episodeSlug: episodeSlug
        }
        try {
            const response = await axios({
                method: "post",
                url: url,
                data:payload
            })
            return response.data
        } catch (error) {
            console.log("error",error);
            return;
        }
    }
    static getHistoryKMovie = async (page: number, pageSize: number,userId:string) => { 
        const url = baseURL + "/history/getHistory";
        const payload = {
            page: page,
            pageSize: pageSize,
            userId: userId
        }
        try {
            const response = await axios({
                method: "get",
                url: url,
                params:payload
            })
            return response.data
        } catch (error) {
            console.log("error",error);
            return;
        }
    }
    static getViewedMovie = async (userId: string) => {
        const url = baseURL + "/history/getViewedMovie";
        const payload = {
            userId: userId
        }
        try {
            const response = await axios({
                method: "get",
                url: url,
                params: payload
            })
            return response.data
        } catch (error) {
            console.log("error", error);
            return;
        }
     }

}

export default MoviesRepository;
