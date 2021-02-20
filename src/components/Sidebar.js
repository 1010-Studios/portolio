import React from 'react';
import Headshot from '../res/headshot_600.png';
import './Sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<img
				src={Headshot}
				alt='headshot'
				width='500'
				className='img-headshot'></img>
			<div className='sidebar--deets'>
				<ul className='skills'>
					<li>
						Javascript(ES6)
						<br />
						******
					</li>
					<li>
						HTML5
						<br />
						********
					</li>
					<li>
						CSS
						<br />
						********
					</li>
					<li>
						React.js
						<br />
						*****
					</li>
					<li>
						Node.js
						<br />
						*****
					</li>
					<li>
						Webpack
						<br />
						****
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
