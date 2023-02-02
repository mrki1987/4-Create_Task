/// <reference types="Cypress"

describe('4 create test', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('[type="search"]').click().type('Pears')
    cy.wait(3000);
    for (let n = 1; n < 5; n++) {
      cy.contains('ADD TO CART', { timeout: 6000 }).click()
    }
    cy.get('[type="search"]').clear().type('Tomato')
    cy.wait(3000)
    cy.contains('ADD TO CART').click()
    cy.get('[type="search"]').clear().type('Corn')
    cy.wait(3000)
    cy.contains('ADD TO CART').click()
    cy.get('[type="search"]').clear().type('Banana')
    cy.wait(3000)
    cy.contains('ADD TO CART').click()
    cy.get('.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get('.promoCode').type('412')
    cy.get('.promoBtn').click()
    cy.wait(7000)
    cy.get('.promoInfo').contains('Invalid code ..!').should('be.visible')
    cy.contains('Place Order').click()
    cy.contains('Select').should('be.disabled')
    cy.get('select').select('Aruba')
    cy.get('.chkAgree').click()
    cy.contains('Proceed').click()
    cy.wait(10000)


    // Cypress does not support multiple tab in browser
    // and I try with new command cy.origin but from some reason does not working
    // I have image that's status 200 ok, but I don't see in UI changes 
    // I tried in Chrome and Mozilla both 
    // As I see the rest of task I think that should not be a problem
    cy.origin("www.webdriveruniversity.com/", () => {
      //cy.contains('ACTIONS').scrollIntoView()
    });

  })
})