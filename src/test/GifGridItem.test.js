import { shallow } from 'enzyme';
import {GifGridItem} from '../components/GifGridItem';
import React from 'react';

describe('should show the <GifGridItem/> correctly', () => {

    const title = 'Hunter x Hunter';
    const url = 'http:localhost/hunterxhunter.gif';
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

    test('should show the <GifGridItem/> shanpshot Correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show the gif´s title', () => {
        const pTitle = wrapper.find('p').text();
        expect(pTitle).toBe(title);
    });

    test('should have a img and an alt properties', () => {
        const img = wrapper.find('img');
        const source = img.prop('src');
        const alt = img.prop('alt');

        expect(source).toBe(url);
        expect(alt).toBe(title);
    });

    test('should validate <div></div> constains the className = card animate__animated animate__fadeInLeft', () => {
        const div = wrapper.find('div');
        
        expect(div.hasClass('card')).toBe(true);
        expect(div.hasClass('animate__animated')).toBe(true);
        expect(div.hasClass('animate__fadeInLeft')).toBe(true);
    })
    
    
    

});
