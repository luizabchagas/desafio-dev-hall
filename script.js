/* MENU HAMBURGUER */

const menuIcon = document.querySelector(".menu-icon")

menuIcon.addEventListener("click", function openMenu() {
  const nav = document.querySelector(".nav")
  nav.classList.toggle("active")
  const menu = document.querySelector(".menu-icon")
  menu.classList.toggle("active")
})

/* ANIMAÇÃO MAQUINA ESCREVER*/

function typeWriter(element) {
  const arrayText = element.innerHTML.split("")
  element.innerHTML = ""
  arrayText.forEach(function (letter, i) {
    setTimeout(function () {
      element.innerHTML += letter
    }, 60 * i)
  })
}

const initialDev = document.querySelector(".pc-text > p")
window.addEventListener("load", typeWriter(initialDev))

/*const initialProject = document.querySelector(".pc-text > h1")
window.addEventListener("load", typeWriter(initialProject))*/

/* ANIMAÇÃO INICIAL */

window.addEventListener("load", function () {
  const animated = document.querySelectorAll("[animationLoad]")
  animated.forEach(function (element) {
    element.classList.add("on")
  })
})

/* ANIMAÇÃO COM SCROLL */

window.addEventListener("scroll", function () {
  const animated = document.querySelectorAll("[animation]")
  const windowTop = window.pageYOffset + 500
  animated.forEach(function (element) {
    if (windowTop > element.offsetTop && window.innerWidth > 1024) {
      element.classList.add("on")
    }
  })
})

/* ANIMAÇÃO MOBILE */

window.addEventListener("load", function () {
  const animated = document.querySelectorAll("[animationMobile]")
  animated.forEach(function (element) {
    if (window.innerWidth < 1024) {
      element.classList.add("active")
    }
  })
})

/* VALIDAÇÃO DO CAMPO NOME */

function validateName() {
  const name = document.getElementById("name").value
  const error = document.getElementById("name-error")

  error.innerHTML = ""

  if (name.length < 2) {
    error.innerHTML = "* O nome deve ter no mínimo 2 caracteres"
    return false
  } else {
    return true
  }
}

/* SCROLL BOTÃO DOBRA*/

$(document).on("click", ".btn-meeting-red", function (e) {
  btnGreen = document.getElementsByTagName("input")
  e.preventDefault()
  $("html, body").animate(
    {
      scrollTop: $(btnGreen).offset().top
    },
    1000
  )
})
