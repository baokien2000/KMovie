import MoviesRepository from "@/repositories/movies";

export async function getKMovie(page: number, pageSize: number,search?: string) {
    return await MoviesRepository.getKMovie(page,pageSize,search);
}

export async function searchKMovie(value: string,limit:number) {
    if(value.length === 0) return null;
    return await MoviesRepository.searchKMovie(value,limit);
}
export async function getMovieBySlug(slug: string) {
    return await MoviesRepository.getMovieBySlug(slug);
}
export async function getFilterMovie(page: number, pageSize: number, sort?: string, type?: string, year?: string, category?: string,status?:string,country?:string) {
    return await MoviesRepository.getFilterMovie(page, pageSize, sort, type, year, category,status,country);
}
export async function getCategoryMovies(page: number, pageSize: number, category: string) { 
    return await MoviesRepository.getCategoryMovies(page, pageSize, category);
}