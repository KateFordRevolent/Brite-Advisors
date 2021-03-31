import {LightningElement, wire, api} from 'lwc';

import Id from '@salesforce/user/Id';

import getUserDetails from '@salesforce/apex/UserInfoDetails.getUserDetails';

// Import the current user's Image : AdvisorImage plus Name
//import client_image_field from '@salesforce/resourceUrl/AdvisorImageLyndseyStarkie';

import name_field from '@salesforce/schema/contact.Name';
import email_field from '@salesforce/schema/contact.Email';
import phone_field from '@salesforce/schema/contact.Phone';
import mobile_field from '@salesforce/schema/contact.MobilePhone';
import risk_profile_field from '@salesforce/schema/contact.Risk_Profile__c';
import home_phone_field from '@salesforce/schema/contact.HomePhone';
import mailing_address_field from '@salesforce/schema/contact.MailingAddress';
import national_insurance_number_field from '@salesforce/schema/contact.UK_NI_Number__c';
import contact_preference_field from '@salesforce/schema/contact.FinServ__ContactPreference__c';

// Fields to add
//import birth_date_field from '@salesforce/schema/contact.Birthdate';
//import benaficiaries_field from '@salesforce/schema/contact.Benaficiaries';

export default class editRecordForm extends LightningElement {

    //* PRIVATE PROPERTIES
    errors = [];
    userId = Id; // Stores the current user Id.
    contactId; // Stores the contact Id.
    fields = [name_field,mailing_address_field, phone_field, mobile_field, email_field, national_insurance_number_field,contact_preference_field,risk_profile_field]; // The list of fields to display.

    // ! connectedCallback: This is called when the LWC is pushed into the DOM.
    connectedCallback() {
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