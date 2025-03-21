import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import listingData from "./ListingData.json"

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings(listingData);
  }, []);

  return (
    <div className="px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Available Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="slide-up">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}

export default Listings;
