/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-01-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   02-19-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public WITH SHARING class AdvisorController {
    @AuraEnabled(cacheable=true)
        public static User getAdvisorDetails(String recId) {
            String advisorName = 'Lyndsey Starkie';

            return  [Select Id, Name, FirstName, LastName, Email, MobilePhone, UserRole.Name
                    FROM User
                    WHERE Name = :advisorName
                    WITH SECURITY_ENFORCED ];
        }
    }