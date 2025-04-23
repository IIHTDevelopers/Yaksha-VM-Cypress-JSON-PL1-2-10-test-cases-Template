export default class DispensaryPage {
    constructor() {
        this.locators = {
            dispensaryLink: '',
            reportsTab: '',
            fromDate: '',
            userCollectionReport: '',
            showReportButton: '',
            exportButton: '',
        };
    }

    /**
     * @Test6
     * @description This method verifies the export functionality for the User Collection Report.
     * @expected The exported file should download with the name `PharmacyUserwiseCollectionReport_2025`.
     */
    verifyExportUserCollectionReport() {
        // Write your logic here
    }
}
