import styles from "./MessagesList.module.css";

export function MessagesList({ messages, loading }) {
  return (
    <div className={styles.container}>
      {messages.map((msg, i) => {
        const isUser = msg.role === "user";

        return (
          <div
            key={i}
            className={`${styles.message} ${isUser ? styles.user : styles.bot}`}
          >
            <span className={styles.avatar}>
              {isUser ? (
                <i class="fa-regular fa-circle-user"></i>
              ) : (
                <i class="fa-brands fa-twitch"></i>
              )}
            </span>
            <div className={styles.bubble}>
              <span className={styles.role}>
                {isUser ? "You" : "StarklyAI"}
              </span>
              {msg.text}
            </div>
          </div>
        );
      })}
      {loading && (
        <p className={styles.loading}>
          <em>Bot is typing...</em>
        </p>
      )}
    </div>
  );
}
