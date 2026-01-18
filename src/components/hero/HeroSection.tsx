import { motion } from 'framer-motion';
import { heroHeadlineVariants, heroImageVariants } from '../../animations/motionVariants';
import heroImage from '../../assets/images/hero.png';

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
          Hey There, <br /> I'm Rnajan
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I am a React Native developer with 6+ years of experience building high-quality, offline-first mobile applications. I specialize in app publishing, CI/CD integration, and secure, scalable solutions, with additional experience in Node.js, MongoDB, GraphQL, and Swift UI.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div>
            <p className="text-3xl font-bold">6+</p>
            <span className="text-sm">Years Experience</span>
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
          src={heroImage}
          alt="Rnajan"
          className="relative z-10 w-80 h-80 rounded-full object-cover shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
