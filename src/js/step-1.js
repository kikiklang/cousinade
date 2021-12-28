// /////////////////////////////////////////////////////////////////// //
// STEP 1                                                              //
// /////////////////////////////////////////////////////////////////// //
import step2HTMLPath from '../html/step-2.html'

let user = {
  firstName: '',
  lastName: '',
  birthDay: '',
  birthMonth: '',
  birthYear: '',
  email: '',
  phone: '',
  presence: {
    lunch: false,
    dinner: false,
  },
}

const form = document.querySelector('#step-1-form')
const firstNameInput = document.querySelector('#step-1-firstname')
const firstNameValidationMessage = document.querySelector('#step-1-firstname-validation')
const lastNameInput = document.querySelector('#step-1-lastname')
const lastNameValidationMessage = document.querySelector('#step-1-lastname-validation')
const birthDayInput = document.querySelector('#step-1-birthday')
const birthMonthInput = document.querySelector('#step-1-birthmonth')
const birthYearInput = document.querySelector('#step-1-birthyear')
const birthDateValidationMessage = document.querySelector('#step-1-birthdate-validation')
const emailInput = document.querySelector('#step-1-email')
const emailValidationMessage = document.querySelector('#step-1-email-validation')
const phoneInput = document.querySelector('#step-1-phone')
const phoneValidationMessage = document.querySelector('#step-1-phone-validation')
const presenceLunch = document.querySelector('#step-1-lunch')
const presenceDinner = document.querySelector('#step-1-dinner')
const validationButton = document.querySelector('.validation-button')

firstNameInput.addEventListener('blur', () => {
  const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/

  if (firstNameInput.value && !nameRegex.test(firstNameInput.value)) {
    firstNameInput.style.border = '3px solid var(--red)'
    firstNameValidationMessage.innerHTML = '❌ la saisie semble invalide'
  }

  if (nameRegex.test(firstNameInput.value)) {
    firstNameInput.style.border = '3px solid var(--green)'
    firstNameValidationMessage.innerHTML = '&nbsp'
    user.firstName = firstNameInput.value
  }
})

lastNameInput.addEventListener('blur', () => {
  const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/

  if (lastNameInput.value && !nameRegex.test(firstNameInput.value)) {
    lastNameInput.style.border = '3px solid var(--red)'
    lastNameValidationMessage.innerHTML = '❌ la saisie semble invalide'
  }

  if (nameRegex.test(lastNameInput.value)) {
    lastNameInput.style.border = '3px solid var(--green)'
    lastNameValidationMessage.innerHTML = '&nbsp'
    user.lastName = lastNameInput.value
  }
})

birthDayInput.addEventListener('blur', () => {
  const validBirthday = /^\d+$/.test(birthDayInput.value)
                        && birthDayInput.value > 0
                        && birthDayInput.value <= 31

  if (birthDayInput.value && !validBirthday) {
    birthDayInput.style.border = '3px solid var(--red)'
    birthDateValidationMessage.innerHTML = '❌ Veuillez saisir saisir un nombre entre 0 et 31'
  }

  if (validBirthday) {
    birthDayInput.style.border = '3px solid var(--green)'
    birthDateValidationMessage.innerHTML = '&nbsp'
    user.birthDay = birthDayInput.value
  }
})

birthMonthInput.addEventListener('blur', () => {
  const validBirthmonth = /^\d+$/.test(birthMonthInput.value)
                        && birthMonthInput.value > 0
                        && birthMonthInput.value <= 12

  if (birthMonthInput.value && !validBirthmonth) {
    birthMonthInput.style.border = '3px solid var(--red)'
    birthDateValidationMessage.innerHTML = 'Veuillez saisir saisir un nombre entre 0 et 12'
  }

  if (validBirthmonth) {
    birthMonthInput.style.border = '3px solid var(--green)'
    birthDateValidationMessage.innerHTML = '&nbsp'
    user.birthMonth = birthMonthInput.value
  }
})

birthYearInput.addEventListener('blur', () => {
  const valid4DigitsYear = /^\d{4}$/
                           && birthYearInput.value > 1900
                           && birthYearInput.value <= new Date().getFullYear()

  if (birthYearInput.value && !valid4DigitsYear) {
    birthYearInput.style.border = '3px solid var(--red)'
    birthDateValidationMessage.innerHTML = '❌ saisie invalide  ex: 1984'
  }

  if (valid4DigitsYear) {
    birthYearInput.style.border = '3px solid var(--green)'
    birthDateValidationMessage.innerHTML = '&nbsp'
    user.birthYear = birthYearInput.value
  }
})

