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
      const move = (event: PointerEvent) => {
        const bounds = stage.getBoundingClientRect();
        stage.style.setProperty(
          "--pointer-x",
          `${((event.clientX - bounds.left) / bounds.width) * 100}%`,
        );
        stage.style.setProperty(
          "--pointer-y",
          `${((event.clientY - bounds.top) / bounds.height) * 100}%`,
        );
      };
      const leave = () => {
        stage.style.removeProperty("--pointer-x");
        stage.style.removeProperty("--pointer-y");
      };

      stage.addEventListener("pointermove", move);
      stage.addEventListener("pointerleave", leave);
      return () => {
        stage.removeEventListener("pointermove", move);
        stage.removeEventListener("pointerleave", leave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
