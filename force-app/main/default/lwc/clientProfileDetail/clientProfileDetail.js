import {LightningElement, wire, api} from 'lwc';

import Id from '@salesforce/user/Id';

import getUserDetails from '@salesforce/apex/UserInfoDetails.getUserDetails';

// Import the current user's Image : AdvisorImage plus Name
import client_image_field from '@salesforce/resourceUrl/AdvisorImageLyndseyStarkie';

import name_field from '@salesforce/schema/contact.Name';
import email_field from '@salesforce/schema/contact.Email';
import phone_field from '@salesforce/schema/contact.Phone';
import mobile_field from '@salesforce/schema/contact.MobilePhone';
import home_phone_field from '@salesforce/schema/contact.HomePhone';
import mailing_address_field from '@salesforce/schema/contact.MailingAddress';
import national_insurance_number_field from '@salesforce/schema/contact.National_Insurance_Number__c';
import contact_preference_field from '@salesforce/schema/contact.FinServ__ContactPreference__c';

//Import the current user's Advisor Image : AdvisorImage plus Name
import clientImage from '@salesforce/resourceUrl/AdvisorImageLyndseyStarkie';
export default class editRecordForm extends LightningElement {

    //* PRIVATE PROPERTIES
    errors = [];
    userId = Id; // Stores the current user Id.
    contactId; // Stores the contact Id.
    fields = [name_field,mailing_address_field, email_field, phone_field, mobile_field, home_phone_field,national_insurance_number_field,contact_preference_field,client_image_field]; // The list of fields to display.

    // ! connectedCallback: This is called when the LWC is pushed into the DOM.
    connectedCallback() {
        this.userId = '0058E000007k5QXQAY';
        // Call the getUserDetails function.
        this.getUserDetails();
    }

    // Fetches the user details.
    getUserDetails() {
        // Get the financial summary for the current user.
        getUserDetails({ recId: this.userId})
        // If results are returned.
        .then((results) => {
            // Set the contact id.
            this.contactId = results.ContactId;
        })
        // If there is an error.
        .catch((error) => {
            console.log(JSON.stringify(error));
            this.errors = [error]
            console.log(this.errors);
        })
    }
}