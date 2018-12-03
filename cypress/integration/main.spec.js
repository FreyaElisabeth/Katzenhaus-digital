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

  describe('Create new data set', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/dataSetCreation')
      cy.clearLocalStorage()
    })

    it('creates a new dataSet', () => {
      cy.get('[name=name]').type('Leo')
      cy.get('[name=id]').type('123_F_18')
      cy.get('[name=transponderNr]').type('276097200123123')
      cy.get('[name=adoptable]').check()
      cy.get('[name=house]').select('Neues Katzenhaus')
      cy.get('[name=room]').select('Spielzimmer')
      cy.get('[name=Anlegen]').click()
    })
  })
})
