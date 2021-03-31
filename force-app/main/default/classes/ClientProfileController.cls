/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-31-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   03-17-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public without sharing class ClientProfileController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getClientProfileDetails(ID recId) {
                
        User userObj = UserInfoDetails.getUserDetails(recId);
        Id contactId = userObj.contactId;
  
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
                    MailingStreet
            FROM 	Contact
            WHERE 	Id = :contactId
            WITH SECURITY_ENFORCED ];
   
    }
}
  
