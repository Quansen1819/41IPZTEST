//додавання товару до кошика
describe('Add product to cart', () => {
  it('should add a product to the cart', () => {
    cy.visit('https://automationexercise.com');
    
    cy.get('a[href="/products"]').click();
    cy.get('.productinfo').first().click();
    cy.get('button[type="button"]').contains('Add to cart').click();
    
    cy.get('.modal-footer a').contains('View Cart').click();
    cy.get('.cart_description').should('contain', 'Product Name');
  });
});
