import styles from "./ChatHeader.module.css";

export function ChatHeader({ onClear }) {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Chatbot</p>
      <button className={styles.clearBtn} onClick={onClear}>
        Clear
      </button>
    </div>
  );
}
