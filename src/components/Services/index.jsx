import React from 'react'
import './Services.css'
import Waves from '../../assets/waves.png'

const Services = () => {
	return (
		<div className='services-container'>
			<div className='services-top'>
				<div className='services-title'>
					<h1>Services</h1>
				</div>
			</div>
			<div className='services-bottom'>
				<div className='services-item'>
					<div className='icon'>
						<i className='fa fa-laptop-code'></i>
					</div>
					<div className='services-item-title'>
						<h3>Web Development</h3>
					</div>
					<div className='services-item-content'>
						<p>
							Turn and idea into reality, that's what I love to do. From a
							simple web, through a highly convertible landing page, all the way
							to an amazing SPA.
						</p>
					</div>
				</div>
				<div className='services-item'>
					<div className='icon'>
						<i className='fa fa-code'></i>
					</div>
					<div className='services-item-title'>
						<h3>Clean Code</h3>
					</div>
					<div className='services-item-content'>
						<p>
							A readable code is always twice better, allowing you to easily
							find errors and correct them in a short time. Clean code and good
							practices is a must.
						</p>
					</div>
				</div>
				<div className='services-item'>
					<div className='icon'>
						<i className='fa fa-mobile-alt'></i>
					</div>
					<div className='services-item-title'>
						<h3>Responsive Design</h3>
					</div>
					<div className='services-item-content'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum
							ipsa sunt tempora doloremque ex rem minus vel aliquid, commodi
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
