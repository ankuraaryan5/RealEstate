import React from "react";
import { useParams } from "react-router-dom";
import listingsData from "./ListingData.json";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

function ListingDetails() {
  const { id } = useParams();
  const listing = listingsData.find((item) => item.id === parseInt(id));

  if (!listing) return <div className="text-center text-red-500">Property not found</div>;

  return (
    <div className="min-h-screen bg-gray-100">
        <Header/>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <img src={listing.image} alt={listing.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-bold">{listing.title}</h1>
      <p className="text-gray-500 text-lg">{listing.location}</p>
      <p className="text-green-600 text-2xl font-semibold">{listing.price}</p>
      <p className="text-gray-700 mt-4">{listing.description}</p>
      <div className="mt-4 flex gap-6">
        <span className="bg-gray-100 px-3 py-1 rounded-lg">{listing.bedrooms} Bedrooms</span>
        <span className="bg-gray-100 px-3 py-1 rounded-lg">{listing.bathrooms} Bathrooms</span>
        <span className="bg-gray-100 px-3 py-1 rounded-lg">{listing.size}</span>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ListingDetails;
