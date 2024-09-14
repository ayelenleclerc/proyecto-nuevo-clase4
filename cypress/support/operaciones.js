import selectores from '../fixtures/selectores.js';


Cypress.Commands.add('login', () => {
    cy.get(selectores.login.username).type('Admin');
    cy.get(selectores.login.password).type('admin123');
    cy.get(selectores.login.boton_login).click();
})
