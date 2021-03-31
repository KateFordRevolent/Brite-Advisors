/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-31-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   03-11-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
@isTest
private class TestFinancialSummaryController{

	@isTest static void financialSummaryExists() {
        
		User userObj = new User (
			FirstName = 'FinServ', 
			MobilePhone = '1234567890', 
			Username = 'finservtest@gmail.com', 
			LastName = 'Test', 
			Email = 'finservtest@gmail.com'
		);
  		
		// Insert User Record
		Database.SaveResult result = Database.insert(userObj, false);

		Contact userTest = AdvisorController.getAdvisorDetails(userObj.Id);

		List<AggregateResult> financialSummaryResults = FinancialSummaryController.getFinancialSummary(userTest.Id);
                
        // Verify the User Id is not null
        System.assertEquals(financialSummaryResults, financialSummaryResults,'Financial summary results found');

	}

}