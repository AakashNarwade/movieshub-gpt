import React, { useEffect } from "react";
import Logo from "../assets/netflixlogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, userLogo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const gptSearchHandlerClick = () => {
    dispatch(toggleGptSearchView());
  };

  const changeLanguageHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
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
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44 " src={Logo} alt="netflix-logo" />
        {user && (
          <div className="flex p-2 ">
            {showGptSearch && (
              <select
                onChange={changeLanguageHandler}
                className="p-2 m-2 bg-purple-800 text-white border-0 outline-0 cursor-pointer rounded-lg"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option className="cursor-pointer" value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={gptSearchHandlerClick}
              className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            >
              {" "}
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
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
        )}
      </div>
    </>
  );
};

export default Header;
