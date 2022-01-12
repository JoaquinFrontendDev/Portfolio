import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const INITIAL_STATE = { darkMode: true, isOpen: false }

const themeReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE':
			return { ...state, darkMode: !state.darkMode }
		case 'OPEN':
			return { ...state, isOpen: !state.isOpen }
		default:
			return state
	}
}

export const ThemeProvider = (props) => {
	const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ThemeContext.Provider>
	)
}
