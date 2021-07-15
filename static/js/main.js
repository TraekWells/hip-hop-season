// Get the DOM elements I need to add interaction to
const navBar = document.querySelector('.nav')
const mobileMenu = navBar.querySelector('.nav__burger')
const navList = navBar.querySelector('.nav__list')
const navItems = navBar.querySelectorAll('.nav__item')

const updateNavBar = function () {
  let height = navBar.clientHeight * 1
  if (window.pageYOffset > height) {
    navBar.classList.add('scrolled')
  } else {
    navBar.classList.remove('scrolled')
  }
}

const burgerToggle = function () {
  mobileMenu.classList.toggle('active')
  navList.classList.toggle('active')
}

const hideMobileMenu = function () {
  if (navList.classList.contains('active')) {
    navList.classList.toggle('active')
    mobileMenu.classList.toggle('active')
  } else {
    return
  }
}

navList.addEventListener('click', hideMobileMenu)
mobileMenu.addEventListener('click', burgerToggle)
window.addEventListener('scroll', updateNavBar)
