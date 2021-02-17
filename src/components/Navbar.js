import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='nav'>
			<ul>
				<li>
					<NavLink to='/Home' activeClassName='active'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/Portfolio' activeClassName='active'>
						Projects
					</NavLink>
				</li>
				{/* <li>
					<Link to='/Aboot'>Aboot</Link>
				</li> */}
				<li>
					<NavLink to='/Contact' activeClassName='active'>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
