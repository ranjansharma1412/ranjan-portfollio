import { motion } from "framer-motion";
const SocialIcon = ({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) => (
    <motion.a
        href={href}
        target="_blank"
        aria-label={label}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-gray-400 hover:text-white"
    >
        {children}
    </motion.a>
);

export default SocialIcon
