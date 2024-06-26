import {  persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { StateCreator as ZustandStateCreator, create } from "zustand";


export type UserStore = {
    bookmarks: string[]
    setBookmark: (bookmark: string[]) => void;
    currentAvatar: string | null;
    setCurrentAvatar: (file: string | null) => void;
};

const storeApi: ZustandStateCreator<UserStore> = (set) => ({
    currentAvatar: null,
    setCurrentAvatar: (currentAvatar: string | null) => set(() => ({ currentAvatar })),
    bookmarks: [],
    setBookmark: (bookmarks: string[]) => set(() => ({ bookmarks })),

});

export const useUserStore = create<UserStore>()(
        persist(immer(storeApi), {
            name: "user",
            partialize: (state) => ({
                bookmarks: state.bookmarks,
            })
        }),

);
