import React from "react";
import { motion } from "framer-motion";
import ListingCard from "./ListingCard";
import listingData from "./ListingData.json";

function Listings() {
  return (
    <motion.div 
      className="px-8 py-12" 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">Available Properties</h1>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {listingData.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Listings;
