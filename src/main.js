import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import "./style.css";

export function toggleLoginOptionsOverlay(event) {
  const clickedElement = event.target;
  const nextLoginOverlay = clickedElement
    .closest(".login-card")
    .querySelector(".login-overlay");

  if (!nextLoginOverlay) {
    return;
  }

  const closeButton = nextLoginOverlay.querySelector(".btn-close");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      toggleVisibility(nextLoginOverlay, false);
    });
  }

  toggleVisibility(nextLoginOverlay, true);
}

// Hide and show element in the DOM
function toggleVisibility(element, show = true) {
  if (show) {
    element.classList.remove("d-none");
  } else {
    element.classList.add("d-none");
  }
}

// Attaching functions to window object
window.toggleLoginOptionsOverlay = toggleLoginOptionsOverlay;
