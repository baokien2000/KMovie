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
    category: ICategory_Country[],
    episode_current: string,
    episode_total: string,
    year: number;
}

export interface ICategory_Country{
    id: string,
    name: string,
    slug: string
}