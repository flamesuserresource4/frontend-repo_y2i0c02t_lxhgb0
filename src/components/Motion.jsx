import { motion } from "framer-motion";

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export const staggerContainer = (stagger = 0.08) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: stagger } }
});

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionHeader = motion.header;
export const MotionMain = motion.main;
export const MotionSpan = motion.span;
export const MotionButton = motion.button;
