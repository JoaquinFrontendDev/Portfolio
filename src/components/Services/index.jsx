import React, { useEffect } from 'react'
import './Services.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
	const { ref, inView } = useInView({ threshold: 0.2 })
	const animation = useAnimation()
	console.log(animation)
	useEffect(() => {
		if (inView) {
			animation.start({
				y: 0,
				opacity: 1,
			})
		} else {
			animation.start({ y: -250, opacity: 0, transition: { duration: 0.001 } })
		}
	}, [inView])
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
				<div className='techs-images' ref={ref}>
					<motion.img
						animate={animation}
						transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
						whileHover={{ scale: 1.25 }}
						align='center'
						alt='javascript'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
					/>
					<motion.img
						animate={animation}
						transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
						whileHover={{ scale: 1.25 }}
						align='center'
						alt='react'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
					/>
					<motion.img
						animate={animation}
						transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
						whileHover={{ scale: 1.25 }}
						align='center'
						alt='git'
						height='60'
						width='80'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
					/>
					<motion.img
						animate={animation}
						transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
						whileHover={{ scale: 1.25 }}
						align='center'
						alt='github'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
					/>
					<motion.img
						animate={animation}
						transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
						whileHover={{ scale: 1.25 }}
						align='center'
						alt='html'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
					/>
					<motion.img
						animate={animation}
						transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
						whileHover={{ scale: 1.25 }}
						align='center'
						alt='css'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
					/>
					<motion.img
						animate={animation}
						transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
						whileHover={{ scale: 1.25 }}
						align='center'
						alt='bootstrap'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
					/>

					<motion.img
						animate={animation}
						transition={{ delay: 0.9, type: 'spring', stiffness: 100 }}
						whileHover={{ scale: 1.25 }}
						align='center'
						alt='nodejs'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
					/>
					<motion.img
						animate={animation}
						transition={{ delay: 1, type: 'spring', stiffness: 100 }}
						whileHover={{ scale: 1.25 }}
						align='center'
						alt='express'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
					/>
					<motion.img
						animate={animation}
						transition={{ delay: 1.1, type: 'spring', stiffness: 100 }}
						whileHover={{ scale: 1.25 }}
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
