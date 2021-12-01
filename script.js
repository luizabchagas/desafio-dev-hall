/* MENU HAMBURGUER */

const menuIcon = document.querySelector(".menu-icon")

menuIcon.addEventListener("click", function openMenu() {
  const nav = document.querySelector(".nav")
  nav.classList.toggle("active")
})

/* VALIDAÇÃO DO CAMPO NOME */

function validateName() {
  const name = document.getElementById("name").value
  const error = document.getElementById("name-error")

  error.innerHTML = ""

  if (name.length < 2) {
    error.innerHTML = "* O nome deve ter no mínimo 2 caracteres"
    return false
  }

  return true
}
