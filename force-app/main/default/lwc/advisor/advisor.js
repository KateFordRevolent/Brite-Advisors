import {LightningElement} from 'lwc';

// * User Imports
import userId from '@salesforce/user/Id';

// * Apex Imports
import getAdvisorDetails from '@salesforce/apex/AdvisorController.getAdvisorDetails';

export default class Advisor extends LightningElement {

    // * PRIVATE PROPERTIES
    errors = [];
    results =[];
    name;
    email;
    mobilephone;
    

    // ! connectedCallback: This is called when the LWC is pushed into the DOM.
    connectedCallback() {
        // Get the advisor details for the current user.
        getAdvisorDetails({ recId: userId})
        .then((results) => {
            this.results = results;
            this.name = results[0].name;
            this.email = results[0].email;
            this.mobilephone = results[0].mobilephone;
            console.log(this.results);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            this.errors = [error]
        })
    }

}