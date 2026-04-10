import { useEffect, useRef } from "react";

export function useScrollRevealChildren<T extends HTMLElement = HTMLDivElement>(
  childClass: string = "scroll-reveal-scale",
  threshold: number = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll<HTMLElement>(`.${childClass}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );

    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.12}s`;
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, [childClass, threshold]);

  return ref;
}