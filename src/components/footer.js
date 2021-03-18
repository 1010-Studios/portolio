import React from 'react';

import './stylesheets/footer.css';

const Footer = () => {
	return (
		<footer>
			<span>Website handcrafted by</span>
			<span> &copy; 1010 Studios, 2021</span>
			<span className='social-links'>
				<a href='https://github.com/1010-Studios' target='#'>
					<i className='fab fa-github-square footer-link' />
				</a>
				<a href='https://www.linkedin.com/in/tyler-lowes-10071a190/' target='#'>
					<i className='fab fa-linkedin footer-link' />
				</a>
			</span>
		</footer>
	);
};

export default Footer;
