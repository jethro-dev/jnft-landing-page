import { footerLinks } from "@/constant";
import { link } from "fs";
import Link from "next/link";
import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

import {
  BsDiscord,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-20 px-10 bg-primary ring-1 ring-tertiary">
      <div className="max-w-7xl mx-auto">
        {/* top */}
        <div className="pt-12 pb-8 w-full flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h3 className="font-abril text-3xl text-white">JNFT</h3>
            </div>
            <div className="bg-primary ring-1 ring-tertiary rounded-lg px-3 py-2.5 w-full flex items-center justify-between">
              <input
                type="text"
                placeholder="Subscribe here..."
                className="w-full h-full text-sm placeholder:text-tertiary bg-primary peer"
              />
              <kbd className="rounded-md text-xs ring-1 ring-tertiary py-1.5 px-2 flex items-center gap-1 peer-focus:bg-neutral-300 peer-focus:text-black transition-colors duration-200 cursor-default peer-focus:cursor-pointer select-none">
                Enter <ArrowLongRightIcon className="inline h-4 w-4" />
              </kbd>
            </div>
            <p className="text-sm capitalize">
              Create, Sell and collect truly rare digital artworks. Powered by
              the blockchain technology.
            </p>
            <div className="flex items-center gap-4 text-lg [&>*]:cursor-pointer hover:[&>*]:text-white [&>*]:transition [&>*]:duration-200">
              <BsGithub />
              <BsLinkedin />
              <BsInstagram />
              <BsTwitter />
              <BsDiscord />
            </div>
          </div>
          <div className="flex-1 flex">
            {footerLinks.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col gap-4 items-start"
              >
                <h3 className="text-lg font-semibold tracking-wider">
                  {item.title}
                </h3>
                {item.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="inline-block relative text-xs hover:text-white after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-full after:bg-white after:h-[.5px] after:opacity-0 after:hover:opacity-100 transition duration-300 after:transition-opacity after:duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* <hr className=" border-tertiary h-[1px] my-10" /> */}

        {/* bottom */}
        <div className="flex justify-between items-center text-xs py-6 border-t border-1 border-tertiary">
          <span>&copy; 2023 JNFT. All rights reserved.</span>
          <div className="flex items-center gap-4 cursor-pointer hover:[&>*]:text-white [&>*]:transition [&>*]:duration-200">
            <span>Privacy policy</span>
            <span>Terms of service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
