import {LightningElement} from 'lwc';

// * User Imports
import userId from '@salesforce/user/Id';

// * Apex Imports
import getFinancialSummary from '@salesforce/apex/FinancialSummaryController.getFinancialSummary';

export default class FinancialSummary extends LightningElement {

    // * PRIVATE PROPERTIES
    errors = [];
    results =[];
    portfolioCount;
    transferValuationSum;
    currentValuationSum;
    performanceInCurrency;
    performanceInPercent;

    // ! connectedCallback: This is called when the LWC is pushed into the DOM.
    connectedCallback() {
        // Get the financial summary for the current user.
        getFinancialSummary({ recId: userId})
        .then((results) => {
            this.results = results;
            this.portfolioCount = results[0].portfolioCount;
            this.transferValuationSum = results[0].transferValuationSum;
            this.currentValuationSum = results[0].currentValuationSum;
            this.performanceInCurrency = (this.currentValuationSum - this.transferValuationSum);
            this.performanceInPercent = (((this.performanceInCurrency/this.transferValuationSum) * 100).toFixed(2).toString() + "%");
            console.log(this.results);
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            this.errors = [error]
        })
    }

}