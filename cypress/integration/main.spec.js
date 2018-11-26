describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  describe('Home Screen has all elements', () => {
    it('has the right title', () => {
      cy.title().should('equal', 'Katzenhaus digital')
    })

    describe('labelled Input', () => {
      beforeEach(() => {
        cy.get('[for=name]').as('label')
      })

      it('exists', () => {
        cy.get('@label').should('have.length', 1)
      })

      it('includes name input', () => {
        cy.get('@label').find('[name=name]')
      })
    })
  })

  describe('Search for dataSet while typing, case insensitive', () => {
    beforeEach(() => {
      cy.get('[name=name]').type('elv')
    })

    it('shows the required dataSet', () => {
      cy.get('[data-cy=CatCard]').should('contain', 'Elvis')
    })
  })
})
