import PracticeFormPage from '../../support/pages/PracticeFormPage'

describe('Practice Form - DemoQA', () => {
  let user

  beforeEach(() => {
    cy.fixture('user').then((data) => {
      user = data
    })
  })

  it('should submit the practice form successfully with valid data', () => {
    PracticeFormPage.open()
    PracticeFormPage.fillForm(user)
    PracticeFormPage.submit()
    PracticeFormPage.validateSubmission()

    cy.get('.table-responsive').should('contain', user.firstName)
    cy.get('.table-responsive').should('contain', user.lastName)
    cy.get('.table-responsive').should('contain', user.email)
    cy.get('.table-responsive').should('contain', user.mobile)
  })

  it('should NOT submit the form when required fields are missing', () => {
    PracticeFormPage.open()
    PracticeFormPage.submit()

    PracticeFormPage.validateRequiredFields()
    PracticeFormPage.validateModalIsNotDisplayed()
  })
})