import React, { useEffect } from "react";
import Logo from "../assets/netflixlogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { userLogo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // console.log(user);
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: { userLogo },
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user && (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-30 w-screen flex justify-between">
          <img className="w-44 " src={Logo} alt="netflix-logo" />
          <div className="flex p-2 ">
            <img
              className="w-12 h-12 "
              src={user?.photoUrl.userLogo}
              alt="userLogo"
            />
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
