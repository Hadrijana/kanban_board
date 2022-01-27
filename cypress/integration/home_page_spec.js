const CardTests = () => {
  it('insert title', () => {
    cy.get('.task>[name="title"]').click().type(`Task 1`)
  })

  it('insert description', () => {
    cy.get('.task>[name="description"]')
      .click()
      .type(
        `Litwo! Ojczyzno moja! Ty jesteś jak zdrowie,
            Ile cię trzeba cenić, ten tylko się dowie, Kto cię stracił `
      )
  })

  it('add to description', () => {
    cy.get('.task>[name="description"]')
      .click()
      .type(
        `Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie Panno święta, 
            co Jasnej bronisz Częstochowy`
      )
  })

  it('change category to important', () => {
    cy.get('[id*="dropdown"]').click()
    cy.get('button[id*="important"]').click()
    cy.get('[id*="dropdown"]').click()
    cy.get('.task').should('have.css', 'background-color', 'rgb(155, 44, 83)')
  })

  it('change category to basic', () => {
    cy.get('[id*="dropdown"]').click()
    cy.get('button[id*="basic"]').click()
    cy.get('[id*="dropdown"]').click()
    cy.get('.task').should('have.css', 'background-color', 'rgb(64, 95, 181)')
  })

  //   it('change color', ()=>{
  //     cy.get('[id*="dropdown"]').click()
  //     cy.get('input[id*="basic"]')

  //   })
}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  // ////////////////////////////////////
  describe('multiple Cards', () => {
    it('add many cards', () => {
      for (let i = 0; i < 10; i++) {
        cy.get('[name=add]').click({ multiple: true })
      }
    })

    it('is there 10 cards in each column', () => {
      cy.get('[id="to-do-list"').children().should('have.length', 10)
      cy.get('[id="in-progress-list"').children().should('have.length', 10)
      cy.get('[id="done-list"').children().should('have.length', 10)
    })

    it('delete cards', () => {
      cy.get('[id*="delete"').click({ multiple: true })
      cy.get('.container').should('be.empty')
    })
  })
  //////////////////////////////////////////////////////////////
  describe('new card testing in in to do list ', () => {
    it('add new card in to do list', () => {
      cy.get('[id="to-do"] > >[name=add]').click()
    })

    it('do new task exist and in right column', () => {
      cy.get('[id="to-do-list"]>.task').should('exist')
      cy.get('[id="to-do-list"').children().should('have.length', 1)
      cy.get('[id="in-progress-list"]>.task').should('not.exist')
      cy.get('[id="done-list"]>.task').should('not.exist')
    })

    CardTests()

    it('delete card', () => {
      cy.get('[id*="delete"').click()
    })
  })
  ////////////////////////////////////////////////////////////////////////
  describe('new card testing in in progress', () => {
    it('add new card in in progress list', () => {
      cy.get('[id="in-progress"] > >[name=add]').click()
    })

    it('do new task exist and in right column', () => {
      cy.get('[id="to-do-list"]>.task').should('not.exist')

      cy.get('[id="in-progress-list"]>.task').should('exist')
      cy.get('[id="in-progress-list"]>.task').should('have.length', 1)
      cy.get('[id="done-list"]>.task').should('not.exist')
    })

    CardTests()

    it('delete card', () => {
      cy.get('[id*="delete"').click()
    })
  })
  ///////////////////////////////////////////////////////////////////////////
  describe('new card testing in done', () => {
    it('add new card in done list', () => {
      cy.get('[id="done"] > >[name=add]').click()
    })

    it('do new task exist and in right column', () => {
      cy.get('[id="to-do-list"]>.task').should('not.exist')

      cy.get('[id="in-progress-list"]>.task').should('not.exist')
      cy.get('[id="done-list"]>.task').should('exist')
      cy.get('[id="done-list"]>.task').should('have.length', 1)
    })

    CardTests()

    it('delete card', () => {
      cy.get('[id*="delete"').click()
    })
  })
  ///////////////////////////////////////////////////////////////////////////
})
