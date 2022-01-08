import React from 'react'
import './Home.css'
import Vector from '../../assets/laptop-vector.png'

const Home = () => {
	return (
		<div className='wrapper'>
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
						My main goal is building high quality code with best practices every
						single time.
					</div>
					<button class='cta-btn'>Let's talk</button>
				</div>
			</div>
			<div className='right-box'>
				<div className='right-box-bg'></div>
				<img src={Vector} alt='vector' className='right-box-image' />
			</div>
		</div>
	)
}

export default Home
