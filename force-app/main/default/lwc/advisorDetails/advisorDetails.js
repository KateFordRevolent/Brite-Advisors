import {LightningElement, wire, api, track} from 'lwc';
import advisorImageStaticUrl from '@salesforce/resourceUrl/AdvisorImagePending';
import advisorImagesUrl from '@salesforce/resourceUrl/advisorImages';
import Id from '@salesforce/user/Id';
import getAdvisorDetails from '@salesforce/apex/AdvisorController.getAdvisorDetails';
import sendEmail from '@salesforce/apex/EmailHandler.sendEmail';
export default class AdvisorDetails extends LightningElement 
{
    // Properties
    userId = Id;

    // Expose the static resource URL for use in the template
    advisorImageStaticUrl = advisorImageStaticUrl;

    // Expose URL of assets included inside an archive file
    advisorImagesUrl = advisorImagesUrl + '/advisorImages/AdvisorImagePending.png';

    @track contact;
    @track error;
    @track contactName;
  
    @wire(getAdvisorDetails, {recId: '$userId' }) wiredContact({ error, data})
    { 
        if (data)
        {
            console.log(data);
            this.contact = data;
            this.contactName = data.Name; // not needed???

        }
        else if (error) 
        {
            this.error = error;
            console.log(this.error);
        }
    }

    //emailAddress; 
    //<lightning-input data-name="emailAddress" value={contact.Owner.Email}></lightning-input>
    
    @track emailBody;

    handleChange(event) {
        if (event.target.name === 'emailBody') {

            console.log('event target name', event.target.name);
            this.emailBody = event.target.value;

            //this.emailAddress = this.template.querySelector("[data-name = 'emailAddress']").value;
            
        }
    }
      
    sendEmailHandler(event) {
        // send mail
        sendEmail({ toAddress: 'briteadvisorsmvp@gmail.com', subject: 'Attention: Brite Advisor Client Portal Message!', body: this.emailBody});
        
        //console.log('emailAddress is',this.emailAddress);

        console.log('emailBody is ',this.emailBody);
    }
}