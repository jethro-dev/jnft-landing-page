import React from "react";
import { TextFadeInWrapper } from ".";

type Props = {};

const TextSection = (props: Props) => {
  return (
    <section className="px-10 py-10">
      <div className="max-w-7xl mx-auto">
        <div>
          {[0, 1, 2, 3, 4].map((i, index) => (
            <TextFadeInWrapper key={index}>
              <p className="text-6xl first:mt-0 mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, veritatis. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </TextFadeInWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextSection;
