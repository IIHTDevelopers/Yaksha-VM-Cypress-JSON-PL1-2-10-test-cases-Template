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






























export default class AdminPage {
    constructor() {
        this.admin = {
            adminDropdown: '//li[@class="dropdown dropdown-user"]',
            myProfileOption: 'a[routerlink="Employee/ProfileMain"]',
            userProfileHeader: 'a[routerlink="User Profile"]',
        };
    }

    /**
     * @Test7
     * @description This method verifies that the user is successfully navigated to the "User  Profile" page
     *              after selecting the "My Profile" option from the Admin dropdown.
     * @expected
     * Verify that the user is redirected to the "User  Profile" page and the page header or title confirms this.
     */
    verifyUserProfileNavigation() {
        // Click on Admin dropdown
        cy.xpath(this.admin.adminDropdown)
            .should("be.visible", { timeout: 20000 }) // Wait for element to be visible
            .then(() => {
                cy.wait(10000);
                cy.xpath(this.admin.adminDropdown).click();
            });

        // Select "My Profile" option
        cy.get(this.admin.myProfileOption).click();

        // Wait for User Profile page to load
        cy.get(this.admin.userProfileHeader)
            .should("be.visible")
            .then(() => {
                // Verify that the User Profile page is displayed
                cy.get(this.admin.userProfileHeader)
                    .invoke("text")
                    .then((headerText) => {
                        expect(headerText.trim()).to.equal("User  Profile"); // Update with the actual header text
                    });
            });
    }
}






import path from "path";

export default class PatientPage {
  constructor() {
    this.patient = {
      patientLink: 'a[href="#/Patient"]',
      registerPatient: 'ul.page-breadcrumb a[href="#/Patient/RegisterPatient"]',
      newPhotoButton: '//button[contains(text(),"New Photo")]',
      uploadButton: 'label[for="fileFromLocalDisk"]',
      doneButton: '//button[text()="Done"]',
      uploadedImg: 'div.wrapper img',
      profilePictureIcon: 'a[title="Profile Picture"]',
    };
  }

  /**
   * @Test8
   * @description This method verifies the successful upload of a profile picture for a patient by navigating to the "Register Patient" tab
   *              and completing the upload process.
   * @expected
   * Verify that the uploaded image is displayed successfully in the patient's profile.
   */
  uploadProfilePicture() {
    // const imagePath = path.join(__dirname, "../../e2e/TestImage/avatar.png");
    const imagePath = "C:/Users/LENOVO/Desktop/YAKSHA Projects/Cypress/1-Cypress-Javascript-PL 1/cypress/TestImage/avatar.png";
    cy.log(`Image path > ${imagePath}`);

    // Navigate to the Patient page
    cy.get(this.patient.patientLink).click();

    // Click on the "Register Patient" tab
    cy.get(this.patient.registerPatient).click();

    // Select the Profile Picture icon
    cy.get(this.patient.profilePictureIcon).click();

    // Click on "New Photo" button
    cy.xpath(this.patient.newPhotoButton).click();

    // Upload image
    cy.get(this.patient.uploadButton).selectFile(imagePath, { force: true });
    cy.wait(2000); // Wait for 2 seconds

    // Click on the "Done" button
    cy.xpath(this.patient.doneButton).click();

    // Verify success confirmation or image upload
    cy.get(this.patient.uploadedImg).should("be.visible");
  }
}





import data from "../../e2e/Data/PatientName.json";

export default class IncentivePage {
    constructor() {
        this.incentive = {
            incentiveLink: 'a[href="#/Incentive"]',
            settingsTab: 'ul[class="page-breadcrumb"] a[href="#/Incentive/Setting"]',
            searchBar: 'input#quickFilterInput',
            editTDSButton: 'a[danphe-grid-action="edit-tds"]',
            editTDSModal: 'div.modal[title="Edit TDS Percent"]',
            tdsInputField: 'input[type="number"]',
            updateTDSButton: 'button#btn_GroupDistribution',
            tdsValueInTable: 'div[col-id="TDSPercent"]',
        };
    }

    /**
     * @Test9
     * @description This method updates the TDS% for a specific employee and verifies the updated value in the table.
     * @expected
     * The updated TDS% value is displayed correctly in the corresponding row of the table.
     */

    editTDSForEmployee() {
        const patientName = data.PatientNames[2].Patient3 || "";
        const updatedTDS = Math.floor(Math.random() * 99);
        cy.log(`calculated tds > ${String(updatedTDS)}`);

        // Step 1: Click on the "Incentive" link
        cy.get(this.incentive.incentiveLink).click();

        // Step 2: Click on the "Settings" tab
        cy.get(this.incentive.settingsTab).click();

        // Step 3: Type the patient name in the search bar
        cy.get(this.incentive.searchBar).type(patientName, { delay: 100 });

        // Step 4: Locate the employee row and click "Edit TDS%"
        cy.get(this.incentive.editTDSButton).click();

        // Step 5: Update the TDS% value
        cy.get(this.incentive.tdsInputField).clear();
        cy.get(this.incentive.tdsInputField).type(String(updatedTDS));

        // Step 6: Click on "Update TDS" button
        cy.get(this.incentive.updateTDSButton).click();

        // Step 7: Clear and re-type the patient name in the search bar
        cy.get(this.incentive.searchBar).clear();
        cy.get(this.incentive.searchBar).type(patientName, { delay: 100 });
        cy.wait(2000); // Wait for 2 seconds

        // Step 8: Verify the updated TDS% value in the table
        cy.get(this.incentive.tdsValueInTable)
            .eq(1)
            .invoke("text")
            .then((displayedTDS) => {
                expect(displayedTDS.trim()).to.equal(String(updatedTDS));
            });
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

  /**
    * @Test15 Performs login with invalid credentials and validates error message.
    *
    * @description This method navigates to the login page, logs out if a session is active, and attempts to log in using 
    *              invalid credentials retrieved from the test data. After entering the invalid username and password, it 
    *              asserts that the appropriate error message is displayed, ensuring proper handling of invalid login attempts.
    * @returns {void} - This method does not return a value but performs assertions to validate the test.
    */
  performLoginWithInvalidCredentials() {
    const username = invalidLoginData.InvalidUserName;
    const password = invalidLoginData.InvalidPassword;

    cy.xpath(this.admin).should("be.visible").click();
    cy.xpath(this.logout).should("be.visible").click();

    // Fill username
    cy.xpath(this.user).clear().type(username);

    // Fill password
    cy.xpath(this.pass).clear().type(password);

    // Click sign-in button
    cy.xpath(this.signIn).click();

    cy.xpath(this.errorMsg).should("be.visible");
  }
}

export default LoginPage;
