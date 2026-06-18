import styles from "./ChatButton.module.css";

export function ChatButton({ isOpen, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <i className="fa-solid fa-headset"></i>
    </button>
  );
}
