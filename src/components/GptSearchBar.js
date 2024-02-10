import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-1/2 grid grid-cols-12"
        action=""
      >
        <input
          className=" text-white col-span-10 p-4 m-4"
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button className="mx-3 m-4 p-4 col-span-2 py-2 bg-red-700 text-white rounded-lg">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
