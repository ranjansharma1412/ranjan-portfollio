import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

const WorksSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'The Ultimate Mobile Application Security Checklist for 2025',
      description: `Security isn’t just a requirement—it’s a commitment that begins with the very first line of code and continues throughout the entire app lifecycle. In my latest Medium blog, I share a comprehensive mobile app security checklist based on my real-world experience and ongoing learning. Security is not a one-time task—it's an ongoing process of monitoring, improvement, and a promise to deliver a safer experience to every user. Dive in to discover essential practices and actionable steps that every developer should follow to keep mobile applications secure.`,
      category: 'Mobile App',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sNsYKv2eFgwcMhnfSiP3Ow.png',
      publish_date: "3 month ago",
      postLink: "https://medium.com/@ranjansharma1412/the-ultimate-mobile-application-security-checklist-for-2025-021b791a88df"
    },
    {
      id: 2,
      title: 'How to Create Application in React Native with Node.js backend and GraphQL',
      description: 'If you want to go towards fast application development with the backend, then you become confused. What Framework or Technology should I select? Hence you are right to be here.',
      category: 'Web Design',
      imageUrl: 'https://res.cloudinary.com/djq8viexc/image/upload/v1768738196/graph_ql_aem37i.jpg',
      publish_date: "6 month ago",
      postLink: "https://medium.com/@ranjansharma1412/how-to-create-application-in-react-native-with-node-js-backend-and-graphql-f80088cc5fa8"
    },
    {
      id: 3,
      title: 'Certification',
      description: `I’m excited to share that I’ve completed a certification in Clean Code Practices.
As developers, prioritizing clean code is not about perfection — it’s about professionalism. 
Small habits like meaningful naming, simple logic, proper structure, remove unused code and consistency make a huge difference over time.`,
      category: 'Mobile App',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQGbv4UO2tsNgw/feedshare-shrink_800/B4DZu_1sHIHYAg-/0/1768450082353?e=1770249600&v=beta&t=K7V0f6Cw7YneDOEhffdfDZ46MEGBDMc0UGm7L7JXT_w',
      publish_date: "6 month ago",
      postLink: "https://www.linkedin.com/posts/ranjan-sharma-654379191_im-excited-to-share-that-ive-completed-share-7417417258144071680-rF3u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0VK2ABt9Cs52_GzSP7kYYRWa6suTTQtNg"
    },
    // {
    //   id: 4,
    //   title: 'Task Management Dashboard',
    //   description: 'Interactive dashboard for team collaboration and project management.',
    //   category: 'Web App',
    //   imageUrl: 'https://images.credly.com/size/680x680/images/a32fda3d-7666-430e-8d17-b7abc4cc4207/IBM-Generative-and-Agentic-AI-Foundation.png',
    //   publish_date: "6 month ago"
    // },
    // {
    //   id: 5,
    //   title: 'Fitness Tracking App',
    //   description: 'Health and fitness application with workout plans and progress tracking.',
    //   category: 'Mobile App',
    //   imageUrl: '',
    //   publish_date: "6 month ago"
    // },
    // {
    //   id: 6,
    //   title: 'Restaurant Booking System',
    //   description: 'Online reservation platform with table management and customer notifications.',
    //   category: 'Web App',
    //   imageUrl: '',
    //   publish_date: "6 month ago"
    // }
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
                category={project?.publish_date || ''}
                imageUrl={project.imageUrl}
                onClick={() => openInNewTab(project.postLink)}
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
