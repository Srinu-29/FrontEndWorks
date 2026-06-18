import { getChatbotConfig } from "./config";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { setConfig } from "./store/chatSlice";

export function mountChatbot() {
  if (window.__TOKEN_MANAGER_CHATBOT_MOUNTED__) return;

  if (!document.body) {
    document.addEventListener("DOMContentLoaded", mountChatbot, { once: true });
    return;
  }

  if (document.getElementById("chatbot-root")) return;

  const config = getChatbotConfig();
  store.dispatch(setConfig(config));

  const container = document.createElement("div");
  container.id = "chatbot-root";
  container.setAttribute("data-chatbot-mounted", "true");
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  window.__TOKEN_MANAGER_CHATBOT_MOUNTED__ = true;
}
