// components/CardModal.tsx
import { motion } from "framer-motion";

type Props = {
    card: any;
    onClose: () => void;
};

const CardModal = ({ card, onClose }: Props) => {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                layoutId={card.id}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full"
            >
                <img
                    src={card.image}
                    className="w-full h-[360px] object-cover"
                />

                <div className="p-6">
                    <p className="text-xs uppercase text-gray-500 mb-2">
                        {card.category}
                    </p>
                    <h2 className="text-3xl font-semibold mb-4">
                        {card.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {card.description}
                    </p>
                </div>
                <div className="flex flex-row w-full justify-center py-3">
                    <button onClick={() => { }} className="text-[#11654f] outline-1 rounded-full outline-[#11654f] px-8 py-1 mb-5 cursor-pointer">Visit</button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CardModal;
