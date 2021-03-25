/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-25-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   02-19-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public WITH SHARING class AdvisorController {
    
    @AuraEnabled(cacheable=true)
        public static Contact getAdvisorDetails(String recId) 
        {
            // uatmvp Set to Individual Account Test Client for testing
            recId = '005050000014SNLAA2';
            User userObj = UserInfoDetails.getUserDetails(recId);

system.debug(recId);
system.debug(userObj);

            return [SELECT  Id, FirstName, LastName, ownerId, Name, owner.Name
                    FROM    contact
                    WHERE   Id = :userObj.contactId
                    WITH    SECURITY_ENFORCED ];

        }
    }