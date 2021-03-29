/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-29-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author Kate Ford                     Modification Soql Query
 * 1.0   10-03-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
//When able to get values in the financial summary fields in accounts and add a new summary field.   
public with sharing class FinancialSummaryController {
    @AuraEnabled(cacheable=true)
    public static List<AggregateResult> getFinancialSummary(ID recId) {

        //recId = '005050000014XTEAA2';
        
        User userObj = UserInfoDetails.getUserDetails(recId);
        Id accountId = userObj.accountId;

        return
        [   SELECT FinServ__PrimaryOwner__c,
                    COUNT(Id) portfolioCount,
                    SUM(transfer_valuation__c) transferValuationSum ,
                    SUM(current_valuation__c) currentValuationSum
            FROM FinServ__FinancialAccount__c
            WHERE FinServ__PrimaryOwner__c = :accountId
            WITH SECURITY_ENFORCED
            GROUP BY FinServ__PrimaryOwner__c
        ];

        // Formula fields unpredictable ... TODO
        // [   SELECT  id,
        //             name,
        //             FinServ__TotalNumberOfFinAccounts__c,
        //             FinServ__TotalFinancialAccounts__c
        //     FROM    account
        //     WHERE  Id = :accountId
        //     WITH SECURITY_ENFORCED
        // ];
    }
}

// Formula fields
//FinServ__TotalNumberOfFinAccounts__c,
//FinServ__TotalFinancialAccounts__c

