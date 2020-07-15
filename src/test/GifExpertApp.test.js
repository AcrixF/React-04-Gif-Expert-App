import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';
import React from 'react';

describe('Testing <GifExpertApp/> componenet', () => {
    
    test('should show <GigExpertApp/> component correctly ', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

});
