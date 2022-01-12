import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { Vector } from './Vector'
import { ThemeContext } from '../../context'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const Home = () => {
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
	const [width, setWidth] = useState(window.innerWidth)
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
	}, [])
	return (
		<>
			{width < 700 ? <Sidebar /> : <Navbar />}

			<div className='wrapper' id='home'>
				<div className='left-box'>
					<div className='left-wrapper'>
						<h2 className='wrapper-intro' style={{ color: darkMode && '#fff' }}>
							Hello there! 👋
						</h2>
						<h1
							className='wrapper-presentation'
							style={{ color: darkMode && '#fff' }}>
							I am
						</h1>
						<div className='left-wrapper-title'>
							<div className='wrapper-name'>
								<div className='wrapper-name-item'>
									<span className='name-item-1'>Joaquin Retola</span>
								</div>
								<div className='wrapper-name-item'>
									<span className='name-item-2'>Frontend Developer</span>
								</div>
							</div>
						</div>
						<div
							className='wrapper-description'
							style={{ color: darkMode && '#fff' }}>
							As a Front End Developer is crucial for me to create amazing user
							experiences and organic interfaces. <br />
							Using the last available technologies and tools. <br />
							My main goal is building high quality code with best practices
							every single time.
						</div>
						<a href='#contact'>
							<button className='cta-btn'>Let's talk</button>
						</a>
					</div>
				</div>
				<div className='right-box'>{Vector}</div>
			</div>
		</>
	)
}

export default Home
