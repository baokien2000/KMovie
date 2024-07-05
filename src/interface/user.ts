export type IGender = "male" | "female" | "unKnow" | "other"
export interface IUser{
    accessToken: string;
    email: string;
    name: string;
    gender: IGender;
    avatar: string;
    isReviewed?:boolean
    _id: string;
    createdAt: string;
    updatedAt: string;
    
}