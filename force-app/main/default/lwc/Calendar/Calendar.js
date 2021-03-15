import {LightningElement, wire, track, api} from 'lwc';

import getCalendarDetails from '@salesforce/apex/CalendarController.getCalendarDetails';
import Id from '@salesforce/user/Id';

export default class CalendarDetails extends LightningElement 
{

    userId = Id;
    @track event;
    @track error;

    @wire(getCalendarDetails, {recId: '$userId' })
   
    wiredUser({ error, data})
    { 
        if (data)
        {
            this.event = data;
        }
            else if (error) 
        {
            this.error = error;
        }
    } 

}