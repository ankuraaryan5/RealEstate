import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-between py-2 relative md:px-8">
      <h1 className="text-3xl font-bold text-green-500" data-aos="fade-right">
        Royal <span>Majestic </span><span className="text-black">Properties</span>
      </h1>
      <button
        className="bg-green-500 px-4 p-2 text-white rounded-full hover:bg-green-600 hover:scale-105"
        data-aos="fade-left"
        onClick={() => setIsOpen(true)}
      >
        Contact Us
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
          <div className="bg-white/80 p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-2xl font-bold text-green-500">Contact Information</h2>
            <p className="mt-2"><strong>Email:</strong> royalmajesticproperties@gmail.com</p>
            <p className="mt-1"><strong>Phone:</strong> +91 9110111497</p>
            <p className="mt-1"><strong>Phone:</strong> +91 6205850622</p>
            <p className="mt-1"><strong>Address:</strong> Near Hariharnath Mandir, Sonpur, Saran, Bihar</p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
