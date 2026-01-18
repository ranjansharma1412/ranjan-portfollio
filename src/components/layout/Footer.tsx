import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { PersonalDetails } from "../../constants/constants";
import SocialIcon from "../social-link/SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center
                        justify-between gap-8">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 text-sm"
          >
            <a
              href="tel:+001313345678"
              className="flex items-center gap-2 hover:text-white"
            >
              <Phone size={16} />
              {PersonalDetails.mobileNo}
            </a>

            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail size={16} />
              {PersonalDetails.email}
            </a>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <SocialIcon
              href="https://linkedin.com"
              label="LinkedIn"
            >
              <Linkedin size={18} />
            </SocialIcon>

            <SocialIcon
              href="https://facebook.com"
              label="Facebook"
            >
              <Facebook size={18} />
            </SocialIcon>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="mt-8 text-xs text-center text-gray-500"
        >
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
