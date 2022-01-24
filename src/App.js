import React from 'react'
import Home from './components/Home'
import Services from './components/Services'
import Works from './components/Works'
import './App.css'
import Contact from './components/Contact'
import Toggle from './components/Toggle'
import { ThemeContext } from './context'
import { useContext } from 'react'

function App() {
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
	return (
		<div style={{ backgroundColor: darkMode && 'var(--color-black' }}>
			<Toggle />
			<Home />
			<Services />
			<Works />
			<Contact />
		</div>
	)
}
export default App
