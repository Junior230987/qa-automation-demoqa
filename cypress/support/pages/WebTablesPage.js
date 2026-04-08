import locators from '../locators/webTablesLocators'

class WebTablesPage {
  open() {
    cy.visit('/webtables')
    cy.removeAds()
  }

  clickAdd() {
    cy.get(locators.addButton).click()
  }

  createRecord(user) {
    cy.get(locators.firstName).type(user.firstName)
    cy.get(locators.lastName).type(user.lastName)
    cy.get(locators.email).type(user.email)
    cy.get(locators.age).type('30')
    cy.get(locators.salary).type('5000')
    cy.get(locators.department).type('QA')
    cy.get(locators.submitButton).click()
  }

  searchByName(name) {
    cy.get(locators.searchBox).clear().type(name)
  }

  validateRecord(name) {
    cy.get(locators.tableRows).should('contain', name)
  }
}

export default new WebTablesPage()