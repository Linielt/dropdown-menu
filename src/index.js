import "./styles.css";
console.log("Hello!");

const dropdownButton = document.getElementById("dropdown-button");
const dropdownContent = document.getElementsByClassName("dropdown-content");

dropdownButton.addEventListener("click", () => {
  for (let content of dropdownContent) {
    content.classList.toggle("show");
  }
});
