//scroll
function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

const signUp = document.querySelector('#sign-up')
const footer = document.querySelector('#footer')

signUp.addEventListener('click', () => {
  scrollTo(footer)
})