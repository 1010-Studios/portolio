import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='nav'>
			<ul>
				<li>
					<Link to='/Home'>Home</Link>
				</li>
				<li>
					<Link to='/Portfolio'>Portfolio</Link>
				</li>
				{/* <li>
					<Link to='/Aboot'>Aboot</Link>
				</li> */}
				<li>
					<Link to='/Contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
