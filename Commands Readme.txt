Commands:
* Please change the path to Cypress folder using:
	cd Cypress

* Install all dependencies in the Cypress folder path using:
	npm install

* Run the following command to open the interactive Cypress Test Runner:
	npx cypress open

* Run the Tests in the Cypress folder path:
	npx cypress run


* Once you have executed the test cases. Now it is necessary to push your code to git. For this, please go inside the folder created on desktop with the email id you have used to login and then open git bash and execute below commands:

   - To add all files: git add .

   - To commit changes: git commit -m "<Your commit message>"

   - To push changes: git push





import loginData from '../../fixtures/loginData.json';
import invalidLoginData from '../../fixtures/invalidLogin.json';

class LoginPage {
  user = "//input[@id='username_id']";
  pass = "//input[@id='password']";
  signIn = "//button[@id='login']";
  errorMsg = "//div[contains(text(),'Invalid credentials !')]";
  admin = "(//a[@class='dropdown-toggle'])[3]";
  logout = "//a[text() = ' Log Out ']";

  /**
   * @Test0 This method logs in the user with valid credentials.
   *
   * @description This method performs the login operation using the provided valid credentials. It highlights the input
   *              fields for better visibility during interaction and fills the username and password fields. After submitting
   *              the login form by clicking the login button, it validates the success of the login process. The login is
   *              considered successful if there are no errors.
   */
  performLogin() {
    try {
      // Access login data from JSON
      const username = loginData.ValidLogin.ValidUserName;
      const password = loginData.ValidLogin.ValidPassword;

      // Fill username
      cy.xpath(this.user).clear().type(username);

      // Fill password
      cy.xpath(this.pass).clear().type(password);

      // Click sign-in button
      cy.xpath(this.signIn).click();

      // Verify successful login by checking if the 'admin' element is visible
      cy.xpath(this.admin).should('be.visible');
    } catch (e) {
      cy.log('Error during login:', e.message);
      throw e; // Rethrow the error for test failure
    }
  }







class LaboratoryPage {

  constructor() {
    this.laboratoryLinkXPath = '//a[@href="#/Lab"]';
    this.laboratoryDashboardXPath = '//a[@href="#/Lab/Dashboard"]';
    this.settingsSubModuleXPath = '(//a[@href="#/Lab/Settings"])[2]';
    this.addNewLabTestXPath = '//a[contains(text(),"Add New Lab Test")]';
    this.addButtonXPath = '//button[contains(text(),"Add")]';
    this.closeButtonXPath = '//button[contains(text(),"Close")]';
    this.starIconXPath = '//i[@title="Remember this Date"]';
  }

  laboratoryLink() {
    return cy.xpath(this.laboratoryLinkXPath);
  }

  laboratoryDashboard() {
    return cy.xpath(this.laboratoryDashboardXPath);
  }

  settingsSubModule() {
    return cy.xpath(this.settingsSubModuleXPath);
  }

  addNewLabTest() {
    return cy.xpath(this.addNewLabTestXPath);
  }

  addButton() {
    return cy.xpath(this.addButtonXPath);
  }

  closeButton() {
    return cy.xpath(this.closeButtonXPath);
  }

  starIcon() {
    return cy.xpath(this.starIconXPath);
  }

  getErrorMessageLocator(errorMessage) {
    return cy.xpath(
      `//p[contains(text(),"error")]/../p[contains(text(),"${errorMessage}")]`
    );
  }

  /**
   * @Test5
   * @Description This method verifies the error message when attempting to add a new lab test without entering required values.
   * Navigates to Laboratory > Settings, selects "Add New Lab Test," and clicks the Add button without providing any input.
   * Captures and returns the displayed error message.
   */
  verifyErrorMessage() {
    cy.xpath(this.laboratoryLinkXPath)
      .click()
      .then(() => {
        cy.xpath(this.settingsSubModuleXPath).click();
        cy.xpath(this.addNewLabTestXPath).click();
        cy.xpath(this.addButtonXPath).click();

        // Use the passed 'expectedErrorMessage' to validate the error message
        this.getErrorMessageLocator("Lab Test Code Required.")
          .should("be.visible")
          .invoke("text")
          .should("eq", "Lab Test Code Required."); // Compare with the text from Excel
      });
  }

  /**
   * @Test12 This method verifies the tooltip text of the star icon in the laboratory dashboard.
   * @description This function navigates to the laboratory page and dashboard, hovers over the star icon, and
   *              waits for the tooltip to appear. It verifies the visibility of the star icon and retrieves the tooltip
   *              text. 
   */
  verifyStarTooltip() {
    cy.xpath(this.laboratoryLinkXPath)
      .click()
      .then(() => {
        cy.xpath(this.starIconXPath)
          .trigger('mouseover') // Hover over the star icon
          .invoke('attr', 'title') // Get the 'title' attribute
          .should('exist') // Ensure the tooltip exists
          .and('eq', 'Remember this Date'); // Verify the tooltip text
      });
  }

}

export default LaboratoryPage;
