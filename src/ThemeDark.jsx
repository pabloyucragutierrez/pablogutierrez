export function ThemeDark(setTtheme) {
  setTtheme(true)
  document.documentElement.style.setProperty("--color-theme", "#fff");
  document.documentElement.style.setProperty("--color-btn", "#455776");
  document.documentElement.style.setProperty("--filter-img", "invert(0)");
  document.querySelector("body").style.backgroundColor = "#0b0e2d";
  document.querySelector(".header").style.backgroundColor = "#0b0e2d";
}