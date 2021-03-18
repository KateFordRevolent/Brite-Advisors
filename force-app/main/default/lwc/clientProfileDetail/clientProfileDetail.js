import {LightningElement, api} from 'lwc';

// * User Imports
import userId from '@salesforce/user/Id';

// * Apex Imports
import getClientProfileDetails from '@salesforce/apex/ClientProfileController.getClientProfileDetails';

// Import the current user's Advisor Image : AdvisorImage plus Name
import clientImage from '@salesforce/resourceUrl/AdvisorImageLyndseyStarkie';

export default class createRecordForm extends LightningElement {

    // * PRIVATE PROPERTIES
    errors = [];
    results =[];
    contactId;
    objectApiName;
    Name;
    MailingAddress;



    // ! connectedCallback: This is called when the LWC is pushed into the DOM.
    connectedCallback() {

    // Get the financial summary for the current user.
    getClientProfileDetails({ recId: userId})
        .then((results) => {
            this.results = results;
            console.log(this.results);
            console.log(results);
            this.contactId = results[0].id;
            this.Name = results[0].Name;
            this.MailingAddress = results[0].MailingAddress;
            
       
        })
        .catch((error) => {
        console.log(JSON.stringify(error));
        this.errors = [error]
        console.log(this.errors);
        console.log(errors);
        })
    }
}