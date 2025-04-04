export function ThemeLight(setTtheme) {
  setTtheme(false)
  document.documentElement.style.setProperty("--color-theme", "#0b0e2d");
  document.documentElement.style.setProperty("--color-btn", "#e5e8ed");
  document.documentElement.style.setProperty("--filter-img", "invert(1)");
  document.documentElement.style.setProperty("--filter-img2", "invert(0)");
  document.querySelector("body").style.backgroundColor = "#fff";
  document.querySelector(".header").style.backgroundColor = "#fff";
}