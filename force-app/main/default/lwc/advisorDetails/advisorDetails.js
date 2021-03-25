import sendEmail from '@salesforce/apex/EmailHandler.sendEmail';
import getAdvisorDetails from '@salesforce/apex/AdvisorController.getAdvisorDetails';
import Id from '@salesforce/user/Id';

// Import the current user's Advisor Image : AdvisorImage plus Name
import advisorImage from '@salesforce/resourceUrl/AdvisorImageLyndseyStarkie';

import {LightningElement, wire, api, track} from 'lwc';

// Send Advisor message via email when text input and submitted 
//import sendEmailToController from '@salesforce/apex/EmailController.sendEmailToController'
export default class AdvisorDetails extends LightningElement 
{
    // Expose the static resource URL for use in the template
    advisorImageUrl = advisorImage;

    userId = Id;
    @track contact;
    @track error;

    @wire(getAdvisorDetails, {recId: '$userId' })
   
    wiredContact({ error, data})
    { 
        if (data)
        {
            this.contact = data;
            console.log(this.contact);
        }
            else if (error) 
        {
            this.error = error;
            console.log(this.error);
        }
    }

    @track email = 'kate@brite-advisors.com';
 
    handleChange(event) {
        if (event.target.name === 'kate@brite-adivsors.com') {
            this.email = event.target.value;
        }
    }
    
    sendEmailHandler(event) {
        // send mail
        console.log("Sending email to", this.email);
        sendEmail({ toAddress: this.email, subject: "Subject goes here", body: "Message goes here ...!"});
    }


    // @track subject = 'Test Hardcoded Email'
    // @track body = 'Hello Kate, testing the email button'
    // @track toSend = 'kate@brite-advisors.com'

    // @track outputText;
    // updateText(event) {
    //     this.outputText = this.template.querySelector('lightning-input').value;
    //     console.log(this.outputText);
    // }

    // sendEmailAfterEvent(){
    //     const recordInput = {body: this.body, toSend: this.toSend, subject: this.subject}  //You can send parameters
    //     sendEmailToController(recordInput)
    //     .then( () => {
    //         //If response is ok
    //     }).catch( error => {
    //         //If there is an error on response
    //     })

    // }

}



