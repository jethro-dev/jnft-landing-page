"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type Props = {
  children: ReactNode;
  direction: "left" | "right";
};

const HorizontalWrapper = ({ children, direction = "left" }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  let xTransform;
  if (direction === "left") {
    xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  } else {
    xTransform = useTransform(scrollYProgress, [0, 1], ["-50%", "-0%"]);
  }

  return (
    <motion.div
      ref={scrollRef}
      style={{
        translateX: xTransform,
        // opacity: scrollYProgress,
      }}
    >
      {children}
    </motion.div>
  );
};

export default HorizontalWrapper;
