import {LightningElement, wire, track} from 'lwc';

import getAdvisorDetails from '@salesforce/apex/AdvisorController.getAdvisorDetails';
import Id from '@salesforce/user/Id';

// Import the current user's Advisor Image : AdvisorImage plus Name
import advisorImage from '@salesforce/resourceUrl/AdvisorImageLyndseyStarkie';

// Send Advisor message via email when text input and submitted 
import sendEmailToController from '@salesforce/apex/EmailController.sendEmailToController'

export default class AdvisorDetails extends LightningElement 
{
    // Expose the static resource URL for use in the template
    advisorImageUrl = advisorImage;

    userId = Id;
    @track user;
    @track error;

    @wire(getAdvisorDetails, {recId: '$userId' })
   
    wiredUser({ error, data})
    { 
        if (data)
        {
            this.user = data;
            console.log(this.user);
        }
            else if (error) 
        {
            this.error = error;
            console.log(this.error);
        }
    }

    @track subject = 'Test Hardcoded Email'
    @track body = 'Hello Kate, testing the email button'
    @track toSend = 'kate@brite-advisors.com'

    @track outputText;
    updateText(event) {
        this.outputText = this.template.querySelector('lightning-input').value;
        console.log(this.outputText);
    }

    sendEmailAfterEvent(){
        const recordInput = {body: this.body, toSend: this.toSend, subject: this.subject}  //You can send parameters
        sendEmailToController(recordInput)
        .then( () => {
            //If response is ok
        }).catch( error => {
            //If there is an error on response
        })

    }

}