"use client";

import { useEffect } from "react";
import AOS from "aos";

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once
      easing: "ease-out", // Animation easing
      delay: 100, // Delay before animation starts
    });
  }, []);

  return null;
}
