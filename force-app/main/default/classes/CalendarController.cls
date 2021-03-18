/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 03-16-2021
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   02-19-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public WITH SHARING class CalendarController {
    @AuraEnabled(cacheable=true)
        public static List<Event> getCalendarDetails(String recId) {

        // Client One user id for katedev '0058E000007k5QXQAY'
        //recId = '0058E000007k5QXQAY';
            
            return  [SELECT Id, activityDate, Subject
                    FROM    Event
                    WHERE   OwnerId = :recId
                    WITH    SECURITY_ENFORCED ];
        }
    }