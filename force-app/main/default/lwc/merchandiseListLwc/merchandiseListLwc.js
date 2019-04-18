import { LightningElement, wire, track } from 'lwc';

export default class MerchandiseListLwc extends LightningElement {

    @track total;
    @track category;

    categoryChangeHandler(event) {
        this.category = event.detail.value;
    }
}
