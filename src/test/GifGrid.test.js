import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../components/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';

jest.mock('../hooks/useFetchGifs')

describe('Testing the <GifGrid/> component', () => {

    
    const category = 'Hunter X Hunter';

    test('should show the <GifGrid/> Shapshot', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true  
        });

        let wrapper = shallow(<GifGrid category= {category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show the List of Item  when the useFetchGifs is done', () => {
        
        const gifs = [
            {
                id: 'ABC',
                url: 'localhost:8080/goku.gif',
                title: 'Dragon Ball'
            },
            {
                id: 'ABCD',
                url: 'localhost:8080/goku.gif',
                title: 'Dragon Ball Super'
            }
    
        ] 

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false  
        });

        const wrapper = shallow(<GifGrid category= {category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
    

});