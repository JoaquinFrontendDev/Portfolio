import React, { useContext, useEffect, useState } from 'react'
import './MailSuccess.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeContext } from '../../context'
import Confetti from 'react-confetti'
const Mailbox = require('../../assets/images/mailbox.png')

const MailSuccess = () => {
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
	const mailSuccessTitle = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: '-100%' },
	}
	const mailSuccessParagraph = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: '100%' },
	}
	const mailSuccessImg = {
		visible: { opacity: 1, scale: 1.2 },
		hidden: { opacity: 0 },
	}

	const [seconds, setSeconds] = useState(10)
	const navigate = useNavigate()
	const redirect = () => {
		if (seconds > 0) {
			for (let i = seconds; i >= 0; i--)
				setTimeout(() => {
					setSeconds(seconds - 1)
				}, 1000)
		}
		if (seconds === 0) navigate('/')
	}
	redirect()
	return (
		<>
			<Confetti
				width={window.clientWidth}
				height={window.clientHeight}
				numberOfPieces={300}
			/>
			<div
				className='mail-success-container'
				style={{
					backgroundColor: darkMode ? 'var(--color-black)' : 'var(--bg-color)',
				}}>
				<div
					className='mail-success-text'
					style={{
						color: darkMode ? 'var(--bg-color)' : 'var(--color-black)',
					}}>
					<motion.h1
						initial='hidden'
						animate='visible'
						variants={mailSuccessTitle}
						transition={{ duration: 1 }}>
						Email has been sent successfully
					</motion.h1>
				</div>
				<div className='mail-success-img'>
					<motion.img
						src={Mailbox}
						alt='mailbox'
						initial='hidden'
						animate='visible'
						exit={{ scale: 0 }}
						variants={mailSuccessImg}
						transition={{ duration: 1 }}
					/>
				</div>
				<motion.p
					initial='hidden'
					animate='visible'
					variants={mailSuccessParagraph}
					transition={{ duration: 1 }}
					style={{
						color: darkMode ? 'var(--bg-color)' : 'var(--color-black)',
					}}>
					You're being redirected back in {seconds} seconds...
				</motion.p>
			</div>
		</>
	)
}

export default MailSuccess
