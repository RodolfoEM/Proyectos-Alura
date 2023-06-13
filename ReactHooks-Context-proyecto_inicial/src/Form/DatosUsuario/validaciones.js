export const validarEmail = (email) => {
    const length = email.length
    if(length > 8 && length < 50) {
        return true
    } else {
        return false
    }
}

export const validarPassword = (password) => {
    const length = password.length
    if(length > 8 && length < 50) {
        return true
    } else {
        return false
    }
}