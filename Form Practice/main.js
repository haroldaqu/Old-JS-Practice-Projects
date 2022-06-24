const submit = document.querySelector('#submit')
const email = document.querySelector('#email')
const zipcode = document.querySelector('#zipcode')
const country = document.querySelector('#country')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#password-confirm')
const error = document.querySelector('#error')

function errorMessage(e) {
    let messages = []

    // email errors
    if (email.value === ''|| email.value === null) {
        messages.push('Email is required')
    }

    // zipcode erros
    if (zipcode.value === ''|| zipcode === null)
        messages.push('Zipcode is required')
    
    // country errors
    if (country.value === ''|| country === null)
        messages.push('Country is required')
    
    // password errors
    if (password.value === ''|| password === null)
        messages.push('Password is required')
    
    // password confirmation confirmation errors
    if (passwordConfirm.value === ''||  passwordConfirm=== null)
        messages.push('Password confirm is required')

    if (password.value !== passwordConfirm.value) {
        messages.push('Password does not match')
    }

    if (password.length <= 5 || password.value >= 15) {
        messages.push('Password must be greater than 5 characters and less than 15 characters')
    }
    
    // showing error message
    if (messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(', ')
    }
}

submit.addEventListener('click', errorMessage)