// for best practices visit:
// https://docs.cypress.io/guides/references/best-practices

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.get('[data-cy="landing-page-button-login"]').should('be.visible')
    cy.get('[data-cy="landing-page-button-login"]').click()
    cy.url().should('include', '/login')
    cy.get('[data-cy="login-page-button-sign-in"]').should('be.visible')
    cy.get('[data-cy="login-page-button-sign-in"]').click()
    cy.url().should('eq', 'http://localhost:4200/#/overview')
  })
})
