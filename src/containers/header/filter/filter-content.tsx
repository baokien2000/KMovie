import { TabPanels } from "@headlessui/react";
import React from "react";
import CategoryContent from "./content/categories";
import YearContent from "./content/years";
import CountriesContent from "./content/countries";

const FilterContent = () => {
    return (
        <TabPanels>
            <CategoryContent />
            <YearContent />
            <CountriesContent />
        </TabPanels>
    );
};

export default FilterContent;
