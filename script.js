const btnMobile = document.querySelector("btn-mobile")

btnMobile.forEach(function (icons) {
  icons.addEventListener("click", function () {
    const openMenu = icons.classList.contains("active")
    icons.forEach(function (icons) {
      icons.classList.remove("active")
    })
    if (!openMenu) {
      icons.classList.add("active")
    } else {
      icons.classList.remove("active")
    }
  })
})

/*const nav = document.getElementsByClassName("nav")

function openMenu() {
  const nav = document.getElementsByClassName("nav")
  nav.classList.toggle("active")
}*/
