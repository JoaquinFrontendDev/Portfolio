import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
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
				}
			)
		e.target.reset()
	}
	return (
		<>
			<div className='contact-header' id='contact'>
				<div className='contact-title'></div>
			</div>
			<div className='contact-wrapper'>
				<div className='left-contact-section'>
					<h2>Say Hello 🙋‍♂️</h2>
					<div className='contact-socials'>
						<div className='contact-section-item'>
							<a href=''>
								<span className='fab fa-linkedin'></span>
							</a>
							<h3>Joaquin Retola Noya</h3>
						</div>
						<div className='contact-section-item'>
							<a href=''>
								<span className='fab fa-github'></span>
							</a>
							<h3>SintaxisDev</h3>
						</div>
						<div className='contact-section-item'>
							<a href=''>
								<span className='far fa-envelope'></span>
							</a>
							<h3>joaquin.retola@gmail.com</h3>
						</div>
						<div className='contact-section-item'>
							<a href=''>
								<span className='fab fa-twitter'></span>
							</a>
							<h3>JoacoRetola</h3>
						</div>
						<div className='contact-section-item'>
							<a href=''>
								<span className='fab fa-instagram'></span>
							</a>
							<h3>JoacoRetola</h3>
						</div>
					</div>
				</div>
				<div className='right-contact-section'>
					<div className='contact-box'>
						<p className='contact-section-p'>
							<b>What's your idea?</b> Tell me about that project that it
							hovering in your head
						</p>
						<form className='contact-form' ref={form} onSubmit={sendEmail}>
							<div className='form-input'>
								<input type='text' name='user_name' required />
								<div className='underline-1'></div>
								<label htmlFor='user_name'>Name</label>
							</div>
							<div className='form-input'>
								<input type='text' name='user_subject' required />
								<div className='underline-2'></div>
								<label htmlFor='user_subject'>Subject</label>
							</div>
							<div className='form-input'>
								<input type='text' name='user_email' required />
								<div className='underline-3'></div>
								<label htmlFor='user_email'>Email</label>
							</div>
							<div className='form-input'>
								<textarea resizable='false' name='message' required />
								<div className='underline-4'></div>
								<label htmlFor='user_message'>Message</label>
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
