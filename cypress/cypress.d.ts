declare namespace Cypress {
  interface Chainable {
    getByTestId(value: string): Chainable<JQuery<HTMLElement>>;
    signIn(username: string, password: string): Chainable<JQuery<HTMLElement>>;
  }
}
