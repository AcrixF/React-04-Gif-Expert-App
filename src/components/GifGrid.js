import React, { useState, useEffect} from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);

     useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=K18TQHOfMMrCINMhsYf6BKbgeq99KP0z&q=Rick and Morty&limit=10';
        const response = await fetch(url);
        const { data } = await response.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(data);

        setimages(gifs);
    }

    return(
    <>
        <h3>{ category }</h3>
         <div className="card-grid">
            {
                images.map((img) => 
                    <GifGridItem 
                        key={ img.id } 
                        {...img}
                    /> 
                )
            }
        </div>
    </>)
};

