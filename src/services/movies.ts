import MoviesRepository from "@/repositories/movies";

export async function getKMovie(page: number, pageSize: number,search?: string) {
    return await MoviesRepository.getKMovie(page,pageSize,search);
}
export async function getRecommendedMovies(limit:number) { 
    return await MoviesRepository.getRecommendedMovies(limit);

}

export async function searchKMovie(value: string,limit:number) {
    if(value.length === 0) return null;
    return await MoviesRepository.searchKMovie(value,limit);
}
export async function getMovieBySlug(slug: string) {
    return await MoviesRepository.getMovieBySlug(slug);
}
export async function getMovieBlurImage(slug: string) {
    return await MoviesRepository.getMovieBlurImage(slug);
}
export async function getFilterMovie(page: number, pageSize: number, sort?: string, type?: string, year?: string, category?: string,status?:string,country?:string) {
    return await MoviesRepository.getFilterMovie(page, pageSize, sort, type, year, category,status,country);
}
export async function getCategoryMovies(page: number, pageSize: number, category: string) { 
    return await MoviesRepository.getCategoryMovies(page, pageSize, category);
}
export async function getCountryMovies(page: number, pageSize: number, country: string) { 
    return await MoviesRepository.getCountryMovies(page, pageSize, country);
}
export async function getTypeMovies(page: number, pageSize: number, type: string) { 
    return await MoviesRepository.getTypeMovies(page, pageSize, type);

}
export async function getYearMovies(page: number, pageSize: number, year: string) { 
    const yearRegex = /^[0-9]{4}$/;
    if (yearRegex.test(year) || year === "19XX") {
        return await MoviesRepository.getYearMovies(page, pageSize, year  );
    } else {
        return null;
    }
}

export async function getMovieBySlugArray(page: number, pageSize: number, slugs: string[]) { 
    return await MoviesRepository.getMovieBySlugArray(page, pageSize, slugs);
}

export async function getEpisodeHistory(userId: string, slug: string) { 
    if(!userId || userId.length === 0) return null;
    return await MoviesRepository.getEpisodeHistory(userId, slug);
}
export async function addEpisodeHistory(userId:string,movieSlug:string,episodeSlug:string) { 
    return await MoviesRepository.addEpisodeHistory(userId, movieSlug, episodeSlug);
}
export async function getHistoryKMovie(page: number, pageSize: number, userId: string) {
    if (!userId || userId.length === 0) return null;
    return await MoviesRepository.getHistoryKMovie(page,pageSize,userId);
}
export async function getBookmarkMovie(page: number, pageSize: number, userId: string) {
    if (!userId || userId.length === 0) return null;
    return await MoviesRepository.getBookmarkMovie(page,pageSize,userId);
}
export async function getViewedMovie(userId: string) { 
    if (!userId || userId ?.length === 0) return null;
    return await MoviesRepository.getViewedMovie(userId);
}
export async function checkMovieIsMarked(userId: string,slug:string) {
    if (!userId || userId.length === 0) return false;
    return await MoviesRepository.checkMovieIsMarked(userId,slug);
}
export async function removeBookmark(userId: string, slug: string) { 
    return await MoviesRepository.removeBookmark(userId, slug);
}
export async function addBookmark(userId: string, slug: string) {
    return await MoviesRepository.addBookmark(userId, slug);
}

export async function addMovieComment({ movieId, userId, content }:{movieId:string,userId:string,content:string}) {
    return await MoviesRepository.addMovieComment({ movieId, userId, content });
}
export async function getMovieCommentById(movieId: string,page:number,limit:number) {
    return await MoviesRepository.getMovieCommentById(movieId,page,limit);
}
export async function replyMovieComment({ movieId, userId, content, replyId }: { movieId: string, userId: string, content: string,replyId:string }) {
    return await MoviesRepository.replyMovieComment({ movieId, userId, content,replyId });
}
export async function addMovieReview(userId: string, movieSlug: string, star: number) {
    return await MoviesRepository.addMovieReview(userId, movieSlug, star);

}
export async function getUserMovieReview(movieSlug: string, userId: string) {
    return await MoviesRepository.getUserMovieReview(movieSlug, userId);
}

export async function addMovieReport(userId:string,slug:string,episode:string,reason:string) {
    return await MoviesRepository.addMovieReport(userId,slug,episode,reason);
}