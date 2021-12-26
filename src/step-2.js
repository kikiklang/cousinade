// /////////////////////////////////////////////////////////////////// //
// STEP 2                                                              //
// /////////////////////////////////////////////////////////////////// //
let relative = {
  relationship: '',
  gender: '',
  dead: false,
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

const step2GrandParent = document.querySelector('#step-2-grand-parent')
const step2Parent = document.querySelector('#step-2-parent')
const step2BroSis = document.querySelector('#step-2-brother-sister')
const step2Children = document.querySelector('#step-2-children')
const step2Partner = document.querySelector('#step-2-partner')
const step2Dead = document.querySelector('#step-2-dead')
const step2Alive = document.querySelector('#step-2-alive')
const step2FirstNameInput = document.querySelector('#step-2-firstname')
const step2FirstNameValidationMessage = document.querySelector('#step-2-firstname-validation')
const step2LastNameInput = document.querySelector('#step-2-lastname')
const step2LastNameValidationMessage = document.querySelector('#step-2-lastname-validation')
const step2BirthDayInput = document.querySelector('#step-2-birthday')
const step2BirthMonthInput = document.querySelector('#step-2-birthmonth')
const step2BirthYearInput = document.querySelector('#step-2-birthyear')
const step2BirthDateValidationMessage = document.querySelector('#step-2-birthdate-validation')
const step2EmailInput = document.querySelector('#step-2-email')
const step2EmailValidationMessage = document.querySelector('#step-2-email-validation')
const step2PhoneInput = document.querySelector('#step-2-phone')
const step2PhoneValidationMessage = document.querySelector('#step-2-phone-validation')
const step2PresenceLunch = document.querySelector('#step-2-lunch')
const step2PresenceDinner = document.querySelector('#step-2-dinner')
const addAnotherPersonButton = document.querySelector('.add-another-person-button')
const finalValidationButton = document.querySelector('.final-validation-button')

const step2EmailContainer = document.querySelector('#step-2-email-container')
const step2PhoneContainer = document.querySelector('#step-2-phone-container')
const step2PPresenceContainer = document.querySelector('#step-2-presence-container')

step2GrandParent.addEventListener('click', () => {
  relative.relationship = step2GrandParent.value
})

step2Parent.addEventListener('click', () => {
  relative.relationship = step2Parent.value
})

step2BroSis.addEventListener('click', () => {
  relative.relationship = step2BroSis.value
})

step2Dead.addEventListener('click', () => {
  step2EmailContainer.classList.add('disabled-container')
  step2PhoneContainer.classList.add('disabled-container')
  step2PPresenceContainer.classList.add('disabled-container')
  relative.dead = true
})

step2Alive.addEventListener('click', () => {
  step2EmailContainer.classList.remove('disabled-container')
  step2PhoneContainer.classList.remove('disabled-container')
  step2PPresenceContainer.classList.remove('disabled-container')
  relative.dead = false
})

step2Children.addEventListener('click', () => {
  relative.relationship = step2Children.value
})

step2Partner.addEventListener('click', () => {
  relative.relationship = step2Partner.value
})

step2FirstNameInput.addEventListener('blur', () => {
  const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/

  if (!step2FirstNameInput.value) {
    step2FirstNameInput.style.border = '3px solid var(--red)'
    step2FirstNameValidationMessage.innerHTML = '⚠️ Veuillez saisir un prénom'
    return false
  }

  if (nameRegex.test(step2FirstNameInput.value)) {
    step2FirstNameInput.style.border = '3px solid var(--green)'
    step2FirstNameValidationMessage.innerHTML = '&nbsp'
    relative.firstname = step2FirstNameInput.value
    checkStep2Completion()
    return true
  }

  step2FirstNameInput.style.border = '3px solid var(--red)'
  step2FirstNameValidationMessage.innerHTML = '⚠️ La saisie semble invalide'
  return false
})

step2LastNameInput.addEventListener('blur', () => {
  const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/

  if (!step2LastNameInput.value) {
    step2LastNameInput.style.border = '3px solid var(--red)'
    step2LastNameValidationMessage.innerHTML = '⚠️ Veuillez saisir un nom'
    return false
  }

  if (nameRegex.test(step2LastNameInput.value)) {
    step2LastNameInput.style.border = '3px solid var(--green)'
    step2LastNameValidationMessage.innerHTML = '&nbsp'
    relative.lastName = step2LastNameInput.value
    checkStep2Completion()
    return true
  }

  step2LastNameInput.style.border = '3px solid var(--red)'
  step2LastNameValidationMessage.innerHTML = '⚠️ La saisie semble invalide'
  return false
})

step2BirthDayInput.addEventListener('blur', () => {
  if (!step2BirthDayInput.value) {
    step2BirthDayInput.style.border = '3px solid var(--red)'
    step2BirthDateValidationMessage.innerHTML = '⚠️ saisie invalide'
    return false
  }

  if (step2BirthDayInput.value > 0 && step2BirthDayInput.value <= 31) {
    step2BirthDayInput.style.border = '3px solid var(--green)'
    step2BirthDateValidationMessage.innerHTML = '&nbsp'
    relative.birthDay = step2BirthDayInput.value
    checkStep2Completion()
  } else {
    step2BirthDayInput.style.border = '3px solid var(--red)'
    step2BirthDateValidationMessage.innerHTML = '⚠️ Veuillez saisir un nombre entre 0 et 31...'
  }
})

step2BirthMonthInput.addEventListener('blur', () => {
  if (!step2BirthMonthInput.value) {
    step2BirthMonthInput.style.border = '3px solid var(--red)'
    step2BirthDateValidationMessage.innerHTML = '⚠️ Veuillez saisir un nombre entre 0 et 12'
    return false
  }

  if (step2BirthMonthInput.value > 0 && step2BirthMonthInput.value <= 12) {
    step2BirthMonthInput.style.border = '3px solid var(--green)'
    step2BirthDateValidationMessage.innerHTML = '&nbsp'
    relative.birthMonth = step2BirthMonthInput.value
    checkStep2Completion()
  } else {
    step2BirthMonthInput.style.border = '3px solid var(--red)'
    step2BirthDateValidationMessage.innerHTML = '⚠️ Veuillez saisir un nombre entre 0 et 12'
  }
})

step2BirthYearInput.addEventListener('blur', () => {
  const valid4DigitsYear = /^\d{4}$/

  if (!step2BirthYearInput.value || !valid4DigitsYear.test(step2BirthYearInput.value)) {
    step2BirthYearInput.style.border = '3px solid var(--red)'
    step2BirthDateValidationMessage.innerHTML = '⚠️ saisie invalide  ex: 1984'
    return false
  }

  if (step2BirthYearInput.value > 1500 && step2BirthYearInput.value <= new Date().getFullYear()) {
    step2BirthYearInput.style.border = '3px solid var(--green)'
    step2BirthDateValidationMessage.innerHTML = '&nbsp'
    relative.birthYear = step2BirthYearInput.value
    checkStep2Completion()
  } else {
    step2BirthYearInput.style.border = '3px solid var(--red)'
    step2BirthDateValidationMessage.innerHTML = '⚠️ L"année semble incorrecte'
  }
})

step2EmailInput.addEventListener('blur', () => {
  const validEmail = /^[-!#$%&'*+/\w=?^`{|}~](\.?[-!#$%&'*+/\w=?^`{|}~])*@[a-zA-Z\d](-*\.?[a-zA-Z\d])*\.[a-zA-Z](-?[a-zA-Z\d])+$/

  if (step2EmailInput.value) {
    const emailParts = step2EmailInput.value.split('@')
    if (emailParts.length !== 2) {
      step2EmailInput.style.border = '3px solid var(--red)'
      step2EmailValidationMessage.innerHTML = '⚠️ La saisie est invalide'
      return false
    }

    const [account, address] = emailParts
    if (account.length > 64) {
      step2EmailInput.style.border = '3px solid var(--red)'
      step2EmailValidationMessage.innerHTML = '⚠️ La saisie est invalide'
      return false
    }

    if (address.length > 255) {
      step2EmailInput.style.border = '3px solid var(--red)'
      step2EmailValidationMessage.innerHTML = '⚠️ La saisie est invalide'
      return false
    }

    const domainParts = address.split('.')
    if (domainParts.some(part => part.length > 63)) {
      step2EmailInput.style.border = '3px solid var(--red)'
      step2EmailValidationMessage.innerHTML = '⚠️ La saisie est invalide'
      return false
    }

    if (validEmail.test(step2EmailInput.value)) {
      step2EmailInput.style.border = '3px solid var(--green)'
      step2EmailValidationMessage.innerHTML = '&nbsp'
      relative.email = step2EmailInput.value
    } else {
      step2EmailInput.style.border = '3px solid var(--red)'
      step2EmailValidationMessage.innerHTML = '⚠️ La saisie est invalide'
    }
  } else {
    step2EmailInput.style.border = '3px solid var(--black)'
    step2EmailValidationMessage.innerHTML = '&nbsp'
  }
})

step2PhoneInput.addEventListener('blur', () => {
  const validFrenchPhone = /^(?:(?:\+|00)33|0)\s*[2-9](?:[\s.-]*\d{2}){4}$/

  if (!step2PhoneInput.value) {
    step2PhoneInput.style.border = '3px solid var(--red)'
    step2PhoneValidationMessage.innerHTML = '⚠️ Le numéro est manquant'
    return false
  }

  if (validFrenchPhone.test(step2PhoneInput.value)) {
    step2PhoneInput.style.border = '3px solid var(--green)'
    step2PhoneValidationMessage.innerHTML = '&nbsp'
    relative.phone = step2PhoneInput.value
    checkStep2Completion()
    return true
  }

  step2PhoneInput.style.border = '3px solid var(--red)'
  step2PhoneValidationMessage.innerHTML = '⚠️ La saisie semble invalide'
  return false
})

step2PresenceLunch.addEventListener('click', () => {
  relative.presence.lunch = Boolean(step2PresenceLunch.checked)
})

step2PresenceDinner.addEventListener('click', () => {
  relative.presence.dinner = Boolean(step2PresenceDinner.checked)
})

addAnotherPersonButton.addEventListener('click', () => {
  if (checkStep2Completion() && sessionStorage.getItem('dataSet')) {
    const dataSet = JSON.parse(sessionStorage.getItem('dataSet'))
    dataSet.relatives.push(relative)
    sessionStorage.setItem('dataSet', JSON.stringify(dataSet))
    relative = {
      relationship: '',
      gender: '',
      dead: false,
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
  }
})

finalValidationButton.addEventListener('click', () => {
  if (!checkStep2Completion()) {
    relative = {
      relationship: '',
      gender: '',
      dead: false,
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
  } else if (checkStep2Completion() && sessionStorage.getItem('dataSet')) {
    const dataSet = JSON.parse(sessionStorage.getItem('dataSet'))
    dataSet.relatives.push(relative)
    sessionStorage.setItem('dataSet', JSON.stringify(dataSet))
    relative = {
      relationship: '',
      gender: '',
      dead: false,
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
    location.reload()
  }
})

function checkStep2Completion() {
  const {firstname, lastName, birthDay, birthMonth, birthYear} = relative

  if (firstname && lastName && birthDay && birthMonth && birthYear) {
    addAnotherPersonButton.disabled = false
    finalValidationButton.disabled = false
    return true
  }

  return false
}
