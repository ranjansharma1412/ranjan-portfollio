import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

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
      className="group relative bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-gray-100 cursor-pointer transition-all duration-500 shadow-sm hover:shadow-xl flex-shrink-0"
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
      </div>
    </motion.div>
  );
};

export default ProjectCard;