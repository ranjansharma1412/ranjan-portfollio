import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, Phone, MapPin, Send, Instagram, Github } from "lucide-react";
import { PersonalDetails } from "../../constants/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#112d42] text-white pt-20 pb-10 rounded-t-[30px] mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">

          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#fcffc1] to-[#1cce9e] bg-clip-text text-transparent">
                Let's Connect.
              </h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#1a3b52] border border-[#2a4e69] rounded-xl px-5 py-4 focus:outline-none focus:border-[#1cce9e] transition-colors placeholder:text-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#1a3b52] border border-[#2a4e69] rounded-xl px-5 py-4 focus:outline-none focus:border-[#1cce9e] transition-colors placeholder:text-gray-500"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-[#1a3b52] border border-[#2a4e69] rounded-xl px-5 py-4 focus:outline-none focus:border-[#1cce9e] transition-colors placeholder:text-gray-500 resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1cce9e] text-[#0d4f3d] font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-[#16b087] transition-colors"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>


          {/* Right: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:pl-10 space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>

              <div className="space-y-6">
                <a href={`mailto:${PersonalDetails.email}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#1a3b52] flex items-center justify-center group-hover:bg-[#1cce9e] transition-colors">
                    <Mail size={20} className="text-[#1cce9e] group-hover:text-[#0d4f3d] transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400 mb-1">Email</span>
                    <span className="text-lg font-medium">{PersonalDetails.email}</span>
                  </div>
                </a>

                <a href={`tel:${PersonalDetails.mobileNo}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#1a3b52] flex items-center justify-center group-hover:bg-[#1cce9e] transition-colors">
                    <Phone size={20} className="text-[#1cce9e] group-hover:text-[#0d4f3d] transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400 mb-1">Phone</span>
                    <span className="text-lg font-medium">{PersonalDetails.mobileNo}</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#1a3b52] flex items-center justify-center group-hover:bg-[#1cce9e] transition-colors">
                    <MapPin size={20} className="text-[#1cce9e] group-hover:text-[#0d4f3d] transition-colors" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-400 mb-1">Location</span>
                    <span className="text-lg font-medium">Mumbai, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Socials</h3>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: PersonalDetails.linkedIn },
                  { icon: Github, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" }
                ].map((Social, index) => (
                  <a
                    key={index}
                    href={Social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#1a3b52] flex items-center justify-center hover:bg-[#1cce9e] hover:text-[#0d4f3d] transition-all duration-300"
                  >
                    <Social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[#2a4e69] pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} {PersonalDetails.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );

};

export default Footer;
