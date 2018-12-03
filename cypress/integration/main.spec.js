describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Home Screen has all elements', () => {
    it('has the right title', () => {
      cy.title().should('equal', 'Katzenhaus digital')
    })

    describe('Search mask', () => {
      it('exists', () => {
        cy.get('[data-cy=SearchForm]').should('have.length', 1)
      })

      it('includes all required inputs', () => {
        cy.get('[name=name]').should('have.length', 1)
        cy.get('[name=id]').should('have.length', 1)
        cy.get('[name=transponderNr]').should('have.length', 1)
        cy.get('[name=house]').should('have.length', 1)
        cy.get('[name=room]').should('have.length', 1)
        cy.get('[name=kennel]').should('have.length', 1)
      })
    })
  })

  describe('Navigation', () => {
    it('navigates to data-set creation screen', () => {
      cy.get('[data-cy=navCreate]').click()
      cy.location().should(location => {
        expect(location.href).to.eq('http://localhost:3000/dataSetCreation')
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
    it('creates a new dataSet that can be found via Home screen', () => {
      cy.get('[data-cy=navCreate]').click()
      cy.get('[name=name]').type('Leo')
      cy.get('[name=id]').type('123_F_18')
      cy.get('[name=transponderNr]').type('276097200123123')
      cy.get('[name=adoptable]').check()
      cy.get('[name=house]').select('Neues Katzenhaus')
      cy.get('[name=room]').select('Spielzimmer')
      cy.get('[name=Anlegen]')
        .click()
        .should(() => {
          expect(
            JSON.parse(localStorage.getItem('Katzenhaus-digital'))[0].name
          ).to.contain('Leo')
        })
      cy.get('[data-cy=navHome]').click()
      cy.get('[name=name]').type('Leo')
      cy.get('[data-cy=CatCard]').should('contain', 'Leo')
    })
  })
})
