import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { PersonalDetails } from '../../constants/constants';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.toLowerCase());
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const [active, setActive] = useState('Services');
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const lastScrollY = useRef<number>(0);


  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Works', id: 'works' },
    { name: 'Notes', id: 'testimonials' },
    { name: 'Experience', id: 'experience' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isScrollingUp = currentScrollY < lastScrollY.current;
      const passedThreshold = currentScrollY <= 50;

      setIsScrolledUp(!(passedThreshold && isScrollingUp));

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 px-10 py-6
        transition-all duration-300 ease-in-out
        ${isScrolledUp ? "bg-[#FCFFA8] shadow-lg" : "bg-transparent"}
      `}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between">
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
                ${active === item.name
                  ? 'text-[#1cce9e] border border-[#1cce9e] rounded-full font-medium'
                  : 'text-[#11654f] hover:text-[#1cce9e]'
                }
              `}
            >
              {item.name.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Phone */}
        <div className="flex items-center gap-4 text-sm">
          <span className="font-bold text-[#11654f]">
            {PersonalDetails.mobileNo}
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
