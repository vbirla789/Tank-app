import React from "react";
import video from "../assets/video.mp4";

const Video = () => {
  return (
    <div className="mx-0 my-0 md:absolute bottom-0">
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playInline={true}
        className="h-full w-full object-cover"
      >
        <source type="video/mp4" src={video} />
      </video>
    </div>
  );
};

export default Video;
