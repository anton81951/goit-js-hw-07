function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button");
const spanText = document.querySelector(".color");

const handleClick = (event) => {
  spanText.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};

button.addEventListener("click", handleClick);
