import { TabPanels } from "@headlessui/react";
import React from "react";
import CategoryContent from "./content/categories";
import YearContent from "./content/years";
import CountriesContent from "./content/countries";
import { useFilterStore } from "@/store/movies/filter.store";

const FilterContent = ({ close }: { close: () => void }) => {
    return (
        <TabPanels>
            <CategoryContent close={close} />
            <YearContent close={close} />
            <CountriesContent close={close} />
        </TabPanels>
    );
};

export default FilterContent;
