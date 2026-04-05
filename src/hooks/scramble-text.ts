"use client";

import { useEffect, useRef, useState } from "react";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const randomizeText = (length: number) =>
  Array.from(
    { length },
    () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
  ).join("");

export const useScrambleText = <T extends HTMLElement>(
  text: string,
  speed = 120,
  threshold = 0.6,
) => {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    let observer: IntersectionObserver;
    let interval: NodeJS.Timeout | null = null;

    const animate = () => {
      let frame = 0;
      setDisplayText(randomizeText(text.length));

      interval && clearInterval(interval);
      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split("")
            .map((char, i) =>
              i < frame
                ? char
                : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
            )
            .join(""),
        );

        frame++;
        if (frame > text.length) {
          interval && clearInterval(interval);
        }
      }, speed);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
          } else {
            setDisplayText(text);
          }
        });
      },
      { threshold },
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
      interval && clearInterval(interval);
    };
  }, [text, speed, threshold]);

  return { ref: elementRef, displayText };
};
