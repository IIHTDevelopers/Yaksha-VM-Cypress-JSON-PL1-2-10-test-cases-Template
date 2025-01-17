export default class UtilitiesPage {

  constructor() {
    this.utilities = {
      utilitiesLink: "",
      schemeRefundTab: '',
      counterItem: "",
      newSchemenRefundEntryButton: "",
      saveSchemeRefundButton: "",
      warningPopup: "",
    };
  }

  /**
   * @Test6
   * @description This method verifies that a warning popup is displayed when attempting to save a new
   *              Scheme Refund Entry without filling in mandatory fields.
   * @expected
   * A warning popup should appear with the message: "Please fill all the mandatory fields."
   */
  verifyMandatoryFieldsWarning() {
    // Write your logic here
  }
}