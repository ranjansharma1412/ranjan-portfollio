import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type TooltipProps = {
    content: string;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
};

const positionMap = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "bottom-full left-1/2 -translate-x-1/2 mb-2 md:bottom-auto md:left-auto md:right-full md:top-1/2 md:-translate-y-1/2 md:mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const Tooltip = ({
    content,
    children,
    position = "left",
}: TooltipProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative inline-flex hover:outline-1 hover:outline-amber-300 rounded-xl py-2"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
        >
            {children}

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className={`
              absolute z-50 w-full
              p-5 font-medium text-[#11654f]
              bg-[#f8f9db] rounded-lg shadow-lg
              mr-10 whitespace-pre-line italic
              ${positionMap[position]}
            `}
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Tooltip;
