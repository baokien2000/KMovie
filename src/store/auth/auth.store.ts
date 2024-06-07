import {  persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { StateCreator as ZustandStateCreator, create } from "zustand";


export type AuthStore = {
    user: any | null;
    setUser: (user: any | null) => void;
    updateUserToken: (string: string) => void;
};

const storeApi: ZustandStateCreator<AuthStore> = (set) => ({
    user: null,
    setUser: (user: any | null) => set(() => ({ user })),
    updateUserToken: (accessToken: string) => set((state) => {
        state.user.accessToken = accessToken;
        return state;
    }),
   
});

export const useAuthStore = create<AuthStore>()(
        persist(immer(storeApi), {
            name: "user",
            partialize: (state) => ({
                user: state.user,
            })
        }),

);
