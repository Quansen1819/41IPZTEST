//Логін з некоректними даними
describe('Login with invalid credentials', () => {
  it('should show error message', () => {
    cy.visit('https://automationexercise.com');
    
    cy.get('a[href="/login"]').click();
    cy.get('input[name="email"]').type('invaliduser@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
