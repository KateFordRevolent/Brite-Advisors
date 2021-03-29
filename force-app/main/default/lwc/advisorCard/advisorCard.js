import {LightningElement, wire, api, track} from 'lwc';
import advisorImageStaticUrl from '@salesforce/resourceUrl/AdvisorImagePending';
import advisorImagesUrl from '@salesforce/resourceUrl/advisorImages';
import Id from '@salesforce/user/Id';
import getAdvisorDetails from '@salesforce/apex/AdvisorController.getAdvisorDetails';
import sendEmail from '@salesforce/apex/EmailHandler.sendEmail';

export default class AdvisorCard extends LightningElement 
{
    // Properties
    userId = '005050000014XTEAA2';
 
    // Expose the static resource URL for use in the template
    advisorImageStaticUrl = advisorImageStaticUrl;

    // Expose URL of assets included inside an archive file
    advisorImagesUrl = advisorImagesUrl + '/advisorImages/AdvisorImagePending.png';

    @track contact;
    @track error;

    @wire(getAdvisorDetails, {recId: '$userId',  }) wiredContact({ error, data})
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
    
}



