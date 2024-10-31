const locations = {
  "п.Щульяюр": "Щульяюр",
  "д.Вертеп": "Вертеп",
  "с.Краснобор": "Краснобор",
  "д.Диюр": "Диюр",
};

// let activeLocation = "п.Щульяюр";

function updateMapLocation(location) {
  const mapIframe = document.getElementById("mapIframe");
  const query = locations[location];
  mapIframe.src = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodeURIComponent(
    query
  )}&ie=UTF8&t=&z=14&iwloc=B&output=embed`;

  setActiveButton(location);
}

function setActiveButton(location) {
  const currentButton = document.getElementById(`btn-${location}`);
  currentButton.classList.remove("bg-grey-500"); // удаляем серый цвет
  currentButton.classList.add("bg-green-500", "text-white"); // используем классы Tailwind CSS

  activeLocation = location;
}

setActiveButton(activeLocation);
