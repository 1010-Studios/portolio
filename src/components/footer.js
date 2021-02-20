import React from 'react';

import './footer.css';

const Footer = () => {
	return (
		<footer>
			<span>Website handcrafted by</span>
			<span> &copy; Tyler Lowes, 2021</span>
			<span className='social-links'>
				<a href='https://github.com/1010-Studios' target='#'>
					<i className='fab fa-github-square' />
				</a>
				<a href='https://www.linkedin.com/in/tyler-lowes-10071a190/' target='#'>
					<i className='fab fa-linkedin' />
				</a>
			</span>
		</footer>
	);
};

export default Footer;
