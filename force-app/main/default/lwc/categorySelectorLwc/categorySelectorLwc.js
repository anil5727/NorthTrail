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
}
