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
		e.preventDefault();
		const params = {
			from_name: name,
			message: message,
			reply_to: email,
		};
		emailjs.send('service_8uj3m3w', 'template_r0ciihi', params).then(
			function (response) {
				console.log('SUCCESS!', response.status, response.text);
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

/*
<form>
						<label for='name'>Name:</label>
						<input type='text' placeholder='Your Name' id='name' required />
						<label for='email'>Email:</label>
						<input type='email' placeholder='Your Email' id='email' required />
						<label for='subject'>Subject:</label>
						<textarea
							name='subject'
							id='subject'
							cols='30'
							rows='10'
							placeholder='Write something...'
						/>
						<input type='submit' value='submit' />
					</form>
*/
