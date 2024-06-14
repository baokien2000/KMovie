import { StateCreator as ZustandStateCreator, create } from "zustand";


export type FilterStore = {
    status: string | null;
   categories: string[] ;
    year: string | null;
    type: string | null;
    sort: string | null;
    country: string | null;
    setStatus: (status: string | null) => void;
    setCategories: (categories: string[] ) => void;
    setYear: (year: string | null) => void;
    setType: (type: string | null) => void;
    setSort: (type: string | null) => void;
    setCountry: (country: string | null) => void;
    reset: () => void;
};
let initialStatus = null;
let initialCategories:string[] = [];
let initialYear = null;
let initialType = null;
let initialSort = null;
let initialCountry = null;

if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    initialStatus = params.get('status');
    initialCategories = params.get('categories')?.split(' ') || [];
    initialYear = params.get('year');
    initialType = params.get('type');
    initialSort = params.get('sort');
    initialCountry = params.get('country');
}
const storeApi: ZustandStateCreator<FilterStore> = (set) => ({
    country: initialCountry,
    status: initialStatus,
    categories: initialCategories,
    year:  initialYear,
    type: initialType,
    sort: initialSort,
    setCountry: (country: string | null) => set(() => ({ country })),
    setStatus: (status: string | null) => set(() => ({ status })),
    setCategories: (categories: string[] ) => set(() => ({ categories })),
    setYear: (year: string | null) => set(() => ({ year })),
    setType: (type: string | null) => set(() => ({ type })),
    setSort: (sort: string | null) => set(() => ({ sort })),
    reset: () => set(() => ({ status: null, categories: [], year: null, type: null,sort: null})),
});

export const useFilterStore = create<FilterStore>(storeApi)
