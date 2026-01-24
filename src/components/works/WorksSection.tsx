import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { blogPosts } from '../../mockdata/ProductMockData';

const WorksSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };



  // Show 3 projects at a time
  // const visib = [
  //   projects[currentSlide],
  //   projects[(currentSlide + 1) % projects.length],
  //   projects[(currentSlide + 2) % projects.length]
  // ];
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="works" className="px-8 py-20 bg-[#FCFCED]">
      <motion.div
        className="flex justify-between items-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-[44px] font-bold text-[#112d42] mb-14 text-center uppercase w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My Blogs/Posts
        </motion.h2>
        <div className="hidden md:flex gap-4">
          <motion.button
            className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
          >
            ←
          </motion.button>
          <motion.button
            className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
          >
            →
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Mobile View: Scrollable Carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {blogPosts.map((project) => (
            <div key={project.id} className="min-w-[85%] snap-center px-1">
              <ProjectCard
                title={project.title}
                description={project.description}
                category={project?.publish_date || ''}
                imageUrl={project.imageUrl}
                onClick={() => openInNewTab(project.postLink)}
              />
            </div>
          ))}
        </div>

        {/* Desktop View: Slider */}
        <div className="hidden md:flex gap-6 overflow-hidden">
          <div className="flex gap-6 transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
            {blogPosts.map((project) => (
              <div key={project.id} className="min-w-[33.33%] px-2">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  category={project?.publish_date || ''}
                  imageUrl={project.imageUrl}
                  onClick={() => openInNewTab(project.postLink)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorksSection;
