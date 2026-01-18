import { motion } from 'framer-motion';
import { ctaTextVariants } from '../../animations/motionVariants';

const Footer = () => {
  return (
    <footer className="px-8 py-20 bg-[#F7FAD4]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl font-bold"
          variants={ctaTextVariants}
        >
          Let's make something <br /> amazing together.
        </motion.h2>

        <motion.p
          className="mt-4 text-orange-500 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth'
            });
          }}
          style={{ cursor: 'pointer' }}
        >
          Start by saying hi
        </motion.p>
      </motion.div>

      <motion.p
        className="mt-10 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        © 2026 Rnajan. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
