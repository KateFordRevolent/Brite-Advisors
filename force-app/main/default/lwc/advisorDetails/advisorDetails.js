import {LightningElement, wire, api, track} from 'lwc';
import advisorImageStaticUrl from '@salesforce/resourceUrl/AndrewAnello';
import advisorImagesUrl from '@salesforce/resourceUrl/advisorImages';
import Id from '@salesforce/user/Id';
import getAdvisorDetails from '@salesforce/apex/AdvisorController.getAdvisorDetails';
import sendEmail from '@salesforce/apex/EmailHandler.sendEmail';
export default class AdvisorDetails extends LightningElement 
{
    // Properties
    userId = '005050000014XSLAA2';

    // Expose the static resource URL for use in the template
    advisorImageStaticUrl = advisorImageStaticUrl;

    // Expose URL of assets included inside an archive file
    advisorImagesUrl = advisorImagesUrl + '/advisorImages/AndrewAnello.png';

    @track contact;
    @track error;
    @track contactName;
    @track advisorEmail;

    @wire(getAdvisorDetails, {recId: '$userId' }) wiredContact({ error, data})
    { 
        if (data)
        {
            console.log(data);
            this.contact = data;
            this.contactName = data.Name;
            this.advisorEmail = data.Owner.Email;
        }
        else if (error) 
        {
            this.error = error;
            console.log(this.error);
        }
    }

    @track emailAddress;
    @track emailSubject = 'Attention: Brite Advisor Client Portal!'; 
    @track emailBody;
    

    handleChange(event) {
        if (event.target.name === 'emailBody') {

            console.log('event target name', event.target.name);
            this.emailBody = event.target.value;
            this.emailAddress = this.template.querySelector("[data-name = 'emailAddress']").value;
            this.emailSubject = emailSubject;
        }
    }
      
    sendEmailHandler(event) {
        // send mail
        sendEmail({ toAddress: this.emailAddress, subject: this.emailSubject, body: this.emailBody});
        console.log('emailAddress is',this.emailAddress);
        console.log('emailSubject is ',this.emailSubject);
        console.log('emailBody is ',this.emailBody);
    }
}