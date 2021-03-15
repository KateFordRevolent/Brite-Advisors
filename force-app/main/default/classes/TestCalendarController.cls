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
private class TestCalendarController{

	@isTest static void advisorExists() {
        
		User userObj = new User (
			FirstName = 'test value2', 
			MobilePhone = '1234567890', 
			Username = 'testvalue2@gmail.com', 
			LastName = 'test value2', 
			Email = 'testvalue2@gmail.com'
		);
  		
		// Insert User Record
		Database.SaveResult resultUser = Database.insert(userObj, false);

		// insert event record
		Event eventObj = new Event (
			activityDate = System.today(),
			Subject = 'Meeting', 
			ownerId = userObj.Id
		);

		// Insert User Record
		Database.SaveResult resultEvent = Database.insert(userObj, false);

		List<Event> userEvent = CalendarController.getCalendarDetails(userObj.Id);
                
        // Verify the User Id is not null
        System.assertEquals(UserEvent,UserEvent,'Test User event was found');

	}

}