import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Phone, Menu, X, Download } from 'lucide-react';
import { useState } from 'react';
import { PersonalDetails } from '../../constants/constants';
import { handleResumeDownload } from '../../utils/helperFunctions';
import appLogo from '../../assets/images/app_logo.png';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.toLowerCase());
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  const [active, setActive] = useState('Services');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll Logic
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Determine header visibility
    // Hide if scrolling down and past 150px
    if (latest > previous && latest > 150) {
      // setHidden(true);
    } else {
      // Show if scrolling up
      setHidden(false);
    }

    // Determine background style
    // Show background earlier (after 20px) to prevent "hiding" feeling
    if (latest > 20 && !isMenuOpen) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Works', id: 'works' },
    { name: 'Notes', id: 'testimonials' },
    { name: 'Experience', id: 'experience' }
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4
        transition-colors duration-300
        ${scrolled ? "bg-[#FCFFA8]/90 backdrop-blur-md shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Desktop */}
        <div className="hidden lg:block">
          <img src={appLogo} alt="Logo" className="h-10" />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-10 text-sm">
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

        {/* Right Action Area */}
        <div className="flex items-center gap-4 lg:gap-8">

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden p-2 text-[#11654f] cursor-pointer hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Contact Info (Visible on all sizes, but adapted) */}
          <div className="hidden sm:flex items-center gap-3 text-sm">
            <span className="font-bold text-[#11654f] hidden md:block">
              {PersonalDetails.mobileNo}
            </span>

            <a href={`tel:${PersonalDetails.mobileNo}`} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#1cce9e] hover:text-[#1cce9e] transition-colors bg-white/50">
              <Phone size={16} />
            </a>
          </div>

          {/* Download Resume - Desktop */}
          <button
            onClick={handleResumeDownload}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#11654f] text-white rounded-full text-sm font-medium hover:bg-[#0d4f3d] transition-colors shadow-lg shadow-[#11654f]/20 cursor-pointer"
          >
            Download Resume
            <Download size={16} />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              />

              {/* Side Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[280px] bg-[#FCFFA8] shadow-2xl z-50 lg:hidden flex flex-col p-6"
              >
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#11654f]/10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={appLogo}
                        alt="Logo"
                        className="h-10"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-[#11654f] hover:bg-black/5 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActive(item.name);
                        scrollToSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`text-left px-4 py-3 transition-all text-sm font-medium rounded-xl flex justify-between items-center
                        ${active === item.name
                          ? 'bg-[#1cce9e]/15 text-[#0d4f3d] border border-[#1cce9e]/30'
                          : 'text-[#11654f] hover:bg-black/5'
                        }
                      `}
                    >
                      {item.name.toUpperCase()}
                      {active === item.name && <div className="w-1.5 h-1.5 rounded-full bg-[#1cce9e]" />}
                    </button>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-[#11654f]/10">
                    <span className="text-sm font-medium text-[#11654f]">Contact</span>
                    <div className="flex items-center gap-3">
                      <a href={`tel:${PersonalDetails.mobileNo}`} className="p-2 rounded-full hover:bg-black/5 text-[#11654f]">
                        <Phone size={18} />
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleResumeDownload();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-[#11654f] text-white rounded-xl text-sm font-medium hover:bg-[#0d4f3d] transition-colors shadow-lg shadow-[#11654f]/20"
                  >
                    Download Resume
                    <Download size={18} />
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
};

export default Header;
