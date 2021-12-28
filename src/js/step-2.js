// /////////////////////////////////////////////////////////////////// //
// STEP 2                                                              //
// /////////////////////////////////////////////////////////////////// //
import finalHTMLPath from '../html/final.html'

let relative = {
  relationship: '',
  dead: false,
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

const form = document.querySelector('#step-2-form')
const grandParent = document.querySelector('#step-2-grand-parent')
const parent = document.querySelector('#step-2-parent')
const broSis = document.querySelector('#step-2-brother-sister')
const children = document.querySelector('#step-2-children')
const partner = document.querySelector('#step-2-partner')
const dead = document.querySelector('#step-2-dead')
const alive = document.querySelector('#step-2-alive')
const firstNameInput = document.querySelector('#step-2-firstname')
const firstNameValidationMessage = document.querySelector('#step-2-firstname-validation')
const lastNameInput = document.querySelector('#step-2-lastname')
const lastNameValidationMessage = document.querySelector('#step-2-lastname-validation')
const birthDayInput = document.querySelector('#step-2-birthday')
const birthMonthInput = document.querySelector('#step-2-birthmonth')
const birthYearInput = document.querySelector('#step-2-birthyear')
const birthDateValidationMessage = document.querySelector('#step-2-birthdate-validation')
const emailInput = document.querySelector('#step-2-email')
const emailValidationMessage = document.querySelector('#step-2-email-validation')
const phoneInput = document.querySelector('#step-2-phone')
const phoneValidationMessage = document.querySelector('#step-2-phone-validation')
const presenceLunch = document.querySelector('#step-2-lunch')
const presenceDinner = document.querySelector('#step-2-dinner')
const addAnotherPersonButton = document.querySelector('.add-another-person-button')
const finalValidationButton = document.querySelector('.final-validation-button')

const emailContainer = document.querySelector('#step-2-email-container')
const phoneContainer = document.querySelector('#step-2-phone-container')
const presenceContainer = document.querySelector('#step-2-presence-container')

grandParent.addEventListener('click', () => {
  relative.relationship = grandParent.value
})

parent.addEventListener('click', () => {
  relative.relationship = parent.value
})

broSis.addEventListener('click', () => {
  relative.relationship = broSis.value
})

children.addEventListener('click', () => {
  relative.relationship = children.value
})

partner.addEventListener('click', () => {
  relative.relationship = partner.value
})

dead.addEventListener('click', () => {
  emailContainer.classList.add('disabled-container')
  phoneContainer.classList.add('disabled-container')
  presenceContainer.classList.add('disabled-container')
  relative.dead = true
})

alive.addEventListener('click', () => {
  emailContainer.classList.remove('disabled-container')
  phoneContainer.classList.remove('disabled-container')
  presenceContainer.classList.remove('disabled-container')
  relative.dead = false
})

firstNameInput.addEventListener('blur', () => {
  const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/

  if (firstNameInput.value && !nameRegex.test(firstNameInput.value)) {
    firstNameInput.style.border = '3px solid var(--red)'
    firstNameValidationMessage.innerHTML = '❌ la saisie semble invalide'
  }

  if (nameRegex.test(firstNameInput.value)) {
    firstNameInput.style.border = '3px solid var(--green)'
    firstNameValidationMessage.innerHTML = '&nbsp'
    relative.firstName = firstNameInput.value
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
    relative.lastName = lastNameInput.value
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
    relative.birthDay = birthDayInput.value
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
    relative.birthMonth = birthMonthInput.value
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
    relative.birthYear = birthYearInput.value
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
      relative.email = emailInput.value
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
    relative.phone = phoneInput.value
  }
})

presenceLunch.addEventListener('click', () => {
  relative.presence.lunch = Boolean(presenceLunch.checked)
})

presenceDinner.addEventListener('click', () => {
  relative.presence.dinner = Boolean(presenceDinner.checked)
})

addAnotherPersonButton.addEventListener('click', () => {
  if (checkStep2Completion() && sessionStorage.getItem('dataSet')) {
    const dataSet = JSON.parse(sessionStorage.getItem('dataSet'))
    dataSet.relatives.push(relative)
    sessionStorage.setItem('dataSet', JSON.stringify(dataSet))
    resetForm()
  }
})

finalValidationButton.addEventListener('click', () => {
  const {firstName, lastName, birthDay, birthMonth, birthYear} = relative

  if (!firstName && !lastName && !birthDay && !birthMonth && !birthYear) {
    window.location.href = finalHTMLPath
  }

  if ((firstName || lastName || birthDay || birthMonth || birthYear) && checkStep2Completion() && sessionStorage.getItem('dataSet')) {
    const dataSet = JSON.parse(sessionStorage.getItem('dataSet'))
    dataSet.relatives.push(relative)
    sessionStorage.setItem('dataSet', JSON.stringify(dataSet))
    resetForm()
    window.location.href = finalHTMLPath
  }
})

function checkStep2Completion() {
  const {firstName, lastName, birthDay, birthMonth, birthYear} = relative

  if (!firstName) {
    firstNameInput.style.border = '3px solid var(--red)'
    firstNameValidationMessage.innerHTML = '❌ Veuillez saisir un prénom'
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

  if (firstName && lastName && birthDay && birthMonth && birthYear) {
    return true
  }
}

function resetForm() {
  relative = {
    relationship: '',
    dead: false,
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
