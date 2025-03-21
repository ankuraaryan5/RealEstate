import React, { useState } from "react";

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

    // You can later integrate an API call here to send the message.
    alert("Message sent successfully!");

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="px-8 py-12 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col justify-center" data-aos="flip-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-2">
            📍 <strong>Address:</strong> 123 Dream Street, Beverly Hills, CA
            90210
          </p>
          <p className="text-gray-600 mb-2">
            📞 <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-600">
            ✉️ <strong>Email:</strong> contact@realestate.com
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md" data-aos="flip-right">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Send a Message
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
