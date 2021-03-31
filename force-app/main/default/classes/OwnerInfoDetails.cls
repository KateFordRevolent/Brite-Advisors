/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-31-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   03-25-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public without sharing class OwnerInfoDetails {
  
    @AuraEnabled(cacheable=true)
        public static Account getOwnerDetails(String recId) 
        {

            return  [SELECT ownerId
                    FROM    Account
                    WHERE   Id = :recId
                    WITH SECURITY_ENFORCED
                    LIMIT 1];
        }
    }
