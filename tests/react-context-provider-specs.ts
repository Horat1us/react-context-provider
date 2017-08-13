import * as React from 'react';

import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import {wrapContext} from '../src';
import {ContextReceiver} from "./components/ContextReceiver";

describe("React Context Provider Factory", () => {
    it('should create component class provide context to composed component', () => {
        const ReactContextProvider = wrapContext(ContextReceiver);
        const wrapper = mount(React.createElement(ReactContextProvider, {
            context: {
                text: "Sample Test"
            }
        }));
        expect(wrapper.html()).to.contain("Sample Test");
    });
});