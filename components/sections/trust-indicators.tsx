"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { trustIndicators } from "@/data/content";

function Counter({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  const target = parseInt(value, 10);

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
      {Number.isNaN(target) ? value : display}
      {suffix}
    </span>
  );
}

export function TrustIndicators() {
  return (
    <section className="border-b border-border py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {trustIndicators.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
