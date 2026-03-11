import styles from "./ProjectButton.module.css";

export default function ProjectButton({ title, year, image, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={image} />
      <div className={styles.overlay}>
        <p>
          {title} ({year})
        </p>
      </div>
    </button>
  );
}
