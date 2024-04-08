"use client";

import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "0px", threshold: 0.2, root: null }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return { ref, isIntersecting };
};

export default useIntersectionObserver;