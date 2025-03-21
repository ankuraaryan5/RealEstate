import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Listings from "./Listings";
import Footer from "./Footer";
import Contact from "./Contact";

function Landing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 py-16" data-aos="zoom-in">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-5xl font-bold leading-tight">
            Discover Your Dream <span className="text-green-600">Home</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-xl">
            Helping you find the perfect place to call home with ease and
            comfort.
          </p>
          <div className="flex flex-row gap-8 mt-6">
            <div className="flex flex-col items-center">
              <h4 className="text-5xl font-extrabold text-green-600">20+</h4>
              <p className="text-xl font-semibold text-gray-700">Locations</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-5xl font-extrabold text-green-600">50+</h4>
              <p className="text-xl font-semibold text-gray-700">Properties</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-5xl font-extrabold text-green-600">100+</h4>
              <p className="text-xl font-semibold text-gray-700">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Landing Image" className="w-full h-auto object-cover rounded-2xl" />
      </div>
      <Listings />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
