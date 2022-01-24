import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from './context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MailSuccess from './components/MailSuccess'

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<Router>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/success' element={<MailSuccess />} />
				</Routes>
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
