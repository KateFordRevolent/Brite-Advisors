/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-23-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   02-20-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
//TODO This needs modifying. 
public with sharing class FinancialSummaryController {
    @AuraEnabled(cacheable=true)
    public static List<AggregateResult> getFinancialSummary(ID recId) {
        return [
            // Total number of finanial accounts
            SELECT FinServ__TotalNumberOfFinAccounts__c
             

            // Sum of Transfer Valuations
            SELECT FinServ__

            // Sum of Current currentValuationSum

            // FROM Account
            // WHERE Account.Id = Contact.AccountId
            // AND  Contact__r.UserId = :recId
            // WITH SECURITY_ENFORCED
            // GROUP BY User__r.

            SELECT transfer_valuation__c
            FROM FinServ__FinancialAccount__c
            WHERE FinServ__PrimaryOwner__C = Contact__r.AccountId
            AND Contact_r.UserId_c = :recId
            
        ];
    }
}



