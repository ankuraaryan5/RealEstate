import React, { useState } from "react";
import { motion } from "motion/react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="px-8 py-12 bg-gray-100">
      {/* Contact Us Heading */}
      <motion.h1
        className="text-3xl font-bold text-center mb-8 text-green-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact Us
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // Triggers when 30% of component is visible
      >
        {/* Left Section - Contact Info */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-2">
            📍 <strong>Address:</strong> 123 Dream Street, Beverly Hills, CA 90210
          </p>
          <p className="text-gray-600 mb-2">
            📞 <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-600">
            ✉️ <strong>Email:</strong> contact@realestate.com
          </p>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div
          className="bg-gray-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Send a Message
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              type="submit"
              className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
