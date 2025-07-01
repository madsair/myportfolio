import React from "react";
import { useEffect } from "react";

const useScrollReveal = (className = ".hidden", threshold = 0.2) => {
  useEffect(() => {
    const sections = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 100);
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, [className, threshold]);
};
export default useScrollReveal;
