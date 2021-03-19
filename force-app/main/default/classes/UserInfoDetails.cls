/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-18-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   02-19-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public WITH SHARING class UserInfoDetails {
    
    @AuraEnabled(cacheable=true)
    public static User getUserDetails(String recId) {

        // Client One user id for katedev '0058E000007k5QXQAY'
        // recId = '0058E000007k5QXQAY';

        return  [SELECT Id , Name, userType, Email, accountid, contactId
                FROM User
                WHERE Id =:recId
                WITH SECURITY_ENFORCED ];
    }
}