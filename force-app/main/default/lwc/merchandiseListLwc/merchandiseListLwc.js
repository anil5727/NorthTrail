import { LightningElement, wire, track } from 'lwc';
import getMerchandise from '@salesforce/apex/MerchandiseController.getMerchandise';

export default class MerchandiseListLwc extends LightningElement {

    @track total;
    @track category;
    @track merch;
    @track error;

    @wire(getMerchandise, {filters: '{"category":"", "searchKey":""}', pageSize: 5, pageNumber: 1})
    wiredGetMerch({error, data}) {
        if (data) {
            this.merch = data.items;
            this.total = data.total;
        } else if (error) {
            this.error = error;
        }
    }

    categoryChangeHandler(event) {
        this.category = event.detail.value;
    }

    searchChangeHandler(event) {
        console.log(event.detail.value);
    }
}
