//Реєстрація нового користувача
describe('User Registration', () => {
  it('should register a new user', () => {
    cy.visit('https://automationexercise.com');
    
    cy.get('a[href="/signup"]').click();
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('button[type="submit"]').click();

    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="days"]').select('1');
    cy.get('input[name="months"]').select('January');
    cy.get('input[name="years"]').select('1990');
    cy.get('button[type="submit"]').click();

    cy.contains('Account Created!').should('be.visible');
  });
});
