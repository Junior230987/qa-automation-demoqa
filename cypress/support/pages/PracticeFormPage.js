import locators from '../locators/practiceFormLocators'

class PracticeFormPage {
  open() {
    cy.visit('/automation-practice-form')
    cy.removeAds()
  }

  fillForm(user) {
    cy.get(locators.firstName).type(user.firstName)
    cy.get(locators.lastName).type(user.lastName)
    cy.get(locators.email).type(user.email)

    if (user.gender === 'Male') {
      cy.get(locators.genderMale).click({ force: true })
    } else if (user.gender === 'Female') {
      cy.get(locators.genderFemale).click({ force: true })
    } else {
      cy.get(locators.genderOther).click({ force: true })
    }

    cy.get(locators.mobile).type(user.mobile)
    cy.get(locators.mobile).should('have.value', user.mobile)

    cy.get(locators.currentAddress).type(user.currentAddress)

    cy.get(locators.state).click({ force: true })
    cy.get(locators.stateInput).type(`${user.state}{enter}`, { force: true })

    cy.get(locators.city).click({ force: true })
    cy.get(locators.cityInput).type(`${user.city}{enter}`, { force: true })
  }

  submit() {
    cy.get(locators.submitButton).click({ force: true })
  }

  validateSubmission() {
    cy.get(locators.modalTitle)
      .should('be.visible')
      .and('contain', 'Thanks for submitting the form')

    cy.get(locators.resultTable).should('be.visible')
  }

  validateModalIsNotDisplayed() {
    cy.get(locators.modalTitle).should('not.exist')
  }

  validateRequiredFields() {
    cy.get(locators.firstName)
      .should('have.css', 'border-color', 'rgb(220, 53, 69)')

    cy.get(locators.lastName)
      .should('have.css', 'border-color', 'rgb(220, 53, 69)')

    cy.get(locators.mobile)
      .should('have.css', 'border-color', 'rgb(220, 53, 69)')
  }
}

export default new PracticeFormPage()