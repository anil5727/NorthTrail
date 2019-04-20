import { createElement } from 'lwc';
import categorySelectorLwc from 'c/categorySelectorLwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { CurrentPageReference } from 'lightning/navigation';
import {
    registerLdsTestWireAdapter,
    registerTestWireAdapter
} from '@salesforce/lwc-jest';

const mockGetPicklistValues = require('./data/getPicklistValues.json');
const mockGetObjectInfo = require('./data/getObjectInfo.json');

const getPicklistValuesAdapter = registerLdsTestWireAdapter(getPicklistValues);
const getObjectInfoAdapter = registerLdsTestWireAdapter(getObjectInfo);

registerTestWireAdapter(CurrentPageReference);

describe('c-category-selector-lwc', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('does not render', () => {

        const element = createElement('c-category-selector-lwc', {
            is: categorySelectorLwc
        });
        document.body.appendChild(element);

        getObjectInfoAdapter.emit(mockGetObjectInfo);
        getPicklistValuesAdapter.emit(mockGetPicklistValues);

        return Promise.resolve().then(() => {

            // Select combobox for simulating user input
            const comboboxEl = element.shadowRoot.querySelector('lightning-combobox');
            console.log(JSON.stringify(comboboxEl));
            comboboxEl.value = 'Womens';
            //comboboxEl.dispatchEvent(new CustomEvent('change', {detail: 'Womens'}));

            // const comboboxEls = element.shadowRoot.querySelectorAll('option');
            // console.log('select options');
            // console.log(JSON.stringify(comboboxEls));

            // const cats = element.shadowRoot.querySelectorAll('p');
            // expect(cats.length).toBe(mockGetPicklistValues.values.length);

            const combo = element.shadowRoot.querySelector('lightning-combobox');
            console.log('combo');
            console.log(JSON.stringify(combo));
            console.log(JSON.stringify(combo.shadowRoot));
            expect(combo).not.toBeNull();

            // const combo2 = element.shadowRoot.querySelector('lightning-combobox lightning-combobox-item');
            // console.log('combo2');
            // console.log(JSON.stringify(combo2));

            // const sel = element.shadowRoot.querySelector('.slds-select');
            // console.log('sel');
            // console.log(JSON.stringify(sel));

            // const comboitems = combo.querySelectorAll('lightning-combobox');
            // console.log('comboitems');
            // console.log(JSON.stringify(comboitems));

            // const options = combo.shadowRoot.querySelectorAll('lightning-combobox');
            // console.log('options');
            // console.log(JSON.stringify(options));

            // const options2 = combo.shadowRoot.querySelectorAll('option');
            // console.log('options2');
            // console.log(JSON.stringify(options2));

            // expect(handler).toHaveBeenCalled();
        });

    });
});
