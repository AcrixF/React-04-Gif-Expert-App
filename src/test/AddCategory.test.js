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
    });

    test('should show the component snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should simulate change the input', () => {
        const value = 'Hunter x Hunter';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });
    });

    test('should not submit the data', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and clean the input', () => {
        const value = 'Hunter X Hunter';

        // Simulate Change
        wrapper.find('input').simulate('change', { target: { value } });

        // Simulate Submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // Expect setCategories to be Called at lest one
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);

        // Expect the input Value be ''
        expect(wrapper.find('input').prop('value')).toBe('');
        
    });
    
        
});
