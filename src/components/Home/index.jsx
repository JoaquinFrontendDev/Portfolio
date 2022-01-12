import React, { useContext } from 'react'
import './Home.css'
import './Navbar.css'
import { Vector } from './Vector'
import { motion } from 'framer-motion'
import { ThemeContext } from '../../context'

const Home = () => {
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode

	return (
		<>
			<motion.nav
				className={darkMode ? 'navbar-darkmode' : 'navbar'}
				style={{ backgroundColor: darkMode && '#070707' }}>
				<ul className='nav-items'>
					<motion.li
						initial={{ y: -250, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, type: 'spring', stiffness: 50 }}>
						<a
							href='#home'
							className='nav-link'
							style={{ color: darkMode && '#fff' }}>
							Home
						</a>
					</motion.li>
					<motion.li
						initial={{ y: -250, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.6, type: 'spring', stiffness: 50 }}>
						<a
							href='#services'
							className='nav-link'
							style={{ color: darkMode && '#fff' }}>
							Services
						</a>
					</motion.li>
					<motion.li
						initial={{ y: -250, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.7, type: 'spring', stiffness: 50 }}>
						<a
							href='#work'
							className='nav-link'
							style={{ color: darkMode && '#fff' }}>
							My Work
						</a>
					</motion.li>
					<motion.li
						initial={{ y: -250, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.8, type: 'spring', stiffness: 50 }}>
						<a
							href='#contact'
							className='nav-link'
							style={{ color: darkMode && '#fff' }}>
							Contact
						</a>
					</motion.li>
				</ul>
			</motion.nav>
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
