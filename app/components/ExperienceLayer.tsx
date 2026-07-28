"use client";

import { useEffect } from "react";

export function ExperienceLayer() {
  useEffect(() => {
    document.documentElement.classList.add("has-reveal");
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stages = Array.from(
      document.querySelectorAll<HTMLElement>("[data-signal-stage]"),
    );

    const cleanups = stages.map((stage) => {
      let animationFrame = 0;
      const move = (event: PointerEvent) => {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(() => {
          const bounds = stage.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width;
          const y = (event.clientY - bounds.top) / bounds.height;
          stage.style.setProperty("--pointer-x", `${x * 100}%`);
          stage.style.setProperty("--pointer-y", `${y * 100}%`);
          stage.style.setProperty("--parallax-x", `${(x - 0.5) * 22}px`);
          stage.style.setProperty("--parallax-y", `${(y - 0.5) * 22}px`);
          stage.style.setProperty("--parallax-core-x", `${(x - 0.5) * 4}px`);
          stage.style.setProperty("--parallax-core-y", `${(y - 0.5) * 4}px`);
          stage.style.setProperty("--tilt-x", `${(0.5 - y) * 3.2}deg`);
          stage.style.setProperty("--tilt-y", `${(x - 0.5) * 4.2}deg`);
        });
      };
      const leave = () => {
        stage.style.removeProperty("--pointer-x");
        stage.style.removeProperty("--pointer-y");
        stage.style.removeProperty("--parallax-x");
        stage.style.removeProperty("--parallax-y");
        stage.style.removeProperty("--parallax-core-x");
        stage.style.removeProperty("--parallax-core-y");
        stage.style.removeProperty("--tilt-x");
        stage.style.removeProperty("--tilt-y");
      };

      stage.addEventListener("pointermove", move);
      stage.addEventListener("pointerleave", leave);
      return () => {
        cancelAnimationFrame(animationFrame);
        stage.removeEventListener("pointermove", move);
        stage.removeEventListener("pointerleave", leave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
