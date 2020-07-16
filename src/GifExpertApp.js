import React, { useState }from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategory = [] }) => {

    const [categories, setCategories] = useState(defaultCategory);   

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            <ol>
                {
                    categories.map((cat) => (
                        <GifGrid 
                            category = { cat } 
                            key= { cat }
                        />)
                    )
                }
            </ol>
        </>        
    );

};

export default GifExpertApp;