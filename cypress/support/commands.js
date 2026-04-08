Cypress.Commands.add('acceptIfVisible', (selector) => {
  cy.get('body').then(($body) => {
    if ($body.find(selector).length > 0) {
      cy.get(selector).click({ force: true })
    }
  })
})

Cypress.Commands.add('removeAds', () => {
  cy.get('body').then(($body) => {
    const fixedBanners = $body.find('#fixedban')
    const footerAds = $body.find('footer')

    if (fixedBanners.length > 0) {
      cy.get('#fixedban').invoke('remove')
    }

    if (footerAds.length > 0) {
      cy.get('footer').invoke('remove')
    }
  })
})