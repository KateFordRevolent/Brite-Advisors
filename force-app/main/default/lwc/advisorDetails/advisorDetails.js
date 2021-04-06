import {LightningElement, wire, api, track} from 'lwc';
import advisorImagePendingUrl from '@salesforce/resourceUrl/AdvisorImagePending';
import advisorImagesUrl from '@salesforce/resourceUrl/advisorImages';
import Id from '@salesforce/user/Id';
import getAdvisorDetails from '@salesforce/apex/AdvisorController.getAdvisorDetails';
import sendEmail from '@salesforce/apex/EmailHandler.sendEmail';
export default class AdvisorDetails extends LightningElement 
{
    // Properties
    userId = Id;
    @track contact;
    @track emailBody;
    @track error;
  
    @track advisorImageDynamicUrl;
    @track advisorImageName;
   
    @wire(getAdvisorDetails, {recId: '$userId' }) wiredContact({ error, data})
    { 
        if (data)
        {
            console.log(data);
            this.contact = data;
            this.advisorImageName = this.contact.Owner.FirstName + this.contact.Owner.LastName;
            
            // Add a method to check to see if static resource of that name exists.
            // If not this.advisorImageName = 'advisorImagePending';
            // Test this with Michael Potts

            this.advisorImageDynamicUrl = advisorImagesUrl + '/' + this.advisorImageName + '.png';
            
            console.log('in wire this.contact is ', this.contact);
            console.log('in wire advisorImageName is ', this.advisorImageName);
            console.log('in wire advisorImageDynamicUrl is ', this.advisorImageDynamicUrl);

        }
        else if (error) 
        {
            console.log(error);
            this.error = error;
             
        }
    }

        
    handleChange(event) {
        if (event.target.name === 'emailBody') {

            this.emailBody = event.target.value;
            console.log ('in event this.emailBody is ', this.emailBody);
        }
    }
      
    sendEmailHandler(event) {
        console.log('in seh this...email address is ', this.contact.Owner.Email);
        console.log('in seh this...email body is ', this.emailBody);

        // send mail
        sendEmail({ toAddress: this.contact.Owner.Email, subject: 'Attention: Brite Advisor Client Portal Message!', body: this.emailBody});
        
    }
}