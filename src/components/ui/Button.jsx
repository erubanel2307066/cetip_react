import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

const Button = ({
    children,
    variant = 'primary',
    className,
    to,
    href,
    ...props
}) => {
    const variants = {
        primary: "bg-primary-700 text-white hover:bg-primary-800 shadow-lg shadow-primary-700/20",
        secondary: "bg-accent-yellow text-primary-900 hover:bg-accent-yellowHover shadow-lg shadow-accent-yellow/20",
        outline: "border-2 border-primary-700 text-primary-700 hover:bg-primary-50",
        ghost: "text-gray-600 hover:text-primary-700 hover:bg-gray-100/50"
    };

    if (to) {
        return (
            <Link to={to} className={cn("no-underline", className)}>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                        "px-6 py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 w-full",
                        variants[variant],
                        // Remove className here to avoid duplication if passed to Link, but usually className on Button is for button styles.
                        // Actually, better to render motion.create(Link) but that's complex.
                        // Simpler: Just render the button inside Link, but the button shouldn't have onClick if Link handles nav.
                        // OR: Render Link with the button styles.
                    )}
                    {...props}
                >
                    {children}
                </motion.button>
            </Link>
        )
    }

    // Check if it's an external link or hash link that should use <a>
    const Component = href ? motion.a : motion.button;

    return (
        <Component
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={href}
            className={cn(
                "px-6 py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
