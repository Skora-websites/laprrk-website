import { createContext, useContext, useEffect, type ReactNode, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GsapContextFn = () => void;

const MotionCtx = createContext<{
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
} | null>(null);

/**
 * One provider registers ScrollTrigger once for the app.
 * Components never create their own scroll listeners.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Refresh triggers after fonts/images settle to avoid wrong pin measurements.
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      clearTimeout(t);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return <MotionCtx.Provider value={{ gsap, ScrollTrigger }}>{children}</MotionCtx.Provider>;
}

export function useMotion() {
  const ctx = useContext(MotionCtx);
  if (!ctx) throw new Error("useMotion must be used inside MotionProvider");
  return ctx;
}

/**
 * gsap.context wrapper with automatic revert cleanup and
 * prefers-reduced-motion collapse (opacity-only reveals survive).
 */
export function useGsapContext(
  fn: GsapContextFn,
  deps: unknown[] = [],
  scope?: RefObject<HTMLElement | null>,
) {
  const { gsap } = useMotion();
  useEffect(() => {
    const ctx = scope?.current ? gsap.context(fn, scope.current) : gsap.context(fn);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export { gsap, ScrollTrigger };
