
// Этот файл должен вызываться в компоненте, где обрабатываются чат-команды
export function handleChatInput(input) {
  if (input.trim() === "/admin") {
    const event = new CustomEvent("chat-command", { detail: { text: "/admin" } });
    window.dispatchEvent(event);
  }
}
