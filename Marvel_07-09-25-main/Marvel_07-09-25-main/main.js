const menuBtn = document.getElementById("menu");
const Links = document.getElementById("social-links");
const menuBtmIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  Links.classList.toggle("open");
  const isOpen = Links.classList.contains("open");

  menuBtmIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-x" : "fa-solid fa-bars",
  );
});

Links.addEventListener("click", () => {
  Links.classList.remove("open");
});
