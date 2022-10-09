const navigation = document.querySelector('#navigation')
const backToTopButton = document.querySelector('#backToTopButton')
const toggle = document.querySelector('#sw-checkbox')

const avatar_1 = document.querySelector('#avatar-1')
const avatar_2 = document.querySelector('#avatar-2')

window.addEventListener('scroll', onScroll)
onScroll()

window.onload = setTimeout(() => {
  avatar_1.style.opacity = 0

  avatar_1.style.animation = 'none'
  avatar_2.style.animation = 'none'

}, 4000)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(knowledge)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

openMenu()
function openMenu() {
  const openBtns = document.querySelectorAll('.open')
  openBtns.forEach((e) => {
    e.addEventListener('click', () => {
      document.body.classList.add('menu-expanded')
    })
  })
}

closeMenu()
function closeMenu() {
  const closeBtns = document.querySelectorAll('.close')
  closeBtns.forEach((e) => {
    e.addEventListener('click', () => {
      document.body.classList.remove('menu-expanded')
    })
  })
}

ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1000
}).reveal(
  `#home, 
  #home img, 
  #about, 
  #about header, 
  #about p,
  #about img,
  #knowledge,
  #knowledg header,
  #knowledg .card,
  #contact,
  #contact header`
)

toggle.addEventListener('change', () => {
  document.body.classList.toggle('light-mode')
})
