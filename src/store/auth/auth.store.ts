import {  persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { StateCreator as ZustandStateCreator, create } from "zustand";
import { IUser } from "@/interface/user";


export type AuthStore = {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
    updateUserToken: (string: string) => void;
  
};

const storeApi: ZustandStateCreator<AuthStore> = (set) => ({
    user: null,
 
    setUser: (user: IUser | null) => set(() => ({ user })),
    updateUserToken: (accessToken: string) => set((state) => {
        if(state.user === null) return state;
        state.user.accessToken = accessToken;
        return state;
    }),
   
});

export const useAuthStore = create<AuthStore>()(
        persist(immer(storeApi), {
            name: "auth",
            partialize: (state) => ({
                user: state.user,
            })
        }),

);
