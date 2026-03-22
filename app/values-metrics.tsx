"use client";

import { useEffect, useRef, useState } from "react";

const metrics = ["Arte", "Seguridad", "Técnica", "Seguimiento"];
const TARGET_VALUE = 100;
const ANIMATION_DURATION = 1400;

export default function ValuesMetrics() {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setHasAnimated(true);

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min(
            (currentTime - startTime) / ANIMATION_DURATION,
            1
          );

          setValue(Math.round(progress * TARGET_VALUE));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="values-metrics">
      {metrics.map((metric) => (
        <div key={metric}>
          <strong>{value}%</strong>
          <span>{metric}</span>
        </div>
      ))}
    </div>
  );
}
