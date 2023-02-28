// import useFetch from './hooks/fetch'
import Callout from './Components/Callout';
import Facilities from './Components/Facilities';
import ImageHeroBanner from './Components/ImageHeroBanner';
import NavBar from './Components/NavBar'
import Qualities from './Components/Qualities';
import './style.css'

function App() {
	// const {loding, error, data } = useFetch('http://localhost:1337/api/home?populate[Header][populate]=%2A&populate[ButtonIntro][populate]=%2A&populate[ButtonCta][populate]&populate[ImageHeroBanner][populate]')

	// if (loding) return <p>loading...</p>
	// if (error) return <p> Error</p>
	return (
		<div id='test'>
			<section id='nav'>
				<NavBar />
				</section>
			<ImageHeroBanner />
			<section id='Facilities'>
				<Facilities />
			</section>
			<section id='Callout'>
				<Callout url="Callout"/>
			</section>
			<section id='Qualities'>
				<Qualities />
			</section>
		</div>
	);
}

export default App;
