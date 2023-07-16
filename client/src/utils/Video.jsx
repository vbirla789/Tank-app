import React from "react";
import video from "../assets/video.mp4";

const Video = () => {
  return (
    <div className="mx-0 my-0">
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playInline={true}
        className="h-auto w-full"
      >
        <source type="video/mp4" src={video} />
      </video>
      <div className=" bg-[#9ce3ff] h-[50vh]"></div>
    </div>
  );
};

export default Video;
