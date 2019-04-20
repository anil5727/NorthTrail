import { LightningElement, track, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import OBJECT from '@salesforce/schema/Merchandise__c';
import FIELD from '@salesforce/schema/Merchandise__c.Category__c';

export default class CategorySelectorLwc extends LightningElement {

    @track value;

    // Access the Merchanise__c object, which contains information about record types
    @wire(getObjectInfo, { objectApiName: OBJECT })
    objectInfo;

    // Use the default record type's Id from objectInfo to pass into the standard get picklist api call
    @wire(getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: FIELD })
    categories;

    // Fire custom change handler so parent can handle new value
    handleChange(event) {

        console.log('handleChange: ');

        const sel = this.template.querySelector('.mySelect');
        console.log('sel');
        console.log(JSON.stringify(sel));

        console.log('JSON.stringify(event.detail)');
        console.log(JSON.stringify(event.detail));
        this.value = event.detail.value;
        const ev = new CustomEvent('change', {
            detail: this.value
        });
        this.dispatchEvent(ev);
    }

    // Fire custom change handler so parent can handle new value
    handleSelectChange() {

        console.log('handleSelectChange: ');

        const sel = this.template.querySelector('.slds-select');
        console.log('sel');
        console.log(JSON.stringify(sel));

        const opts = this.template.querySelectorAll('option');
        console.log('opts');
        console.log(JSON.stringify(opts));

        //console.log('JSON.stringify(event.detail)');
        //console.log(JSON.stringify(event.detail));
        this.value = event.detail.value;
        const ev = new CustomEvent('change', {
            detail: this.value
        });
        this.dispatchEvent(ev);
    }
}
