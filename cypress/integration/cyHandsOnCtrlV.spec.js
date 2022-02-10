it('simulates sending a CTRL+V command to paste a long text on a textarea field', () => {
  const longText = Cypress._.repeat('0123456789', 20)

  cy.visit('./index.html')
  
  cy.get('textarea')
    .invoke('val', longText)
    .should('have.value', longText)
})
