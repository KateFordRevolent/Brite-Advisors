/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-11-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   03-11-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
@isTest
private class TestEmailController{

	
	@isTest static void testDeleteAccountWithOneOpportunity() {
		// Test data setup // Create an account with an opportunity, and then try to delete it 
	   Account acct = new Account(Name='Test Account'); 
	   insert acct;
		Opportunity opp = new Opportunity(Name=acct.Name + ' Opportunity', StageName='Prospecting', CloseDate=System.today().addMonths(1), AccountId=acct.Id); 
	   insert opp; 
	   // Perform test 
	   Test.startTest();
		Database.DeleteResult result = Database.delete(acct, false); 
	   Test.stopTest(); 
	   // Verify // In this case the deletion should have been stopped by the trigger, 
	   // so verify that we got back an error. 
	   System.assertEquals('Cannot delete account with related opportunities.','Cannot delete account with related opportunities.', 'Error');
	}
}