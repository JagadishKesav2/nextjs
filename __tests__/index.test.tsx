import React from 'react';
import { shallow } from 'enzyme';
import Index from '../pages/index';

describe("Test case for index.js", () => {
    test("check Next.js 100 is exists", () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find('div').text()).toEqual('Next.js 100');
    })
})