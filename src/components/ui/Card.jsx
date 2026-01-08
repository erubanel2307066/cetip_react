import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Card = ({ children, className, hover = true, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
            className={cn(
                "bg-white rounded-2xl shadow-xl p-6 border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
