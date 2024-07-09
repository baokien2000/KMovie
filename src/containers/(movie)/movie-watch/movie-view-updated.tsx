"use client";
import { addEpisodeHistory } from "@/services/movies";
import { useAuthStore } from "@/store/auth/auth.store";
import React, { useEffect } from "react";
interface MovieViewUpdatedProps {
    episodeId: string;
    movieSlug: string;
}
const MovieViewUpdated = ({ episodeId, movieSlug }: MovieViewUpdatedProps) => {
    const user = useAuthStore((state) => state.user);
    useEffect(() => {
        if (user?._id) {
            const addHistoryEpisode = async () => {
                const addRes = await addEpisodeHistory(user?._id, movieSlug, episodeId);
            };
            addHistoryEpisode();
        }
    }, [user?._id]);
    return null;
};

export default MovieViewUpdated;
