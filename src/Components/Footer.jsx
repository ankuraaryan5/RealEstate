import React from "react";
import { motion } from "framer-motion";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <motion.footer 
      className="bg-green-600 text-white py-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left px-6">
        
        <motion.div 
          className="flex flex-col items-center md:items-start"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm">&copy; {new Date().getFullYear()} RoyalMajesticProperties</p>
          <p className="text-sm">All rights reserved.</p>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center md:items-start"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm mt-1">📧 Email: royalmajesticproperties@gmail.com</p>
          <p className="text-sm">📍 Location: Near Hariharnath Mandir, Sonpur, Saran, Bihar</p>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center md:items-start"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <motion.div 
            className="flex gap-4 mt-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <TiSocialFacebook size={28} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <TiSocialInstagram size={28} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <BsTwitterX size={24} />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </motion.footer>
  );
}

export default Footer;
