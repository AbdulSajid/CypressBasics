import{LoginPage} from "./pages/login_page"


const loginPage= new LoginPage()
describe('all test functions', ()=> {
it ('Login test 1',  () => {


cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-tab').click()
})

it ('Login test 2',  () => {


    cy.visit('https://opensource-demo.orangehrmlive.com/')
    
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()
    })
})