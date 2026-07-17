import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVER_SELECTOR = "a, button, input, textarea, select, [data-cursor-hover]";

export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;
    setEnabled(true);

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const handleOver = (e) => {
      setHovering(Boolean(e.target.closest(HOVER_SELECTOR)));
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[999] hidden md:block"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: hovering ? 46 : 18,
          height: hovering ? 46 : 18,
          opacity: visible ? (hovering ? 0.9 : 0.6) : 0,
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="rounded-full border-2 border-blush-500 dark:border-blush-300 bg-blush-300/10 dark:bg-blush-400/10 backdrop-blur-[1px]"
      />
    </motion.div>
  );
}
