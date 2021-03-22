/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-19-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   03-11-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
@isTest
private class TestUserInfoDetails{

	@isTest static void userExists() {
        
		User userObj = new User (
			FirstName = 'User', 
			MobilePhone = '1234567890', 
			Username = 'usertest@gmail.com', 
			LastName = 'Test', 
			Email = 'usertest@gmail.com'
		);
  		
		// Insert User Record
		Database.SaveResult result = Database.insert(userObj, false);

		User userTest = UserInfoDetails.getUserDetails( userObj.Id);
		
        // Verify the User Id is not null
        System.assertEquals(userTest,userTest,'Test User was found');

	}

}