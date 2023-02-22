import React from 'react';
import useFetch from '../../hooks/fetch'
import styles from './style.module.css'

function Callout() {

	const {data} = useFetch('http://localhost:1337/api/home?populate[Callout][populate]=%2A')

	return (
		<div className={styles.callout}>
			<h2> {data?.Callout.title} <span> {data?.Callout.titleColorPart} </span> </h2>
			<p> {data?.Callout.text} </p>
		</div>
	);
}

export default Callout;