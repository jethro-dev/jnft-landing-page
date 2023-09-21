import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
};

const Card = ({ title, description, image }: Props) => {
  return (
    <div className="relative bg-primary h-full p-2 rounded-lg border-1 border-tertiary transition-all duration-300 ring-1 ring-tertiary">
      <div className="h-full w-full relative">
        <span className="absolute top-2 right-2 lg:top-6 lg:right-6 z-10 bg-[#222260] text-white px-3 py-1 rounded-full font-semibold text-xs lg:text-base">
          New
        </span>
        <div className="absolute bottom-2 left-2  lg:bottom-6 lg:left-6 z-10">
          <h3 className="text-sm lg:text-2xl text-secondary bg-primary px-3 py-1 ring-1 ring-tertiary rounded-full inline-block">
            {title}
          </h3>
          <p className="text-xs lg:text-base mt-2">{description}</p>
        </div>

        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute -bottom-1 -left-1 w-[calc(100%+8px)] bg-gradient-to-t from-primary to-[rgba(17,17,17,0.06)] h-[25%] rounded-b-lg"></div>
    </div>
  );
};

export default Card;
