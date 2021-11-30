const menuIcon = document.querySelector(".menu-icon")

menuIcon.addEventListener("click", function openMenu() {
  const nav = document.querySelector(".nav")
  nav.classList.toggle("active")
})
