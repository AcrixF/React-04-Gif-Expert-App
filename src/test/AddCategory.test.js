import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('should show the <AddCategory/> component', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories ={ setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories ={ setCategories } />);
    })    


    test('should show the component snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should simulate change the input', () => {
        const value = 'Hunter x Hunter';
        const input = wrapper.find('input');
        input.simulate('change', { target: value });
    });

    test('should not submit the data', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });
        
});
