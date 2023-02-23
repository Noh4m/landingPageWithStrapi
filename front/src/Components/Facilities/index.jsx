import React from 'react';
import useFetch from '../../hooks/fetch'
import styles from './style.module.css'

function Facilities() {

	const url = 'http://localhost:1337'
	const {data} = useFetch('http://localhost:1337/api/home?populate[Facilities][populate]=%2A')

	return (
		<div className={styles.facilitiesContainer}>
			{data?.Facilities.map(faciliti => (
				<div key={faciliti.icon.data.id} className={styles.facilitiContent}>
					<img src={url+faciliti.icon.data.attributes.url} alt={faciliti.icon.data.attributes.alternativeText} />
					<p> {faciliti.text}</p>
				</div>
			))}
		</div>
	);
}

export default Facilities;