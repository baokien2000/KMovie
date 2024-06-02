import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div className="h-full flex-1" transition={{ duration: 1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            {children}
        </motion.div>
    );
};

export default PageTransition;
