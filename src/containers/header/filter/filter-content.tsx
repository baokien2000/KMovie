import { TabPanels } from "@headlessui/react";
import React from "react";
import CategoryContent from "./content/categories";
import YearContent from "./content/years";
import CountriesContent from "./content/countries";
import { useFilterStore } from "@/store/movies/filter.store";

const FilterContent = ({ close }: { close: () => void }) => {
    const reset = useFilterStore((state) => state.reset);
    const handleClose = () => {
        reset();
        close();
    };
    return (
        <TabPanels>
            <CategoryContent close={handleClose} />
            <YearContent close={handleClose} />
            <CountriesContent close={handleClose} />
        </TabPanels>
    );
};

export default FilterContent;
