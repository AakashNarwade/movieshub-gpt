import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white w-screen aspect-video pt-[10%] px-6 md:px-24 absolute bg-gradient-to-r from-black">
      <div className="pt-36 px-12">
        <h1 className="text-6xl font-bold ">{title}</h1>
        <p className="text-lg w-1/2 py-6">{overview}</p>
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
