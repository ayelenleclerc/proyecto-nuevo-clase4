import 'cypress-real-events'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://institutoweb.com.ar/ejemplo1/index.html')
    cy.get('#navbarLightDropdownMenuLink').realHover()
    cy.get('.navbar-nav > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').realClick();
    cy.get('#navbarLightDropdownMenuLink').realHover()
    cy.get('.navbar-nav > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').realClick();

  })
 
})
