import { motion } from "framer-motion";

type Props = {
    card: any;
    onClick: () => void;
};

const EditorialCard = ({ card, onClick }: Props) => {
    return (
        <motion.div
            layoutId={card.id}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={onClick}
            className="relative cursor-pointer overflow-hidden rounded-3xl"
        >
            {/* Background Image */}
            <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Category (Top-left) */}
            <div className="relative z-10 p-6">
                <p className="text-xs uppercase tracking-wide opacity-80 text-white font-semibold">
                    {card.category}
                </p>
            </div>

            {/* Centered Title */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-white text-center leading-snug max-w-xl">
                    {card.title}
                </h2>
            </div>
        </motion.div>
    );
};

export default EditorialCard;
