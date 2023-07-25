"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./slidingheader.module.css";

function SlidingHeader() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const animRef = useRef(null);
  let xPercent = 0;
  let xDirection = -1;

  useLayoutEffect(() => {
    animRef.current = requestAnimationFrame(animation);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });
    xPercent += 0.07 * xDirection;
    animRef.current = requestAnimationFrame(animation);
  };
  return (
    <div className={styles.headerwrapper}>
      <h1 ref={firstText}>Jak&apos;s Playground -</h1>
      <h1 ref={secondText}>Jak&apos;s Playground -</h1>
      <h1 ref={thirdText}>Jak&apos;s Playground -</h1>
    </div>
  );
}

export default SlidingHeader;