emailInput.addEventListener('blur', () => {
  const validEmail = /^[-!#$%&'*+/\w=?^`{|}~](\.?[-!#$%&'*+/\w=?^`{|}~])*@[a-zA-Z\d](-*\.?[a-zA-Z\d])*\.[a-zA-Z](-?[a-zA-Z\d])+$/

  if (emailInput.value) {
    const emailParts = emailInput.value.split('@')
    if (emailParts.length !== 2) {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '❌ La saisie est invalide'
      return false
    }

    const [account, address] = emailParts
    if (account.length > 64) {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '❌ La saisie est invalide'
      return false
    }

    if (address.length > 255) {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '❌ La saisie est invalide'
      return false
    }

    const domainParts = address.split('.')
    if (domainParts.some(part => part.length > 63)) {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '❌ La saisie est invalide'
      return false
    }

    if (validEmail.test(emailInput.value)) {
      emailInput.style.border = '3px solid var(--green)'
      emailValidationMessage.innerHTML = '&nbsp'
      user.email = emailInput.value
    } else {
      emailInput.style.border = '3px solid var(--red)'
      emailValidationMessage.innerHTML = '❌ La saisie est invalide'
    }
  } else {
    emailInput.style.border = '3px solid var(--black)'
    emailValidationMessage.innerHTML = '&nbsp'
  }
})

phoneInput.addEventListener('blur', () => {
  const validFrenchPhone = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/

  if (phoneInput.value && !validFrenchPhone.test(phoneInput.value)) {
    phoneInput.style.border = '3px solid var(--red)'
    phoneValidationMessage.innerHTML = '❌ saisie invalide  ex: 0612345678'
  }

  if (validFrenchPhone.test(phoneInput.value)) {
    phoneInput.style.border = '3px solid var(--green)'
    phoneValidationMessage.innerHTML = '&nbsp'
    user.phone = phoneInput.value
  }
})

presenceLunch.addEventListener('click', () => {
  user.presence.lunch = Boolean(presenceLunch.checked)
})

presenceDinner.addEventListener('click', () => {
  user.presence.dinner = Boolean(presenceDinner.checked)
})

validationButton.addEventListener('click', () => {
  if (checkStep1Completion() && sessionStorage.getItem('dataSet')) {
    const dataSet = JSON.parse(sessionStorage.getItem('dataSet'))
    dataSet.user = user
    sessionStorage.setItem('dataSet', JSON.stringify(dataSet))
    resetForm()
    window.location.href = step2HTMLPath
  }
})

function checkStep1Completion() {
  const {firstName, lastName, birthDay, birthMonth, birthYear, phone} = user

  if (!firstName) {
    firstNameInput.style.border = '3px solid var(--red)'
    firstNameValidationMessage.innerHTML = 'Veuillez saisir un prénom'
  }

  if (!lastName) {
    lastNameInput.style.border = '3px solid var(--red)'
    lastNameValidationMessage.innerHTML = '❌ Veuillez saisir un nom'
  }

  if (!birthDay) {
    birthDayInput.style.border = '3px solid var(--red)'
    birthDateValidationMessage.innerHTML = '❌ Veuillez saisir la ou les valeurs manquantes'
  }

  if (!birthMonth) {
    birthMonthInput.style.border = '3px solid var(--red)'
    birthDateValidationMessage.innerHTML = '❌ Veuillez saisir la ou les valeurs manquantes'
  }

  if (!birthYear) {
    birthYearInput.style.border = '3px solid var(--red)'
    birthDateValidationMessage.innerHTML = '❌ Veuillez saisir la ou les valeurs manquantes'
  }

  if (!phone) {
    phoneInput.style.border = '3px solid var(--red)'
    phoneValidationMessage.innerHTML = '❌ Veuillez saisir un numero'
  }

  if (firstName && lastName && birthDay && birthMonth && birthYear && phone) {
    return true
  }
}

function resetForm() {
  user = {
    firstname: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    email: '',
    phone: '',
    presence: {
      lunch: false,
      dinner: false,
    },
  }

  firstNameInput.style.border = '3px solid var(--black)'
  firstNameValidationMessage.innerHTML = '&nbsp'
  lastNameInput.style.border = '3px solid var(--black)'
  lastNameValidationMessage.innerHTML = '&nbsp'
  birthDayInput.style.border = '3px solid var(--black)'
  birthDateValidationMessage.innerHTML = '&nbsp'
  birthMonthInput.style.border = '3px solid var(--black)'
  birthDateValidationMessage.innerHTML = '&nbsp'
  birthYearInput.style.border = '3px solid var(--black)'
  birthDateValidationMessage.innerHTML = '&nbsp'
  emailInput.style.border = '3px solid var(--black)'
  emailValidationMessage.innerHTML = '&nbsp'
  phoneInput.style.border = '3px solid var(--black)'
  phoneValidationMessage.innerHTML = '&nbsp'

  form.reset()
}
