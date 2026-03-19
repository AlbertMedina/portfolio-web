import styles from "./ImageButton.module.css";

export default function ImageButton({
  image,
  width = 300,
  height = 200,
  text,
  onClick,
}) {
  return (
    <div className={styles.button} style={{ width, height }} onClick={onClick}>
      <img
        src={image}
        alt={text}
        className={styles.image}
        style={{ width, height }}
      />
      {text && <div className={styles.overlay}>{text}</div>}
    </div>
  );
}
