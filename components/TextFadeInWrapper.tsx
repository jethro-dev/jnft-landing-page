"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const TextFadeInWrapper = ({ children, className }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <motion.div
      ref={scrollRef}
      style={{
        // scale: scale,
        translateX,
        opacity,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TextFadeInWrapper;
