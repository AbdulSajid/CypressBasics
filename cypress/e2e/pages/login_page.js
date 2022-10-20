export class LoginPage{

username_textbox=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
password_textbox=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
Login_button='.oxd-button'

    enterUsername(username){
        cy.get(this.username_textbox).type(username)
    
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)

    }

    clickLogin(){
        cy.get(this.Login_button).click()

    }

}