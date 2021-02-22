/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-19-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   02-19-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public WITH SHARING class UserInfoDetails {
    @AuraEnabled(cacheable=true)
        public static User getUserDetails(String recId) {
            return  [Select Id , Name, userType, Email from User where Id =:recId WITH SECURITY_ENFORCED ];
        }
    }