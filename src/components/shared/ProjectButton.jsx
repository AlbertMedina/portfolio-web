import styles from "./ProjectButton.module.css";

export default function ProjectButton({ image, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={image} alt="The Frightening Nightmare Of Little Eddy" />
    </button>
  );
}
