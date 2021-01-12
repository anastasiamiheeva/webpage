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

//form
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  if(usernameValue === '') {
    setErrorFor(username, `Field should't be empty`)
  }else {
    setSuccessFor(username)
  }

  if(emailValue === '') {
    setErrorFor(email, `Field should't be empty`)
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, `Invalid email`)
  } else {
    setSuccessFor(email)
  }

  if(phoneValue === '') {
    setErrorFor(phone, `Field should't be empty`)
  } else if(!isPhone(phoneValue)) {
    setErrorFor(phone, `Invalid phone`)
  } else {
    setSuccessFor(phone)
  }
}

function setErrorFor(input, message) {
  const formControl = input
  input.placeholder = message;
  formControl.className = 'form__input error'
}

function setSuccessFor(input, message) {
  const formControl = input;
  input.placeholder = message;
  formControl.className = 'form__input success'
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
  return /^([+]?[0-9\s-\(\)]{3,25})*$/i.test(phone);
}