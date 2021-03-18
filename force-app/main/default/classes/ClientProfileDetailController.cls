/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-17-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   03-17-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public with sharing class ClientProfileDetailController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getClientProfileDetails(ID recId) {

        // Client One user id for katedev '0058E000007k5QXQAY'
        //recId = '0058E000007k5QXQAY';
        
        User userObj = UserInfoDetails.getUserDetails(recId);
        Id accountId = userObj.accountId;

        return
        [   SELECT Id,
                    Name, 
                    Email,
                    Phone,
                    HomePhone,
                    MobilePhone,
                    MailingAddress,
                    MailingPostalCode,
                    MailingCountry,
                    MailingState,
                    MailingCity,
                    MailingStreet,
                    FinServ__SourceSystemId__c,
                    FinServ__LastFourDigitSSN__c,
                    National_Insurance_Number__c,
                    FinServ__ContactPreference__c
            FROM 	Contact
            WHERE 	accountId = :accountId
            WITH SECURITY_ENFORCED ];
   
    }
}
  