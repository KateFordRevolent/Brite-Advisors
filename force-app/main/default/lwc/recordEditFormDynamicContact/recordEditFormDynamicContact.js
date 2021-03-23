import { LightningElement, api} from 'lwc';
export default class RecordEditFormEditExampleLWC extends LightningElement {
    @api recordId;

        handleSubmit(event) {

        event.event.preventDefault();
        const inputFields = event.detail.fields;
        
        if (inputFields) {
            inputFields.forEach(field => {
                console.log('Field is ==> ' + field.fieldName);
                console.log('Field is ==> ' + field.value);
                console.log('Record Id is ==> ' + recordId);
            });
        }
        this.template.querySelector('lightning-record-edit-form').submit(inputFields);

    }


    handleSuccess(event) {
        console.log(recordId);
        console.log('onsuccess event recordEditForm', event.detail.id);
    }
}