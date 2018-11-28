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

  describe('Search for dataSet ...', () => {
    describe('... while typing any part of name, case insensitive', () => {
      beforeEach(() => {
        cy.get('[name=name]').type('elv')
      })

      it('shows the required dataSet', () => {
        cy.get('[data-cy=CatCard]').should('contain', 'Elvis')
      })
    })

    describe('... while typing any part of id, case insensitive', () => {
      beforeEach(() => {
        cy.get('[name=id]').type('849')
      })

      it('shows the required dataSet', () => {
        cy.get('[data-cy=CatCard]').should('contain', 'Sir Maunzelot')
      })
    })

    describe('... while typing any part of transponder nr.', () => {
      beforeEach(() => {
        cy.get('[name=transponderNr]').type('868')
      })

      it('shows the required dataSet', () => {
        cy.get('[data-cy=CatCard]').should('contain', 'Nimue')
      })
    })

    describe('... by choosing a house from dropdown selection', () => {
      beforeEach(() => {
        cy.get('[name=house]').select('Altes Katzenhaus')
      })

      it('shows the required dataSet', () => {
        cy.get('[data-cy=CatCard]').should('contain', 'Elvis')
      })
    })

    describe('... by choosing a room from dropdown selection', () => {
      beforeEach(() => {
        cy.get('[name=room]').select('6')
      })

      it('shows the required dataSet', () => {
        cy.get('[data-cy=CatCard]').should('contain', 'Elvis')
      })
    })

    describe('... by choosing a kennel from dropdown selection', () => {
      beforeEach(() => {
        cy.get('[name=kennel]').select('7')
      })

      it('shows the required dataSet', () => {
        cy.get('[data-cy=CatCard]').should('contain', 'Nimue')
      })
    })
  })
})
