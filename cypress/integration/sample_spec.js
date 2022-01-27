describe('My First Test', () => {
  it('Visits Kanban board', () => {
    cy.visit('http://localhost:8000/')
    cy.contains('Done')
  })
})
