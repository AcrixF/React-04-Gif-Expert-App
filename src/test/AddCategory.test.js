import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('should show the <AddCategory/> component', () => {

    const setCategories = () => {};
   
    test('should show the component snapshot', () => {
        const wrapper = shallow(<AddCategory setCategories ={ setCategories } />);
        expect(wrapper).toMatchSnapshot();
    });
    
    
});
