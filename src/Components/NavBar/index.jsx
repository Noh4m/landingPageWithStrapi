/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/fetch'
import { useMediaQuery } from 'react-responsive'
import './style.css'

function NavBar() {
	const {loding, error, data } = useFetch('http://localhost:1337/api/home?populate[Header][populate]=%2A&populate[ButtonIntro][populate]=%2A&populate[ButtonCta][populate]&populate[ImageHeroBanner][populate]')
	
	if (loding) return <p>loading...</p>
	if (error) return <p> Error</p>
	const isMobile = useMediaQuery({ minWidth: 900 })
	const [toggleMenu, setToggleMenu] = useState(false)
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {

		const changeWidth = () => {
			setWidth(window.innerWidth);

			if(window.innerWidth > 900){
				setToggleMenu(false)
			}
		}

		window.addEventListener('resize', changeWidth);

		return () => {
			window.removeEventListener('resize', changeWidth)
		};
	}, []);
	
	const isOpen = () => {
		setToggleMenu(!toggleMenu);
		console.log(toggleMenu);
	}


	return (
		<div className='containerNav'>
		<div className='navBar'>
			<img src={`http://localhost:1337`+data?.Header.Logo.data.attributes.url} 
			alt={data?.Header.Logo.data.attributes.name} />
			{isMobile || width > 900
			?
			(<>
				<nav className='links'>
				{data?.Header.links.map(link => (
					<a href={link.Link} key={link.id}>
						<span>{link.Title}</span>
					</a>
				))}
				</nav>

				<button className='btnBooking'><span> {data?.Header.buttonCta.Title}</span></button>
			</>)

			: 
			(<>
				<div onClick={isOpen} className="btnMenu"> <p>  {data?.Header.menu}  </p></div>

				{toggleMenu && (
					<div className='test'> 
						<nav className='linksMobile'>
							{data?.Header.links.map(link => (
							<a href={link.Link} key={link.id}>
								<span>{link.Title}</span>
							</a>
							))}
						</nav>
					</div>
				)
				
				}
			</>)
			}
			
		</div>
			<div className='navContainer'>
				<p className="title"> {data?.Header.Title} </p>
				<div className='bookServiceContainer'>
				{data?.Header.ServicesLink.map(service => (
                <a href={service.Link} key={service.id} className="bookService">
                    <span>{service.Title}</span>
                </a>
            ))}
				</div>
			</div>
		</div>
	);
}

export default NavBar;