import React from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../../context'
import { useContext } from 'react'
import './Navbar.css'

const Navbar = () => {
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
	return (
		<motion.nav
			className={darkMode ? 'navbar-darkmode' : 'navbar'}
			style={{ backgroundColor: darkMode && 'var(--color-black' }}>
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
	)
}

export default Navbar
