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

    it('does renders', () => {

        const element = createElement('c-category-selector-lwc', {
            is: categorySelectorLwc
        });
        document.body.appendChild(element);

        getObjectInfoAdapter.emit(mockGetObjectInfo);
        getPicklistValuesAdapter.emit(mockGetPicklistValues);

        return Promise.resolve().then(() => {
        });
    });
});
