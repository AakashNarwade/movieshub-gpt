import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClick = () => {
    const emailValue = emailRef?.current?.value;
    const passwordValue = passwordRef?.current?.value;

    const message = checkValidData(emailValue, passwordValue);

    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //signup logic

      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          //signed up successfully
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoUrl:
                    "https://media.istockphoto.com/id/1470831469/photo/mid-adult-man-working-from-home.jpg?s=612x612&w=0&k=20&c=7Jhr_B8Dm4y3yYfo_4gE9KwWdrK-wOIUUVCQZGDTpcM=",
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signin logic

      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

    // if (!message) {
    //   emailRef.current.value = "";
    //   passwordRef.current.value = "";
    // }
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img src={BG_URL} alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-opacity-80  bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white "
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            className="w-full my-4 p-4 bg-gray-700"
            type="text"
            placeholder="Enter your full name"
          />
        )}
        <input
          ref={emailRef}
          className="w-full my-4 p-4 bg-gray-700"
          type="text"
          placeholder="Enter your email"
        />
        <input
          ref={passwordRef}
          className="w-full my-4 p-4 bg-gray-700"
          type="password"
          placeholder="Enter your password"
        />
        <p className="text-lg font-bold py-2 text-red-500">{errorMessage}</p>
        <button
          onClick={handleClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
