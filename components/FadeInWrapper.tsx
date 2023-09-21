"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
type Props = {
  children: ReactNode;
  className?: string;
};
const FadeInWrapper = ({ children, className }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [0.5, 1]);

  return (
    <motion.div
      ref={scrollRef}
      style={{
        scale: scale,
        // opacity: scrollYProgress,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
