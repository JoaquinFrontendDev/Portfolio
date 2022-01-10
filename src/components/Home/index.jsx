import React from 'react'
import './Home.css'
import './Navbar.css'
import Vector from '../../assets/images/laptop-vector.png'

const Home = () => {
	return (
		<>
			<nav className='navbar'>
				<ul className='nav-items'>
					<li>
						<a href='#home' className='nav-link'>
							Home
						</a>
					</li>
					<li>
						<a href='#services' className='nav-link'>
							Services
						</a>
					</li>
					<li>
						<a href='#work' className='nav-link'>
							My Work
						</a>
					</li>
					<li>
						<a href='#contact' className='nav-link'>
							Contact
						</a>
					</li>
				</ul>
			</nav>
			<div className='wrapper' id='home'>
				<div className='left-box'>
					<div className='left-wrapper'>
						<h2 className='wrapper-intro'>Hello there! 👋</h2>
						<h1 className='wrapper-presentation'>I am</h1>
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
						<div className='wrapper-description'>
							As a Front End Developer is crucial for me to create amazing user
							experiences and organic interfaces. <br />
							Using the last available technologies and tools. <br />
							My main goal is building high quality code with best practices
							every single time.
						</div>
						<button className='cta-btn'>Let's talk</button>
					</div>
				</div>
				<div className='right-box'>
					<div className='right-box-bg'></div>
					<img src={Vector} alt='vector' className='right-box-image' />
				</div>
			</div>
		</>
	)
}

export default Home
