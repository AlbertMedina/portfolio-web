import { useEffect, useState, useRef } from "react";
import styles from "./CarouselButton.module.css";

export default function CarouselButton({
  images = [],
  width = 600,
  height = 400,
  intervalMs = 2000,
  transitionMs = 500,
  text,
  onClick,
}) {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [isTabActive, setIsTabActive] = useState(true);
  const innerRef = useRef(null);

  const extended = [...images, images[0]];

  useEffect(() => {
    const handleVisibility = () => setIsTabActive(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    if (images.length === 0 || !isTabActive) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev >= images.length ? prev : prev + 1));
    }, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs, images.length, isTabActive]);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const onEnd = () => {
      if (index >= images.length) {
        setTransition(false);
        setIndex(0);
      }
    };

    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [index, images.length]);

  useEffect(() => {
    if (!transition) {
      const _ = innerRef.current?.offsetHeight;
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);

  return (
    <div className={styles.carousel} style={{ width: width }} onClick={onClick}>
      <div
        ref={innerRef}
        className={styles.inner}
        style={{
          transform: `translateX(-${index * width}px)`,
          transition: transition ? `transform ${transitionMs}ms ease` : "none",
          width: extended.length * width,
        }}
      >
        {extended.map((image, i) => (
          <img
            key={i}
            src={image}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={styles.image}
            style={{ width: width, height: height }}
            alt={`Project ${i}`}
          />
        ))}
      </div>
      {text && <div className={styles.overlay}>{text}</div>}
    </div>
  );
}
