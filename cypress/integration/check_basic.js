describe('Check Basic', function() {
    it('open top', function() {
        // open
        cy.visit(Cypress.env('CHECK_URL'))
        // check title
        cy.title().should(Cypress.env('CHECK_TITLE'))

        // wait for 3 sec
        cy.wait(3000)
        // check css element
        cy.get(Cypress.env('CHECK_CSS_ELEMENT')).should('exist')
    })
})