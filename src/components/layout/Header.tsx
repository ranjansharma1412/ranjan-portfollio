import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone } from 'lucide-react';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.toLowerCase());
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const [active, setActive] = useState('Services');

  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Works', id: 'works' },
    { name: 'Notes', id: 'testimonials' },
    { name: 'Experience', id: 'experience' }
  ];

  return (
    <motion.header
      className="w-full px-10 py-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-medium font-[cursive] text-[#1f1f1f]">
          Ranjan
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.name);
                scrollToSection(item.id);
              }}
              className={`relative px-5 py-2 transition-all
                ${
                  active === item.name
                    ? 'text-[#2f6f5e] border border-[#2f6f5e] rounded-full'
                    : 'text-[#2b2b2b] hover:text-black'
                }
              `}
            >
              {item.name.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Phone */}
        <div className="flex items-center gap-4 text-sm">
          <span className="font-medium text-[#1f1f1f]">
            +001 (313) 345 678
          </span>

          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
            <Phone size={16} />
          </button>
        </div>

      </div>
    </motion.header>
  );
};

export default Header;
