/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 04-06-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   02-19-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public WITHOUT SHARING class AdvisorController
{
 
    @AuraEnabled(cacheable=true)

    public static Contact getAdvisorDetails(String recId) 
    {

        User userObj = UserInfoDetails.getUserDetails(recId);

        return [SELECT  Id, Name, FirstName, LastName, Owner.FirstName, Owner.LastName, Owner.Name, Owner.Email, Owner.MobilePhone
                FROM    Contact
                WHERE   Id = :userObj.contactId
                WITH    SECURITY_ENFORCED ];
 
    }
} 


        


        