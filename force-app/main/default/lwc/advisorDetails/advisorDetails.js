import {LightningElement, wire, api, track} from 'lwc';

import Id from '@salesforce/user/Id';

import getAdvisorDetails from '@salesforce/apex/AdvisorController.getAdvisorDetails';

// Import the current user's Advisor Image : Advisor's Name
// Imported all images until work out a better way to do this.
import My_Resources from '@salesforce/resourceUrl/AndrewAnello';
//import GarethJones from '@salesforce/resourceUrl/GarethJones';
//import JackLamb from '@salesforce/resourceUrl/JackLamb';
//import My_Resources from '@salesforce/resourceUrl/LyndseyStarkie';
//import advisorImagePending from '@salesforce/resourceUrl/AdvisorImagePending';

import sendEmail from '@salesforce/apex/EmailHandler.sendEmail';

// Send Advisor message via email when text input and submitted 
//import sendEmailToController from '@salesforce/apex/EmailController.sendEmailToController'

export default class AdvisorDetails extends LightningElement 
{
    // Properties
    userId = Id;
    userId = Id;

    // Expose the static resource URL for use in the template
    // TODO remove hardcoded images
    advisorImageUrl = My_Resources + '/images/AndrewAnello.jpg';
    
    @track contact;
    @track error;

    @wire(getAdvisorDetails, {recId: '$userId' })
    wiredContact({ error, data})
    { 
        if (data)
        {
            console.log(data);
            this.contact = data;

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



