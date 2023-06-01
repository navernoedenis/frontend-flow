describe('test/sign-in', () => {
  beforeEach(() => {
    cy.signIn('denis', '12345');
  });

  it('sign-in success', () => {
    cy.getByTestId('auth-card').should('not.exist');
  });

  it('sign-out success', () => {
    cy.getByTestId('user-menu').click();
    cy.wait(500);
    cy.getByTestId('user-menu.logout').click();
    cy.getByTestId('user-menu').should('not.exist');
  });
});
