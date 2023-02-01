describe('first test', { testIsolation: false }, () => {
  it('Render', () => {
    cy.visit('localhost:3000');
  });

  it ('entered to do 1', () => {
    cy.get('[data-cy="test-link"]')
      .should('have.value','Learn React 2')
  });

  it ('entered to do 2', () => {
    cy.get('[data-cy="test-link"]')
      .should('have.value','Learn React 1')
  });
})