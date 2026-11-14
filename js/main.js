const root = document.documentElement;
const darkQuery = matchMedia("(prefers-color-scheme: dark)");

document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = root.dataset.theme || (darkQuery.matches ? "dark" : "light");
  root.dataset.theme = current === "dark" ? "light" : "dark";
});
