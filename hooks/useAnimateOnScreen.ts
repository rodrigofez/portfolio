import { useEffect, useRef, useState } from "react";
import animations from "../styles/Animations.module.css";

interface Props {
  animationClass: "fadeInFromTop" | "fadeInFromLeft";
  delay?: number;
}

export const useAnimateOnScreen = ({ animationClass, delay = 0 }: Props) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [onScreen, setOnScreen] = useState(false);
  const [isTicking, setIsTicking] = useState(false);

  const animation = onScreen
    ? animations[animationClass]
    : animations["initialState"];

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : require("intersection-observer")
    ).then(() => {
      if (onScreen || isTicking) return;
      const onChange = (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const el = entries[0];

        if (el.isIntersecting) {
          setIsTicking(true);
          setTimeout(() => setOnScreen(true), delay);
          observer.disconnect();
        }
      };

      if (!elementRef?.current) return;

      const observer = new window.IntersectionObserver(onChange, {
        rootMargin: "0%",
      });
      observer.observe(elementRef?.current);
    });
  });

  return [elementRef, animation] as const;
};

export default useAnimateOnScreen;
