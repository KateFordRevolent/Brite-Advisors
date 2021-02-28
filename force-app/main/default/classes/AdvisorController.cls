/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-28-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   02-20-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/

public with sharing class AdvisorController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAdvisorDetails(ID recId) {
        return [SELECT  owner.name,
                        owner.email,
                        owner.mobilephone
               FROM Account WHERE OwnerId = :recId
               WITH SECURITY_ENFORCED
        ];
    }
}



