import { motion } from 'framer-motion';
import { workExperiences } from '../../mockdata/ProductMockData';
import Tooltip from '../tooltip/Tooltip';

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="bg-[#FCFCED] px-6 py-14">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[44px] font-bold text-[#112d42] mb-14 text-center uppercase">
          My Work Experience
        </h2>

        <div className="relative">
          {/* Vertical Dashed Line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 h-full w-0 border-l-2 border-dashed border-gray-300" />

          <div className="space-y-20">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative grid grid-cols-[40px_1fr] md:grid-cols-[1fr_100px_1fr] items-start md:items-center"
              >
                {/* LEFT: Company & Period */}
                <div className="hidden md:block text-right pr-12">
                  <h4 className="text-xl font-bold text-[#112d42] mb-2">{exp.company_name}</h4>
                  <p className="text-gray-500 text-sm font-medium">{`${exp.startDate} - ${exp.endDate}`}</p>
                  <p className="text-gray-500 text-sm font-medium">{`Location - ${exp.location}`}</p>
                </div>

                {/* CENTER: The Dashed Circle Dot */}
                <div className="flex justify-center items-center z-10">
                  <div className="w-10 h-10 rounded-full border border-dashed border-gray-400 flex items-center justify-center bg-[#faf8f3]">
                    <div className={`w-4 h-4 rounded-full ${exp.color} shadow-sm`} />
                  </div>
                </div>

                {/* RIGHT: Role & Description */}
                <Tooltip content={exp.role_description} position="left">
                  <div className="pl-6 md:pl-12">
                    <div className="md:hidden mb-2">
                      <h4 className="text-lg font-bold text-[#112d42]">{exp.role}</h4>
                      <p className="text-xs text-gray-500">{exp.location}</p>
                    </div>
                    <h3 className="text-xl font-bold text-[#112d42] mb-3">{exp.role}</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] max-w-lg line-clamp-3">
                      {exp.role_description}
                    </p>
                  </div>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;