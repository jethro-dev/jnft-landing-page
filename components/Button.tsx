import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  name: string;
  icon?: string;
  className?: string;
};

const Button = ({ name, icon, className }: Props) => {
  return (
    <button
      className={twMerge(
        "text-base px-8 py-2.5 rounded-full ring-2 ring-tertiary ring-inset cursor-pointer transition-all duration-200 flex items-center gap-4  hover:text-white hover:ring-secondary",
        `${className}`
      )}
    >
      {icon && icon}
      {name}
    </button>
  );
};

export default Button;
