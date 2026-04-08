class HomePage {
  visit() {
    cy.visit('/')
    cy.removeAds()
  }

  openForms() {
    cy.contains('.card-body', 'Forms').click()
  }

  openElements() {
    cy.contains('.card-body', 'Elements').click()
  }

  openAlertsFrameWindows() {
    cy.contains('.card-body', 'Alerts, Frame & Windows').click()
  }
}

export default new HomePage()