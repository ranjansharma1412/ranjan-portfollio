import { motion } from 'framer-motion';
import{ useState } from 'react';
import ProjectCard from './ProjectCard';

const WorksSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Mobile App',
      description: 'A full-featured shopping application with payment integration and user authentication.',
      category: 'Mobile App',
      imageUrl: ''
    },
    {
      id: 2,
      title: 'Corporate Website',
      description: 'Modern responsive website for a tech company with CMS integration.',
      category: 'Web Design',
      imageUrl: ''
    },
    {
      id: 3,
      title: 'Brand Identity System',
      description: 'Complete branding solution including logo, color palette, and brand guidelines.',
      category: 'Branding',
      imageUrl: ''
    },
    {
      id: 4,
      title: 'Task Management Dashboard',
      description: 'Interactive dashboard for team collaboration and project management.',
      category: 'Web App',
      imageUrl: ''
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'Health and fitness application with workout plans and progress tracking.',
      category: 'Mobile App',
      imageUrl: ''
    },
    {
      id: 6,
      title: 'Restaurant Booking System',
      description: 'Online reservation platform with table management and customer notifications.',
      category: 'Web App',
      imageUrl: ''
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Show 3 projects at a time
  // const visib = [
  //   projects[currentSlide],
  //   projects[(currentSlide + 1) % projects.length],
  //   projects[(currentSlide + 2) % projects.length]
  // ];

  return (
    <section id="works" className="px-8 py-20 bg-gray-50">
      <motion.div 
        className="flex justify-between items-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My Personal Projects
        </motion.h2>
        <div className="flex gap-4">
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
        className="relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex gap-6 transition-transform duration-500 ease-in-out" 
             style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
          {projects.map((project) => (
            <div key={project.id} className="min-w-[33.33%] px-2">
              <ProjectCard
                title={project.title}
                description={project.description}
                category={project.category}
                imageUrl={project.imageUrl}
                onClick={() => console.log(`View project: ${project.title}`)}
              />
            </div>
          ))}
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
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
