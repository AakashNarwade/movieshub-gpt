import React from "react";
import Logo from "../assets/netflixlogo.png";

const Header = () => {
  return (
    <div className="absolute z-30">
      <img
        className="w-44 px-8 py-2 bg-gradient-to-b from-black"
        src={Logo}
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Header;
