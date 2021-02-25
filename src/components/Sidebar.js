import React from 'react';
import Headshot from '../res/headshot_600.png';
import './stylesheets/Sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<img
				src={Headshot}
				alt='headshot'
				width='500'
				className='img-headshot'></img>
			<div className='sidebar--deets'>
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
						<i className='fab fa-node-js'></i>
						<p className='skill-title'>Node.js</p>
					</div>
					<div>
						<i className='fab fa-google'></i>
						<p className='skill-title'>Google</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
