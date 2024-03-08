const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const heading = document.querySelector(".heading");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  heading.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;

  // Update heading text color based on the theme
  if (isDark) {
    heading.style.color = "#000";
  } else {
    heading.style.color = "#fff";
  }
};

