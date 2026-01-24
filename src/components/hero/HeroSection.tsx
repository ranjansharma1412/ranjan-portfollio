import { motion } from 'framer-motion';
import { heroHeadlineVariants, heroImageVariants } from '../../animations/motionVariants';
import { PersonalDetails } from '../../constants/constants';

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-6 lg:px-12 py-24 lg:py-32 items-center bg-[#F7FAD4]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroHeadlineVariants}
        className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-16 order-2 lg:order-1"
      >
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold leading-tight text-[#11654f]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hey There, <br /> I'm {PersonalDetails.name}
        </motion.h2>

        <motion.p
          className="mt-4 lg:mt-6 text-base lg:text-lg text-gray-600 max-w-lg"
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
            <p className="text-2xl lg:text-3xl font-bold text-[#11654f]">{PersonalDetails.experience}</p>
            <span className="text-sm">{PersonalDetails.experience_text}</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0"
        initial="hidden"
        animate="visible"
        variants={heroImageVariants}
      >
        <img
          src={PersonalDetails.profilImage}
          alt={PersonalDetails.name}
          className="relative z-10 w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover bg-white shadow-2xl border-4 border-white"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
