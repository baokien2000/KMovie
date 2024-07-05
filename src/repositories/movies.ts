import { ICommentList, IOphimMovie} from "@/interface/movies";
import { cache } from "react";
import axios from "axios";
import { baseURL, resourceURL } from ".";



  
class MoviesRepository {

    static searchKMovie = cache(async (value: string, limit: number) => {
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
    static getRecommendedMovies = cache(async (limit:number) => { 
        const url = baseURL + "/movies/getRecommendedMovies";
        try {
            const response = await axios({
                method: "get",
                url: url,
                params: {limit}
            })
            return response.data
        } catch (error:any) {
            console.log("error",error);
            return ;
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
        const url = baseURL + "/movies";
    
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
    
    static getFilterMovie = cache(async (
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
            status: status ?? null,
            year: year ?? null,
            categories: category?.split(" ") ?? null,
            country: country ?? null,
        }
        const url = baseURL + "/movies/FilterMovie";
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
    static getCountryMovies = cache(async (page: number, pageSize: number, country: string) => {
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
                params: payload
            })
            return response.data
        } catch (error) {
            console.log("error", error);
            return;
        }
    })
    static getTypeMovies = cache(async (page: number, pageSize: number, type: string) => {
        const url = baseURL + "/movies/getTypeMovies";
        const payload = {
            page: page,
            pageSize: pageSize,
            type: type
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
            return
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
    

    static addMovieComment = async ({ movieId, userId, content }: { movieId: string, userId: string, content: string }) : Promise<any>=> {
        const url = baseURL + "/comment/addComment";
        const payload = {
            movieId: movieId,
            userId: userId,
            content: content
        }
        try {
            const response = await axios({
                method: "post",
                url: url,
                data: payload
            })
            return response
        } catch (error : any) {
            console.log("error", error);
            return error.response;
        }
     }
    static getMovieCommentById = async (movieId: string,page:number,limit:number):Promise<ICommentList | null> => {
        const url = baseURL + "/comment/getMovieCommentById";
        const payload = {movieId,page,limit}
        try {
            const response = await axios({
                method: "get",
                url: url,
                params: payload
            })
            return response.data 
        
        } catch (error) {
            console.log("error", error);
            return null;
        }
    }
    static replyMovieComment = async ({ movieId, userId, content, replyId }: { movieId: string, userId: string, content: string, replyId: string }) : Promise<any>=> { 
        const url = baseURL + "/comment/replyComment";
        const payload = {
            movieId: movieId,
            userId: userId,
            content: content,
            replyId: replyId
        }
        try {
            const response = await axios({
                method: "post",
                url: url,
                data: payload
            })
            return response
        } catch (error : any) {
            return error.response;
        }
    }
    static addMovieReview = async (userId: string, movieSlug: string, star: number) => { 
        const url = baseURL + "/movies/addMovieReview";
        const payload = {
            userId: userId,
            slug: movieSlug,
            rating: star
        }
        try {
            const response = await axios({
                method: "put",
                url: url,
                data: payload
            })
            return response
        } catch (error: any) {
            return error.response
        }
    }
    static getUserMovieReview = async (movieSlug: string, userId: string) => { 
        const url = baseURL + "/movies/getUserMovieReview";
        const payload = {
            userId: userId,
            slug: movieSlug
        }
        try {
            const response = await axios({
                method: "get",
                url: url,
                params: payload
            })
            return response.data
        } catch (error: any) {
            return error.response
        }
    }
}

export default MoviesRepository;
