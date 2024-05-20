//Пошук товару
describe('Search for a product', () => {
  it('should display search results', () => {
    cy.visit('https://automationexercise.com');
    
    cy.get('input[name="search"]').type('T-shirt');
    cy.get('button[type="submit"]').click();

    cy.contains('Search Results').should('be.visible');
    cy.get('.productinfo').should('contain', 'T-shirt');
  });
});
