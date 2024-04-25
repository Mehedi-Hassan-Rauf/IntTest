const menu = document.getElementById("nav-control");
const data = document.getElementById("off");
const light = document.getElementById("icon-light");
const dark = document.getElementById("icon-dark");

// for sidebar
var x = 0;
menu.addEventListener("click", () => {
  console.log("clicked");
  if (x % 2 == 0) {
    data.style.display = "none";
  } else {
    data.style.display = "block";
  }
  x++;
});
// for sidebar

// for dark & light mode
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const iconToggle = () => {
  dark.classList.toggle("display-none");
  light.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    dark.classList.add("display-none");
    return;
  }
  light.classList.add("display-none");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

light.addEventListener("click", () => {
  themeSwitch();
});
dark.addEventListener("click", () => {
  themeSwitch();
});
themeCheck();
// for dark & light mode
