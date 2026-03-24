import styles from "./ImageButton.module.css";

export default function ImageButton({ image, text, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      <img src={image} alt={text} className={styles.image} />
      {text && <div className={styles.overlay}>{text}</div>}
    </div>
  );
}
