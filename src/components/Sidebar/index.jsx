import React from 'react'
import { ThemeContext } from '../../context'
import { useContext } from 'react'
import './Sidebar.css'
import { motion } from 'framer-motion'

const Sidebar = () => {
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
	const isOpen = theme.state.isOpen
	const handleOpen = () => {
		theme.dispatch({ type: 'OPEN' })
	}
	return (
		<div
			className={
				darkMode ? 'navbar-container sidebar-darkmode' : 'navbar-container'
			}>
			<nav>
				<button className='burger-button' onClick={handleOpen}>
					<div
						className={isOpen ? 'burger-line open-burger' : 'burger-line'}
						style={{ backgroundColor: darkMode && 'var(--bg-color)' }}></div>
					<div
						className={isOpen ? 'burger-line open-burger' : 'burger-line'}
						style={{ backgroundColor: darkMode && 'var(--bg-color)' }}></div>
					<div
						className={isOpen ? 'burger-line open-burger' : 'burger-line'}
						style={{ backgroundColor: darkMode && 'var(--bg-color)' }}></div>
				</button>
				<div className={isOpen ? 'burger-nav open-nav' : 'burger-nav'}>
					<a href='#home' onClick={handleOpen}>
						<span role='img' aria-label='home'>
							🏠
						</span>
						Home
					</a>
					<a href='#services' onClick={handleOpen}>
						<span role='img' aria-label='Services'>
							💻
						</span>
						Services
					</a>
					<a href='#work' onClick={handleOpen}>
						<span role='img' aria-label='my work'>
							💼
						</span>
						My Work
					</a>
					<a href='#contact' onClick={handleOpen}>
						<span role='img' aria-label='contact'>
							✉️
						</span>
						Contact
					</a>
				</div>
			</nav>
		</div>
	)
}

export default Sidebar
