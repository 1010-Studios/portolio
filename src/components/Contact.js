import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<section className='container-main'>
			<div className='container-contact'>
				<div className='contact-blurb'>
					<p>Contact me for more details!</p>
				</div>
				<div className='form-container'>
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
				</div>
			</div>
		</section>
	);
};

export default Contact;
