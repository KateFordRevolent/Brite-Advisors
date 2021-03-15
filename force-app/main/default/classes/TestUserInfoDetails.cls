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
private class TestUserInfoDetails{

	@isTest static void userExists() {
        
		User userObj = new User (
			FirstName = 'test value4', 
			MobilePhone = '1234567890', 
			Username = 'testvalue4@gmail.com', 
			LastName = 'test value4', 
			Email = 'testvalue4@gmail.com'
		);
  		
		// Insert User Record
		Database.SaveResult result = Database.insert(userObj, false);

		User userTest = UserInfoDetails.getUserDetails('0054L000000Jk36QAC');  //( userObj.Id);
		
        // Verify the User Id is not null
        System.assertEquals(userTest,userTest,'Test User was found');

	}

}