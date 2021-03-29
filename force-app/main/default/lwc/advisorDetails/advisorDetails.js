import {LightningElement, wire, api, track} from 'lwc';

import Id from '@salesforce/user/Id';
import OwnerNameAccount from '@salesforce/schema/Account.Owner.Name';

import getAdvisorDetails from '@salesforce/apex/AdvisorController.getAdvisorDetails';

// Import the generic static resourcesource URL for use in the template
//advisorImageUrl = My_Resources + '/images/AndrewAnell
// We can build our specific to the static resource, dynamically.
//const AdvisorName = getAdvisorName();
//const resourcePath = `${briteLWCResources}_${AdvisorName}/sourc
//const containerEleme

// Import the current user's Advisor Image : Advisor's Name
//import briteResources from '@salesforce/resourceUrl/briteResources';

import advisorImage from '@salesforce/resourceUrl/LyndseyStarkie';

import advisorImage_AndrewAnello from '@salesforce/resourceUrl/AndrewAnello';
import advisorImage_GarethJones from '@salesforce/resourceUrl/GarethJones';
import advisorImage_EliZimmer from '@salesforce/resourceUrl/EliZimmer';
import advisorImage_JackLamb from '@salesforce/resourceUrl/JackLamb';
import advisorImage_LyndseyStarkie from '@salesforce/resourceUrl/LyndseyStarkie';
import AdvisorImage_Pending from '@salesforce/resourceUrl/AdvisorImagePending';

import sendEmail from '@salesforce/apex/EmailHandler.sendEmail';

// Send Advisor message via email when text input and submitted 
//import sendEmailToController from '@salesforce/apex/EmailController.sendEmailToController'
export default class AdvisorDetails extends LightningElement 
{
    // Properties
    userId = Id;
    userId = Id;

    // Expose the static resource URL for use in the template
    advisorImageUrl_AndrewAnello = advisorImage_AndrewAnello;
    advisorImageUrl_GarethJones = advisorImage_GarethJones;
    advisorImageUrl_JackLamb = advisorImage_JackLamb;
    advisorImageUrl_EliZimmer = advisorImage_EliZimmer;
    advisorImageUrl_LyndseyStarkie = advisorImage_LyndseyStarkie;
    advisorImageUrl_Pending = advisorImage_Pending;
    
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



