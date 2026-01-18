import { motion } from 'framer-motion';
import { heroHeadlineVariants, heroImageVariants } from '../../animations/motionVariants';
import { PersonalDetails } from '../../constants/constants';

const HeroSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-12 px-8 py-20 items-center bg-[#F7FAD4]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroHeadlineVariants}
        className="flex flex-col pl-16 mt-20"
      >
        <motion.h2
          className="text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hey There, <br /> I'm {PersonalDetails.name}
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {PersonalDetails.short_bio}
        </motion.p>

        <motion.div
          className="mt-8 flex gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div>
            <p className="text-3xl font-bold">{PersonalDetails.experience}</p>
            <span className="text-sm">{PersonalDetails.experience_text}</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={heroImageVariants}
      >
        <img
          src={"src/assets/images/ranjan_img.jpg"}
          alt="Rnajan"
          className="relative z-10 w-80 h-80 rounded-full object-contain bg-white shadow-2xl "
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
