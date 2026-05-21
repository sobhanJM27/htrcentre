export default function handleTheme(themeValue?: "light" | "dark") {
  if (themeValue) localStorage.setItem("theme", themeValue);
  const theme = localStorage.getItem("theme");
  if (
    (theme && theme === "dark") ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    return true;
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    return false;
  }
}
