import {
    LightningElement,
    wire,
    track
} from 'lwc';
import getFinancialSummary from '@salesforce/apex/FinancialSummaryController.getFinancialSummary';
import Id from '@salesforce/user/Id';


export default class FinancialSummary extends LightningElement {
    userId = Id;

    // * PRIVATE PROPERTIES
    errors = [];
    results =[];
    portfolioCount;
    transferValuationSum;
    currentValuationSum;
    performanceInCurrency;
    performanceInPercent;

    @track errors;
    @track results;

    @wire(getFinancialSummary, {
        recId: '$userId'
    })

    wiredResults({
        errors,
        results
    }) {
        if (results) {
            this.results = results;
            this.portfolioCount = results[0].portfolioCount;
            this.transferValuationSum = results[0].transferValuationSum.toFixed(0);
            this.currentValuationSum = results[0].currentValuationSum.toFixed(0);
            this.performanceInCurrency = (this.currentValuationSum - this.transferValuationSum).toString().replace(".00","");
            this.performanceInPercent = (((this.performanceInCurrency/this.transferValuationSum) * 100).toFixed(2).toString() + "%");

        } else if (errors) {

            this.errors= errors;

        }
    }
}

