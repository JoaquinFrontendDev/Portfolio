import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '../../context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
	const theme = useContext(ThemeContext)
	const darkMode = theme.state.darkMode
	const navigate = useNavigate()
	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'gmail',
				'template_s81qanc',
				form.current,
				'user_24SJYE3PaQuFQ3EbM9Y3X'
			)
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				},
				navigate('/success')
			)
		e.target.reset()
	}
	return (
		<>
			<div className='contact-header' id='contact'>
				<div
					className={
						darkMode ? 'contact-title dark-mode-title' : 'contact-title'
					}></div>
			</div>
			<div className='contact-wrapper'>
				<div className='left-contact-section'>
					<h2 style={{ color: darkMode && 'var(--bg-color)' }}>Say Hello 🙋‍♂️</h2>
					<div className='contact-socials'>
						<div className='contact-section-item'>
							<a
								href='https://www.linkedin.com/in/joaquin-retola-noya-702bb9216/'
								target='_blank'
								rel='noreferrer'>
								<span
									className='fab fa-linkedin'
									style={{ color: darkMode && 'var(--bg-color)' }}></span>
							</a>
							<h3 style={{ color: darkMode && 'var(--bg-color)' }}>
								Joaquin Retola Noya
							</h3>
						</div>
						<div className='contact-section-item'>
							<a
								href='https://github.com/SintaxisDev'
								target='_blank'
								rel='noreferrer'>
								<span
									className='fab fa-github'
									style={{ color: darkMode && 'var(--bg-color)' }}></span>
							</a>
							<h3 style={{ color: darkMode && 'var(--bg-color)' }}>
								SintaxisDev
							</h3>
						</div>
						<div
							className='contact-section-item'
							target='_blank'
							rel='noreferrer'>
							<a href='https://mail.google.com/mail/?view=cm&source=mailto&to=joaquin.retola@gmail.com'>
								<span
									className='far fa-envelope'
									style={{ color: darkMode && 'var(--bg-color)' }}></span>
							</a>
							<h3 style={{ color: darkMode && 'var(--bg-color)' }}>
								joaquin.retola@gmail.com
							</h3>
						</div>
						<div
							className='contact-section-item'
							target='_blank'
							rel='noreferrer'>
							<a href='https://twitter.com/JoacoRetola'>
								<span
									className='fab fa-twitter'
									style={{ color: darkMode && 'var(--bg-color)' }}></span>
							</a>
							<h3 style={{ color: darkMode && 'var(--bg-color)' }}>
								JoacoRetola
							</h3>
						</div>
						<div
							className='contact-section-item'
							target='_blank'
							rel='noreferrer'>
							<a href='https://www.instagram.com/joacoretola/'>
								<span
									className='fab fa-instagram'
									style={{ color: darkMode && 'var(--bg-color)' }}></span>
							</a>
							<h3 style={{ color: darkMode && 'var(--bg-color)' }}>
								JoacoRetola
							</h3>
						</div>
					</div>
				</div>
				<div className='right-contact-section'>
					<div className='contact-box'>
						<p
							className='contact-section-p'
							style={{ color: darkMode && 'var(--bg-color)' }}>
							<b>What's your idea?</b> Tell me about that project that it's
							hovering in your head
						</p>
						<form className='contact-form' ref={form} onSubmit={sendEmail}>
							<div className='form-input'>
								<input
									type='text'
									name='user_name'
									className={darkMode && 'dark-mode-fields'}
									style={{ borderColor: darkMode && 'var(--bg-color)' }}
									required
								/>
								<div className='underline-1'></div>
								<label
									htmlFor='user_name'
									style={{ color: darkMode && 'var(--bg-color)' }}>
									Name
								</label>
							</div>
							<div className='form-input'>
								<input
									type='text'
									name='user_subject'
									className={darkMode && 'dark-mode-fields'}
									style={{ borderColor: darkMode && 'var(--bg-color)' }}
									required
								/>
								<div className='underline-2'></div>
								<label
									htmlFor='user_subject'
									style={{ color: darkMode && 'var(--bg-color)' }}>
									Subject
								</label>
							</div>
							<div className='form-input'>
								<input
									type='text'
									name='user_email'
									className={darkMode && 'dark-mode-fields'}
									style={{ borderColor: darkMode && 'var(--bg-color)' }}
									required
								/>
								<div className='underline-3'></div>
								<label
									htmlFor='user_email'
									style={{ color: darkMode && 'var(--bg-color)' }}>
									Email
								</label>
							</div>
							<div className='form-input'>
								<textarea
									resizable='false'
									name='message'
									className={darkMode && 'dark-mode-fields'}
									style={{ borderColor: darkMode && 'var(--bg-color)' }}
									required
								/>
								<div className='underline-4'></div>
								<label
									htmlFor='user_message'
									style={{ color: darkMode && 'var(--bg-color)' }}>
									Message
								</label>
							</div>
							<button>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
