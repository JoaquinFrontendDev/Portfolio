import React from 'react'
import './Services.css'

const Services = () => {
	return (
		<div className='services-container' id='services'>
			<div className='services-top'>
				<div className='services-title'></div>
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
							Nowadays, statistically most modern websites and SPA are open on
							mobile devices. Isn't enough to look amazing, it needs to do it in
							multiple screens.
						</p>
					</div>
				</div>
				<div className='services-item'>
					<div className='icon'>
						<i className='fa fa-mobile-alt'></i>
					</div>
					<div className='services-item-title'>
						<h3>Accesibility</h3>
					</div>
					<div className='services-item-content'>
						<p>
							Amazing webs are for everyone. This days accessibility is more
							important than ever, it's a big mistake to overlook it. SEO takes
							accessibility very seriously.
						</p>
					</div>
				</div>
			</div>
			<div className='services-tech'>
				<div className='services-tech-title'></div>
				<div className='techs-images'>
					<img
						align='center'
						alt='javascript'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
					/>
					<img
						align='center'
						alt='git'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
					/>
					<img
						align='center'
						alt='git'
						height='60'
						width='80'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
					/>
					<img
						align='center'
						alt='github'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
					/>
					<img
						align='center'
						alt='html'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
					/>
					<img
						align='center'
						alt='css'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
					/>
					<img
						align='center'
						alt='bootstrap'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
					/>

					<img
						align='center'
						alt='nodejs'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
					/>
					<img
						align='center'
						alt='express'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
					/>
					<img
						align='center'
						alt='storybook'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg'
					/>
				</div>
			</div>
		</div>
	)
}

export default Services
