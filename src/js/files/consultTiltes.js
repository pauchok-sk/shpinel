export default function consultTitles() {
  const buttons = document.querySelectorAll("[data-consult-title]");

  if (buttons.length) {
    const input = document.querySelector("#name-consult")
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const title = btn.dataset.consultTitle;

        input.value = title;
      })
    })
  }
}