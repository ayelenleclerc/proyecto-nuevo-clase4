
class selectores {

    login = {
        username: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        password: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
        boton_login: '.oxd-button'
    }
    
}

module.exports = new selectores()