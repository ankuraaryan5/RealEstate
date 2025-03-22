import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const fullText = "Discover Your Dream";
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 py-16"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col items-center text-center md:items-start md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-5xl font-bold leading-tight">
          {displayText} <span className="text-green-600">Location</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-xl">
          Helping you find the perfect place to call home with ease and comfort.
        </p>
        <div className="flex flex-row gap-8 mt-6">
          {[{ label: "Locations", value: "20+" }, { label: "Properties", value: "50+" }, { label: "Happy Customers", value: "100+" }].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            >
              <h4 className="text-5xl font-extrabold text-green-600">{item.value}</h4>
              <p className="text-xl font-semibold text-gray-700">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.img
        src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Landing Image"
        className="w-full h-auto object-cover rounded-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  );
};
export default HeroSection;