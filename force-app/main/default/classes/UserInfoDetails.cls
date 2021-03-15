/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-12-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   02-19-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public WITH SHARING class UserInfoDetails {
    
    @AuraEnabled(cacheable=true)
    public static User getUserDetails(String recId) {

        return  [SELECT Id , Name, userType, Email, accountid, contactId
                FROM User
                WHERE Id =:recId
                WITH SECURITY_ENFORCED ];
    }
}