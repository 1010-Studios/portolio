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
						<p>I began leardnin in October of 2020</p>
						<div class='btns'>
							<Link to='/Portfolio' className='action-btn'>
								View Projects
							</Link>
							<Link to='Contact' className='action-btn'>
								Hire me!
							</Link>
						</div>
					</article>
					<div class='social-links'>
						<span>Github</span>

						<span>LinkedIn</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
