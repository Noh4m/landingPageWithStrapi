import React from 'react';
import useFetch from '../../hooks/fetch'
import './style.css'


function ImageHeroBanner() {
    const url = 'http://localhost:1337'
    const {data } = useFetch('http://localhost:1337/api/home?populate[Header][populate]=%2A')
	
    return (
        <div>
            <figure className='imgContainer'>
                <img src={url+data?.Header.ImageHeroBanner.data.attributes.url} alt={data?.Header.ImageHeroBanner.data.attributes.alternativeText} />
            </figure>
        </div>
    );
}

export default ImageHeroBanner;