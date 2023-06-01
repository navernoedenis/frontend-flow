import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getByTestId', (value) => {
  let testId = '';

  for (const val of value) {
    const isDotSymbol = val === '.';
    testId += isDotSymbol ? '\\.' : val;
  }

  return cy.get(`[data-testid=${testId}]`);
});

Cypress.Commands.add('signIn', (username, password) => {
  cy.visit('/');
  cy.getByTestId('header.sign-in-button').click();

  cy.wait(300);
  cy.getByTestId('auth-card.name-field').type(username);
  cy.getByTestId('auth-card.password-field').type(password);

  cy.wait(300);
  cy.getByTestId('auth-card.submit-button').click();
});
