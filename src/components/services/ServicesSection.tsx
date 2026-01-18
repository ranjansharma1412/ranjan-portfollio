import { motion } from 'framer-motion';
import { Monitor, PenTool, Smartphone } from 'lucide-react'; // Clean line icons
import { serviceCardVariants } from '../../animations/motionVariants';

const services = [
  {
    title: "Website Design",
    projects: "76 Projects",
    color: "bg-[#147b74]", // Deep Teal
    icon: <Monitor className="text-white w-6 h-6" />
  },
  {
    title: "Mobile App Design",
    projects: "63 Projects",
    color: "bg-[#f0bc4c]", // Golden Yellow
    icon: <Smartphone className="text-white w-6 h-6" />
  },
  {
    title: "Brand Identity",
    projects: "47 Projects",
    color: "bg-[#f16643]", // Soft Orange
    icon: <PenTool className="text-white w-6 h-6" />
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="px-8 py-24 grid md:grid-cols-2 gap-16 items-center bg-[#FCFCED]">
      {/* LEFT SIDE: Service Cards */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-white p-7 rounded-[2rem] flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50"
            variants={serviceCardVariants}
            custom={index}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Icon Container */}
            <div className={`w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center ${item.color} shadow-lg`}>
              {item.icon}
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-bold text-[#112d42]">{item.title}</h3>
              <p className="text-gray-500 font-medium mt-1">{item.projects}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* RIGHT SIDE: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl font-bold text-[#112d42] leading-tight">
          What do I help?
        </h2>
        <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-md">
          I help you find solutions and solve problems using
          user-centered design to help your business grow.
        </p>

        <div className="mt-12 flex gap-16">
          <div>
            <p className="text-4xl font-bold text-[#112d42]">285+</p>
            <span className="text-gray-500 font-medium">Projects Completed</span>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#112d42]">190+</p>
            <span className="text-gray-500 font-medium">Happy Clients</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;