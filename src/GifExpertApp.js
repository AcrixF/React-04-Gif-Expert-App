import React, { useState }from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Breaking Bad', 'The Big Bang Theory', 'Young Sheldon'])

    // const handleAdd = () => {
    //     //setCategories([...categories, 'Malcom the Middle']);
    //     setCategories((cat) => ['Malcom The Middle', ...cat]);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory/>
            <hr/>
            
            <ol>
                {
                    categories.map((categorie) => <li key={categorie}>{categorie}</li>)
                }
            </ol>
        </>        
    );

};

export default GifExpertApp;