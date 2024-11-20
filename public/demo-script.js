function updateText() {
  const element = document.getElementById("script-injection-demo");

  if (element) {
    element.classList.add("bg-blue-100");
    element.textContent = "Text updated with script injection";
  }
}

window.updateText = updateText;