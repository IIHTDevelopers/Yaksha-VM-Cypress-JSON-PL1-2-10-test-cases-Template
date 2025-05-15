export default class DoctorPage {

  constructor() {
    this.doctor = {
      doctorLink: '',
      inPatientTab: '',
      searchBox: '',
      actionsPreviewIcon: '',
      patientNameHeading: '',
      notesSection: '',
      addNotesButton: '',
      templateDropdown: '',
      subjectiveNotesField: '',
      successConfirmationPopup: '',
      saveNotesButton: '',
    };
  }

  /**
   * @Test3
   * @description This method searches for a patient and verifies their overview page.
   * @param {string} patientName - Name of the patient to search.
   */
  verifyPatientOverview() {
    // Write your logic here
  }

  /**
   * @Test4
   * @description This method searches for a specific patient in the In Patient Department, navigates to the patient's
   *              overview page, and adds a Progress Note. The method ensures that the note is successfully added
   *              and verifies the confirmation message.
   * @expected
   * The method should successfully add a Progress Note for the patient, and a success confirmation message
   * with the text "Progress Note Template added." should be displayed.
   */
  addProgressNoteForPatient() {
    // Write your logic here
  }
}
