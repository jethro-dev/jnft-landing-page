"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";
import { FadeInWrapper } from ".";
type Props = {};

const VideoSection = (props: Props) => {
  return (
    <section className="min-h-screen px-10 py-10 flex items-center">
      <div className="max-w-6xl w-full mx-auto px-20">
        <FadeInWrapper>
          <div className="p-2 ring-1 ring-tertiary rounded-lg bg-primary">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DrxiNfbr63s?si=R46YmscpXoVCwVm3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full aspect-video"
            ></iframe>
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
};

export default VideoSection;
