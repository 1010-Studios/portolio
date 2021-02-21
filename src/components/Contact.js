import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init('user_iKtoYMSiGw1UWAlAlcp6Q');

const Contact = () => {
	const sendEmail = (e) => {
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const message = document.getElementById('subject').value;
		const form = document.getElementById('contactForm');
		const submitbtn = document.querySelector('.submit-btn');
		const emailSent = document.querySelector('.email-sent');
		e.preventDefault();
		const params = {
			from_name: name,
			message: message,
			reply_to: email,
		};
		emailjs.send('service_8uj3m3w', 'template_r0ciihi', params).then(
			function (response) {
				console.log('SUCCESS!', response.status, response.text);
				submitbtn.classList.toggle('hidden');
				emailSent.classList.toggle('hidden');
				form.classList.add('sent');
			},
			function (error) {
				console.log('FAILED...', error);
			}
		);
	};
	return (
		<section className='container-main'>
			<div className='container-contact'>
				<div className='contact-blurb'>
					<p>Drop me a line so we can work together!</p>
				</div>
				<div className='form-container'>
					<form id='contactForm'>
						Name:
						<label>
							<input
								className='form-input'
								type='text'
								placeholder='Your Name'
								id='name'
								required
							/>
						</label>
						Email:
						<label>
							<input
								className='form-input'
								type='email'
								placeholder='Your Email'
								id='email'
								required
							/>
						</label>
						<br />
						Subject:
						<label>
							<textarea
								name='subject'
								id='subject'
								cols='30'
								rows='10'
								placeholder='Write something...'
							/>
						</label>
						<div className='email-sent hidden'>
							<i className='fas fa-check' />
							<span> Message sent!</span>
						</div>
						<input
							onClick={sendEmail}
							type='submit'
							value='submit'
							className='submit-btn'
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
