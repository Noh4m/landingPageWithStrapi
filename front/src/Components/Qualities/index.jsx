import React from 'react';
import useFetch from '../../hooks/fetch'
import styles from './style.module.css'
function Qualities() {
    const {data} = useFetch('http://localhost:1337/api/home?populate[Qualities][populate]=%2A')
    return (
        <>
            <div className={styles.qualities}>
                {data?.Qualities.Quality.map((qual) => 
                <div>
                    <p className={styles.numberQuality}> <span>{qual.numberQuality}</span> </p>  
                    <p className={styles.titleQuality}> {qual.titleQuality} </p>  
                    <p className={styles.textQuality}> {qual.textQuality} </p>  
                </div>
    
                )}

            </div>
        </>
    );
}

export default Qualities;