//  Purpose: Define the interface for the movies list
export interface ImovieList {
    blurImagesUrls?: string[];
    status: boolean;
    items: IMovie[];
    pathImage: string,
    pagination: {
        totalItems: number,
        totalItemsPerPage: number,
        currentPage: number,
        totalPages: number
    }
}
export interface IMovie {
    modified?: {
        time: Date;
    };
    _id: string;
    name: string;
    slug: string;
    blurImage?: string;
    origin_name?: string;
    thumb_url: string;
    poster_url: string;
    category: ICategory[],
    episode_current: string,
    episode_total: string,
    year: number;
    view: number;
    status: string;
    type: string;
    time: string;
}



//  Purpose: Define the interface for the movies details
export interface IOphimMovie {
    status: boolean;
    msg: string;
    movie: IMovieDetails;
    episodes: IServer[];
  }
export interface IMovieDetails {
    tmdb: Tmdb;
    imdb: Imdb;
    created: Time;
    modified: Time;
    _id: string;
    name: string;
    origin_name: string;
    content: string;
    type: string;
    status: string;
    thumb_url: string;
    trailer_url: string;
    time: string;
    episode_current: string;
    episode_total: string;
    quality: string;
    lang: string;
    notify: string;
    showtimes: string;
    slug: string;
    year: number;
    view: number;
    actor: string[];
    director: string[];
    category: ICategory[];
    country: Country[];
    is_copyright: boolean;
    chieurap: boolean;
    poster_url: string;
    sub_docquyen: boolean;
}
  
interface Tmdb {
    type: null | string;
    id: string;
    season: null | string;
    vote_average: number;
    vote_count: number;
  }
  
  interface Imdb {
    id: string;
}
interface Time {
    time: string;
}
export interface ICategory {
    id: string;
    name: string;
    slug: string;
}
interface Country {
    id: string;
    name: string;
    slug: string;
}
export interface IServer {
    server_name: string;
    server_data: IServerData[];
}
export interface IServerData {
    name: string;
    slug: string;
    filename: string;
    link_embed: string;
    link_m3u8: string;
  }