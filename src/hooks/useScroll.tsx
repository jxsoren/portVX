import { useEffect, useRef, useState, RefObject } from "react";

export const useScrollAnimation = () => {
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

// Animations for framer-motion
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
  };

export const getAnimations = () => animations;
