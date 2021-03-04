import React from 'react';
import Headshot from '../res/headshot_600.png';
import './stylesheets/Sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<img
				src={Headshot}
				alt='headshot'
				// width='500'
				className='img-headshot'></img>
			<div className='sidebar--deets'>
				<h2>Skills</h2>
				<div className='skills'>
					<div>
						<i className='fab fa-js'></i>
						<p className='skill-title'>Javascript</p>
					</div>
					<div>
						<i className='fab fa-html5'></i>
						<p className='skill-title'>HTML5</p>
					</div>
					<div>
						<i className='fab fa-css3-alt'></i>
						<p className='skill-title'>CSS</p>
					</div>
					<div>
						<i className='fab fa-react'></i>
						<p className='skill-title'>React.js</p>
					</div>
					<div>
						<i className='fab fa-git-square'></i>
						<p className='skill-title'>Git</p>
					</div>
					<div>
						<i className='fab fa-google'></i>
						<p className='skill-title'>Googling</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
