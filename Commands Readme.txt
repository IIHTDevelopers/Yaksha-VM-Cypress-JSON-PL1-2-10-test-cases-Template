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





























import loginData from '../../fixtures/ValidLogin.json';

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
}

export default LoginPage;
