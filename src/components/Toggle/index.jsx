import React, { useContext } from 'react'
import Sun from '../../assets/images/sun.png'
import Moon from '../../assets/images/moon.png'
import './Toggle.css'
import { ThemeContext } from '../../context'
import { motion } from 'framer-motion'

const Toggle = () => {
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
	const handleClick = () => {
		theme.dispatch({ type: 'TOGGLE' })
	}
	return (
		<div className='toggle-wrapper'>
			<img src={Sun} alt='sun' className='toggle-icon' />
			<img src={Moon} alt='moon' className='toggle-icon' />
			<motion.div
				className='toggle-button'
				onClick={handleClick}
				style={{ left: theme.state.darkMode ? 0 : 25 }}
				layout
				transition={spring}></motion.div>
		</div>
	)
}

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
	delay: 0.2,
	duration: 0.1,
}

export default Toggle
