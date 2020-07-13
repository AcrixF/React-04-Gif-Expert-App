import React, { useState }from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Black List']);   

    // const handleAdd = () => {
    //     //setCategories([...categories, 'Malcom the Middle']);
    //     setCategories((cat) => ['Malcom The Middle', ...cat]);
    // }

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