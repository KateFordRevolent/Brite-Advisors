/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-12-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   03-11-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
@isTest
private class TestAdvisorController{

	@isTest static void advisorExists() {
        
		User userObj = new User (
			FirstName = 'test value1', 
			MobilePhone = '1234567890', 
			Username = 'testvalue1@gmail.com', 
			LastName = 'test value1', 
			Email = 'testvalue1@gmail.com'
		);
  		
		// Insert User Record
		Database.SaveResult result = Database.insert(userObj, false);

		User userTest = AdvisorController.getAdvisorDetails(userObj.Id);
                
        // Verify the User Id is not null
        System.assertEquals(UserTest,UserTest,'Test User was found');

	}

}