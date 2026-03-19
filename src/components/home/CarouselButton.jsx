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

  const innerRef = useRef(null);

  const extended = [...images, images[0]];

  useEffect(() => {
    if (images.length === 0) return;

    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs, images.length]);

  useEffect(() => {
    const el = innerRef.current;

    const onEnd = () => {
      if (index === images.length) {
        setTransition(false);
        setIndex(0);
      }
    };

    el.addEventListener("transitionend", onEnd);

    return () => el.removeEventListener("transitionend", onEnd);
  }, [index, images.length]);

  useEffect(() => {
    if (!transition) {
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
            className={styles.image}
            style={{ width: width, height: height }}
          />
        ))}
      </div>
      {text && <div className={styles.overlay}>{text}</div>}
    </div>
  );
}
