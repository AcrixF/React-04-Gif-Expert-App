import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';
import React from 'react';

describe('Testing <GifExpertApp/> componenet', () => {
    
    test('should show <GigExpertApp/> ´s snapshot correctly ', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should ', () => {
        const categories = ['One punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategory= {categories}/>); 
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    

});
