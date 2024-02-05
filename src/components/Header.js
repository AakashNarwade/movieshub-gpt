import React from "react";
import Logo from "../assets/netflixlogo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <>
      {user && (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
          <img className="w-44 " src={Logo} alt="netflix-logo" />
          <div className="flex p-2 ">
            <img className="w-12 h-12 " src={user.photoUrl} alt="userLogo" />
            <button
              onClick={handleSignOut}
              className="text-xl font-bold text-white"
            >
              (SignOut)
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
