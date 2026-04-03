let tooltip;

document.addEventListener("mouseup", async (e) => {
  const selection = window.getSelection().toString().trim();

  // Remove old tooltip
  if (tooltip) {
    tooltip.remove();
    tooltip = null;
  }

  // Only single word
  if (!selection || selection.split(" ").length > 1) return;

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selection}`);
    const data = await res.json();

    let meaning = "No meaning found.";
    if (data[0]?.meanings?.length > 0) {
      meaning = data[0].meanings[0].definitions[0].definition;
    }

    showTooltip(e.pageX, e.pageY, selection, meaning);

  } catch {
    showTooltip(e.pageX, e.pageY, selection, "Error fetching meaning.");
  }
});

function showTooltip(x, y, word, meaning) {
  tooltip = document.createElement("div");
  tooltip.innerText = `${word}: ${meaning}`;

  Object.assign(tooltip.style, {
    position: "absolute",
    top: y + "px",
    left: x + "px",
    background: "#333",
    color: "#fff",
    padding: "8px",
    borderRadius: "6px",
    fontSize: "12px",
    maxWidth: "250px",
    zIndex: 9999,
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
  });

  document.body.appendChild(tooltip);

  // Auto remove
  setTimeout(() => {
    if (tooltip) tooltip.remove();
  }, 4000);
}