import { LightningElement, track } from 'lwc';

export default class SearchBarLwc extends LightningElement {

    @track value;

    handleOnChange(event) {

        this.value = event.target.value;

        const ev = new CustomEvent('change', {
            detail: this.value
        });
        this.dispatchEvent(ev);
    }
}
