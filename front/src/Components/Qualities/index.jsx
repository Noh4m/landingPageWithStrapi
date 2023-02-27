import React from 'react';
import useFetch from '../../hooks/fetch'
import styles from './style.module.css'
import { useMediaQuery } from 'react-responsive'
function Qualities() {
	const url = 'http://localhost:1337'
	const {data} = useFetch('http://localhost:1337/api/home?populate[Qualities][populate]=%2A')
	const isMobile = useMediaQuery({ maxWidth: 900 })
	return (
		<>
			<div className={styles.qualities}>
			
			{isMobile 
				?data?.Qualities.Quality.map((qual) =>
					<div className={styles.qualitiesContent}>
						<p className={styles.numberQuality}> <span>{qual.numberQuality}</span> </p>  
						<p className={styles.titleQuality}> {qual.titleQuality} </p>  
						<p className={styles.textQuality}> {qual.textQuality} </p>  
					</div>
					)
				
					:<div className={styles.containerQualities}>
						<div className={styles.qualitiesContent}>
						{data?.Qualities.Quality.map((qual, index) =>
							<div key={index}>
								<p className={styles.numberQuality}> <span>{qual.numberQuality}</span> </p>  
								<p className={styles.titleQuality}> {qual.titleQuality} </p>  
								<p className={styles.textQuality}> {qual.textQuality} </p>  
							</div>
							
								)}
								</div>
						<div className={styles.qualitiesContentImg}>
							{data?.Qualities.image.data.map((img, index) => 
							
								<figure key={index} className={img.attributes.caption}>
									<img src={url+img.attributes.url} alt="" />
								</figure>
							)}
							
						</div>
					</div> 
			}
			</div>
		</>
	);
}

export default Qualities;