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

/* SCROLL BOTÃO DOBRA*/

btnRed = document.getElementsByClassName(".btn-meeting-red")

$(document).on("click", btnRed, function (e) {
  btnGreen = document.getElementsByTagName("input")
  e.preventDefault()
  $("html, body").animate(
    {
      scrollTop: $(btnGreen).offset().top
    },
    1000
  )
})
