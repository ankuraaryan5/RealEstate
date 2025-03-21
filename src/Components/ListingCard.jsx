import React from "react";
import { Link } from "react-router-dom";

function ListingCard({ listing }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{listing.title}</h2>
        <p className="text-gray-500">{listing.location}</p>
        <p className="text-green-600 font-semibold">{listing.price}</p>
        <p className="text-gray-600">{listing.bedrooms} Beds • {listing.bathrooms} Baths • {listing.size}</p>
        <Link
          to={`/listings/${listing.id}`}
          className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ListingCard;
