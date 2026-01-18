import { motion } from 'framer-motion';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

// --- Project Card Component ---
const ProjectCard: React.FC<Project & { onClick?: () => void }> = ({ 
  title, description, category, imageUrl, onClick 
}) => {
  return (
    <motion.div
      onClick={onClick}
      // Mobile: fixed width (280px) | Desktop: fixed width (400px)
      // flex-shrink-0 is CRITICAL for the auto-scroll to work
      className="group relative bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-gray-100 cursor-pointer transition-all duration-500 shadow-sm hover:shadow-xl w-[280px] md:w-[400px] flex-shrink-0"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        ) : (
          <div className="w-full h-full bg-[#f4f2ee] flex items-center justify-center">
            <span className="text-gray-400 text-3xl md:text-5xl font-light italic">{title.charAt(0)}</span>
          </div>
        )}
        <div className="absolute top-3 left-3 md:top-4 md:left-4">
          <span className="backdrop-blur-md bg-white/70 px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#112d42] rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl md:text-2xl font-bold text-[#112d42]">{title}</h3>
          <ArrowUpRight size={20} className="text-[#112d42] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
        </div>
        <p className="text-gray-500 text-xs md:text-sm line-clamp-2">{description}</p>
        <div className="mt-4 md:mt-6 pt-4 border-t border-gray-50 flex items-center gap-2">
          <span className="text-[10px] md:text-[11px] font-bold text-[#112d42] uppercase">View Project</span>
          <div className="h-px w-6 bg-gray-200 group-hover:w-12 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Section with Auto-Scroll ---
const AutoScrollProjects = () => {
  const projects: Project[] = [
    { title: "E-Commerce App", category: "Mobile", description: "A high-end fashion store mobile application." },
    { title: "Finance Dashboard", category: "Web Design", description: "Complex data visualization for fintech." },
    { title: "Brand Identity", category: "Branding", description: "Complete visual language for a tech startup." },
    { title: "Travel Guide", category: "Web App", description: "Interactive map and itinerary planner." },
  ];

  // We double the array to create a seamless infinite loop
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="bg-[#faf8f3] py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-[#112d42]">Selected Works</h2>
      </div>

      {/* The Marquee Container */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-6 pr-6" // Gap matches the gap between items
          animate={{
            x: ["0%", "-50%"], // Moves halfway because the list is duplicated
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25, // Adjust speed here (higher = slower)
              ease: "linear",
            },
          }}
          // Pause on hover for better UX
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCard;