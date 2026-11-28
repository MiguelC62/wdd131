// Thank you page: counts the messages sent from this browser.
// The page is reached from the contact form (method GET), so the URL has parameters.
const countElement = document.querySelector("#message-count");

try {
  let messageCount = Number(localStorage.getItem("arteClaudiaMessages")) || 0;

  // Count only when the page comes from the form (GET with parameters)
  if (window.location.search) {
    messageCount++;
    localStorage.setItem("arteClaudiaMessages", messageCount);

    // Remove the parameters so a refresh does not count again
    history.replaceState(null, "", window.location.pathname);
  }

  if (countElement) {
    const word = messageCount === 1 ? "message" : "messages";
    countElement.textContent = `You have sent ${messageCount} ${word} from this browser.`;
  }
} catch (error) {
  console.error("Message counter unavailable:", error);
}
