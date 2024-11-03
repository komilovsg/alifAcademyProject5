export function tabs() {
  const tabButtons = document.querySelectorAll(".tabButton");
  const mapFrames = document.querySelectorAll(".mapFrame");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      mapFrames.forEach((frame) => frame.classList.remove("active"));

      button.classList.add("active");
      const locationId = button.getAttribute("data-location");
      const targetFrame = document.getElementById(locationId);
      if (targetFrame) {
        targetFrame.classList.add("active");
      }
    });
  });
}


