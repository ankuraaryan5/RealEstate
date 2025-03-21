import React from "react";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex w-full flex-row items-center justify-between bg-green-500 p-2">
      <div className="flex items-center justify-center gap-2 text-white">
        <h4>+ 9110111497</h4>
        <h4>+ 6205850622</h4>
      </div>
      <div className="flex items-center justify-center gap-2 text-white">
        <Link>
          <TiSocialFacebook />
        </Link>
        <Link>
          <TiSocialInstagram />
        </Link>
        <Link>
          <BsTwitterX />
        </Link>
      </div>
    </div>
  );
}

export default Header;
