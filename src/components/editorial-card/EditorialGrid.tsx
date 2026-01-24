// EditorialGrid.tsx
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projectsCards } from "../../mockdata/ProductMockData";
import CardModal from "./CardModal";
import EditorialCard from "./EditorialCard";


const EditorialGrid = () => {
    const [activeCard, setActiveCard] = useState<any | null>(null);

    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-10 bg-[#FCFCED]">
                <h1 className="text-[44px] font-bold text-[#112d42] mb-14 text-center uppercase">Recents Projects</h1>
                <div className="space-y-8">
                    {projectsCards.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`grid grid-cols-1 ${rowIndex / 2 == 0 ? "md:grid-cols-[5fr_4fr]" : "md:grid-cols-[4fr_5fr]"} gap-8 auto-rows-[320px]`}
                        >
                            {row.map((card) => (
                                <EditorialCard
                                    key={`${card.id}${rowIndex}`}
                                    card={card}
                                    onClick={() => setActiveCard(card)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeCard && (
                    <CardModal
                        card={activeCard}
                        onClose={() => setActiveCard(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default EditorialGrid;
