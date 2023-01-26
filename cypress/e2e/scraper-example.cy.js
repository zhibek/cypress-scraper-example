describe('Scraper Example', () => {
  before(() => {
    cy.visit('https://getjsonip.com/');
  });

  it('Scrape Data', () => {
    const results = {};

    cy.get('#ip-data')
      .then($ipField => $ipField.text())
      .then(ip => results.ip = ip)
      .then(() => {
        cy.writeFile('data/results.json', results);
      });
  });
});
