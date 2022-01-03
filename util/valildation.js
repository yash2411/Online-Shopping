function emailConfirmed(email, confirmEmail) {
    return email === confirmEmail
}

function isEmpty(value){
    return !value || value.trim() === ''
}

function userCredentialsAreValid(email, password){
    email && email.includes('@') && password && password.trim().length > 5
}

function userDetailsAreValid(email, password, name, street, postal, city) {
    return userCredentialsAreValid(email, password) &&
    !isEmpty(name) && 
    !isEmpty(street) &&
    !isEmpty(postal) &&
    !isEmpty(city)
}

module.exports = {
    userDetailsAreValid: userDetailsAreValid,
    emailConfirmed: emailConfirmed
}