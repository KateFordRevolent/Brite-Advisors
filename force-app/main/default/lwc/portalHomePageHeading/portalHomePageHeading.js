import {LightningElement,wire,track} from 'lwc';
import getUserDetails from '@salesforce/apex/UserInfoDetails.getUserDetails';
import Id from '@salesforce/user/Id';
export default class Userinfoexample extends LightningElement
 {
    userId = Id;
    @track user;
    @track error;
    @wire(getUserDetails, {recId: '$userId' })

    wiredUser({ error, data}) { 
        if (data) {
            this.user = data;

        } else if (error) {

            this.error = error;
        }
    }
}