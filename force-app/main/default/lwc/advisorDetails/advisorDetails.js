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
    @track contact;
    @track emailBody;
    @track error;

    // Expose the static resource URL for use in the template
    advisorImageStaticUrl = advisorImageStaticUrl;

    // Expose URL of assets included inside an archive file
    advisorImagesUrl = advisorImagesUrl + '/advisorImages/AdvisorImagePending.png';
   
    contactObjForListener = getAdvisorDetails(userId);
    //console.log('contactObjForListener:', contactObjForListener);

    // TODO HTML remove when finished debugging email address
    //<lightning-input data-name="emailAddress" value={contact.Owner.Email}></lightning-input>

    console.log('in exp Id is ', Id);
    console.log('in exp userId  is ', userId);
    console.log('in exp advisorImagesUrl is ', advisorImagesUrl);
    console.log('in exp this.contactObjForListener is ', contactObjForListener);
    console.log('in exp advisorImageStaticUrl is ', advisorImageStaticUrl);
     console.log('in exp this.contact is ', contact);
    console.log('in exp emailBody is ', emailBody);
    console.log('in exp error is ', error);
  
    @wire(getAdvisorDetails, {recId: '$userId' }) wiredContact({ error, data})
    { 
        if (data)
        {
            console.log(data);
            this.contact = data;

            console.log('in wire Id is ', Id);
            console.log('in wire userId  is ', userId);
            console.log('in wire advisorImagesUrl is ', advisorImagesUrl);
            console.log('in wire this.contactObjForListener is ', contactObjForListener);
            console.log('in wire advisorImageStaticUrl is ', advisorImageStaticUrl);
            console.log('in wire this.contact is ', contact);
            console.log('in wire emailBody is ', emailBody);
            console.log('in wire error is ', error);

        }
        else if (error) 
        {
            this.error = error;
            console.log('in wire error Id is ', Id);
            console.log('in wire error userId  is ', userId);
            console.log('in wire error advisorImagesUrl is ', advisorImagesUrl);
            console.log('in wire error this.contactObjForListener is ', contactObjForListener);
            console.log('in wire error advisorImageStaticUrl is ', advisorImageStaticUrl);
            console.log('in wire error this.contact is ', contact);
            console.log('in wire error emailBody is ', emailBody);
            console.log('in wire error error is ', error);
            
        }
    }

        
    handleChange(event) {
        if (event.target.name === 'emailBody') {

            this.emailBody = event.target.value;

            //TODO remove when finished debuggin email address
            //this.emailAddress = this.template.querySelector("[data-name = 'emailAddress']").value;

            // console.log('in handlerchange Id is ', Id);
            // console.log('in handlerchange userId  is ', userId);
            // console.log('in handlerchange advisorImagesUrl is ', advisorImagesUrl);
            // console.log('in handlerchange this.contactObjForListener is ', contactObjForListener);
            // console.log('in handlerchange advisorImageStaticUrl is ', advisorImageStaticUrl);
            // console.log('in handlerchange this.contact is ', contact);
            // console.log('in handlerchange emailBody is ', emailBody);
            // console.log('in handlerchange error is ', error);
            
        }
    }
      
    sendEmailHandler(event) {
        // send mail
        sendEmail({ toAddress: 'briteadvisorsmvp@gmail.com', subject: 'Attention: Brite Advisor Client Portal Message!', body: this.emailBody});
        
        //console.log('in seh, this.contactObjForListener is',this.contactObjForListener);
        //console.log('in seh, this.contact is',this.contact);
        //console.log('in seh, emailBody is ',this.emailBody);
    }
}