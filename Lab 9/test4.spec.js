//Видалення товару з кошика
describe('Remove product from cart', () => {
  it('should remove a product from the cart', () => {
    cy.visit('https://automationexercise.com');
    
    cy.get('a[href="/products"]').click();
    cy.get('.productinfo').first().click();
    cy.get('button[type="button"]').contains('Add to cart').click();
    
    cy.get('.modal-footer a').contains('View Cart').click();
    cy.get('.cart_quantity_delete').first().click();

    cy.contains('Cart is empty!').should('be.visible');
  });
});
