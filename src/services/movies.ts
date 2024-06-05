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