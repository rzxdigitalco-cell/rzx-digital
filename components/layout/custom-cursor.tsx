"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 320, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    setIsVisible(true);

    function handleMove(e: MouseEvent) {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [data-cursor-pointer]"));
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x, y }}
    >
      <motion.div
        animate={{
          scale: isPointer ? 2.4 : 1,
          backgroundColor: isPointer ? "rgba(37,99,235,0.15)" : "#2563EB",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-3 w-3 rounded-full border border-primary"
      />
    </motion.div>
  );
}
