import React from 'react';
import Sidebar from './Sidebar';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section className='container-main'>
			<Sidebar />
			<div className='container-home'>
				<div className='main'>
					<header>
						<h1>Hello!</h1>
					</header>
					<article>
						<p>
							My name is Ty, I am a self-taught web developer living in Calgary,
							Alberta
						</p>
						<div class='btns'>
							<Link to='/Portfolio' className='action-btn'>
								View Portfolio
							</Link>
							<Link to='Contact' className='action-btn'>
								Hire me!
							</Link>
						</div>
						<div class='social-links'>
							<span>Github</span> | <span>LinkedIn</span>
						</div>
						<br />
						<p className='about-blurb'>
							I began my journey into web development as a hobby project in
							October of 2020, and quickly fell in love with it.
							<br />
							<br />
							Yadda yadda yadda Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Non sunt necessitatibus officia. Ea rerum
							asperiores, expedita, dolorem velit sequi enim mollitia iusto
							corporis maxime deleniti exercitationem facilis sunt quis dolore
							deserunt quas assumenda, voluptates voluptatem quos odio amet
							accusantium itaque dolores. Iure ducimus eius nisi hic excepturi
							labore, saepe ratione?
						</p>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Home;
