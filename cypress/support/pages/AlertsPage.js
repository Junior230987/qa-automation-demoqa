import locators from '../locators/alertsLocators'

class AlertsPage {
  open() {
    cy.visit('/alerts')
    cy.removeAds()
  }

  validateSimpleAlert() {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub')
    })

    cy.get(locators.seeAlertButton).click()
    cy.get('@alertStub').should('have.been.calledOnce')
  }

  validateConfirmAccept() {
    cy.on('window:confirm', () => true)
    cy.get(locators.confirmButton).click()
    cy.get(locators.confirmResult).should('contain', 'You selected Ok')
  }

  validatePrompt(text) {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(text)
    })

    cy.get(locators.promptButton).click()
    cy.get(locators.promptResult).should('contain', text)
  }
}

export default new AlertsPage()