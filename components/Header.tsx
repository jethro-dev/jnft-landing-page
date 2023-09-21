"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components";
import Image from "next/image";
import { hover3d } from "@/utils";

type Props = {};

const Header = (props: Props) => {
  const headerRef = useRef<HTMLElement>(null);

  const hoverImg = hover3d(headerRef, {
    x: 30,
    y: -40,
    z: 30,
  });

  return (
    <header
      ref={headerRef}
      className="min-h-[calc(100vh-64px)] py-10 px-10 md:px-20 xl:px-40 flex justify-between items-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-10 xl:gap-16">
        {/* left */}
        <div className="w-full md:w-[70%] flex flex-col order-2 md:order-1">
          <h1 className="text-4xl lg:text-6xl text-secondary font-abril">
            Buy, collect, sell extraordinary NFTs
          </h1>
          <p className="mt-4">
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highly sought-after NFTs, and
            comprehend the prossible advantages and disadvantages of acquiring
            amassing, and vending these exceptional digital assets.
          </p>
          <div className="mt-4 flex gap-4">
            <Button
              name="Get Started"
              className="bg-secondary text-white ring-2 ring-secondary ring-inset hover:bg-transparent"
            />
            <Button name="Learn More" />
          </div>
        </div>
        {/* right */}
        <div
          className=" w-full md:w-5/12 ring-1 ring-tertiary rounded-md p-2 order-1 md:order-2"
          style={{
            transform: hoverImg.transform,
            transition: hoverImg.transition,
          }}
        >
          <div className="w-full flex-1 aspect-square relative">
            <Image
              src={"/images/monkey.png"}
              alt={"The Monkey NFT"}
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
