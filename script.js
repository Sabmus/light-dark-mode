const htmlElement = document.documentElement;
const toggleSwitch = document.querySelector("#checkbox");

const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggle-icon");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#text-box");

function theme(mode) {
  nav.style.backgroundColor =
    mode === "dark" ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor =
    mode === "dark" ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = `${mode} Mode`;
  toggleIcon.children[1].classList.remove(
    mode === "dark" ? "fa-sun" : "fa-moon"
  );
  toggleIcon.children[1].classList.add(mode === "dark" ? "fa-moon" : "fa-sun");
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

// Switch theme function
function switchTheme(event) {
  if (event.target.checked) {
    htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    theme("dark");
  } else {
    htmlElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    theme("light");
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

const themeSelected = localStorage.getItem("theme");
if (themeSelected) {
  htmlElement.setAttribute("data-theme", themeSelected);

  if (themeSelected === "dark") {
    toggleSwitch.checked = true;
    theme(themeSelected);
  }
}
