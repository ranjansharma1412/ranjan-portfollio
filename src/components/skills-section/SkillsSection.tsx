import { motion } from "framer-motion";
import { skills } from "../../mockdata/ProductMockData";

const SkillsSection = () => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-[44px] font-bold text-[#112d42] mb-14 text-center uppercase w-full"
                >
                    Skills
                </motion.h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 place-items-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                            className="group flex flex-col items-center"
                        >
                            <i
                                className={`${skill.icon} text-4xl text-gray-600
                            group-hover:text-black transition-colors`}
                            />

                            {/* Label on hover */}
                            <span
                                className="mt-2 text-xs font-medium text-gray-500
                           text-center max-w-[90px]"
                            >
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
