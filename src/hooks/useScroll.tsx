import { useEffect, useRef, useState, RefObject } from "react";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Scroll logic
const useScrollAnimation = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return [ref, isVisible] as [RefObject<HTMLElement>, boolean];
};

// Animations
const animations = {
  leftToRight: {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  },
  rightToLeft: {
    hidden: { opacity: 0, x: +100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  },
  down: {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  },
  up: {
    hidden: { opacity: 0, y: +100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  },
  flip: {
    hidden: { opacity: 0, rotateY: 90 },
    show: {
      opacity: 1,
      rotateY: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
  skew: {
    hidden: { skewX: 10, opacity: 0 },
    show: {
      skewX: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  },
  scaleOut: {
    hidden: { opacity: 0, scale: 2 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  },
  slideFade: {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  },
  flip3D: {
    hidden: { rotateY: 90, opacity: 0 },
    show: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.5, perspective: 400, ease: "easeInOut" },
    },
  },
  rotateX: {
    hidden: { rotateX: 90, opacity: 0 },
    show: {
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },
  spring: {
    show: {
      scale: [0.8, 1.2, 1],
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  },
  slideUpFade: {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },
  slideBlur: {
    hidden: { x: 100, filter: "blur(6px)" },
    show: {
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeInOut" },
    },
  },
  bounce: {
    hidden: { scale: 1, y: 0 },
    show: {
      scale: [1, 1.1, 1],
      y: [0, -10, 0],
      transition: { duration: 0.5 },
    },
  },
  wobble: {
    hover: {
      rotateZ: [-5, 5, -5, 5, 0],
      transition: { duration: 0.5 },
    },
  }
};
const getAnimations = () => animations;

// Reusable animated box
const MotionBox = motion(Box);

interface AnimatedBoxProps {
  children: React.ReactNode;
  animation: any;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children, animation }) => {
  const [ref, inView] = useScrollAnimation();
  return (
    <MotionBox
      maxWidth="100%"
      ref={ref}
      variants={animation}
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </MotionBox>
  );
};

export { AnimatedBox, getAnimations, useScrollAnimation };
