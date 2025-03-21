import React from "react";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-green-600 text-white py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left px-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm">&copy; {new Date().getFullYear()} RealEstate Co.</p>
          <p className="text-sm">All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm mt-1">📧 Email: info@example.com</p>
          <p className="text-sm">📍 Location: New York, USA</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 mt-2">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;