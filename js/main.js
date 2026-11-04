// رابط التطبيق على Google Play
const PLAY_URL = "https://play.google.com/store/apps/details?id=com.amryasser.daftaraltaat";

const root = document.documentElement;
const darkQuery = matchMedia("(prefers-color-scheme: dark)");

if (PLAY_URL) {
  document.querySelectorAll("[data-play]").forEach((link) => {
    link.href = PLAY_URL;
    link.textContent = "حمّل من Google Play";
    link.removeAttribute("aria-disabled");
  });
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = root.dataset.theme || (darkQuery.matches ? "dark" : "light");
  root.dataset.theme = current === "dark" ? "light" : "dark";
});
