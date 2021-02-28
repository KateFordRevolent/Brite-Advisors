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
//TODO This needs modifying. 
public with sharing class FinancialSummaryController {
    @AuraEnabled(cacheable=true)
    public static List<AggregateResult> getFinancialSummary(ID recId) {
        return [SELECT Owner.Name,
        COUNT(Id) portfolioCount,
        SUM(transfer_valuation__c) transferValuationSum ,
        SUM(current_valuation__c) currentValuationSum
        FROM FinServ__FinancialAccount__c
        WHERE ownerid = :recId
        WITH SECURITY_ENFORCED
        GROUP BY Owner.Name
        ];
    }
}



