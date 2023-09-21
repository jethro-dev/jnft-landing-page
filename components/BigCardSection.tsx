import Image from "next/image";
import React from "react";
import image from "/public/images/rover.jpg";
import { FadeInWrapper } from ".";
type Props = {};

const BigCardSection = (props: Props) => {
  return (
    <section className="lg:min-h-screen px-10 py-10 flex items-center">
      <FadeInWrapper className="w-full h-full">
        <div className="max-w-7xl w-full mx-auto ring-1 ring-tertiary aspect-video rounded-lg p-2">
          <div className="w-full h-full relative">
            <Image
              src={"/images/rover.jpg"}
              alt={"Rover"}
              fill={true}
              className="object-cover object-center"
            />
            F
          </div>
        </div>
      </FadeInWrapper>
    </section>
  );
};

export default BigCardSection;
