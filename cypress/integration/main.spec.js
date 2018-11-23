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

    it('has a button with text Suchen', () => {
      cy.get('button').should('contain', 'Suchen')
    })
  })

  describe('Search for dataSet', () => {
    beforeEach(() => {
      cy.get('[name=name]').type('Elvis')
    })

    it('can search for dataSet', () => {
      cy.get('button').click()
      cy.get('[data-cy=CatCard]').should('have.length', 1)
    })
  })
})
