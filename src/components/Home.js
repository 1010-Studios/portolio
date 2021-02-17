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
						<span>
							<h1>Hello!</h1>
						</span>
					</header>
					<article>
						<p className='tagline'>
							My name is Ty!
							<br />I am a web developer living in Calgary, Alberta.
						</p>
						<div className='btns'>
							<Link to='/Portfolio' className='action-btn projects'>
								View Projects
							</Link>
							<Link to='Contact' className='action-btn contact'>
								Hire me!
							</Link>
						</div>
						<div className='home-social-links'>
							<a href='https://github.com/1010-Studios' target='#'>
								<i className='fab fa-github-square' />
								<span>Github</span>
							</a>
							<a
								href='https://www.linkedin.com/in/tyler-lowes-10071a190/'
								target='#'>
								{' '}
								<i className='fab fa-linkedin' />
								<span>LinkedIn</span>
							</a>
						</div>
						<br />
						<div className='home-bio'>
							<p className='about-blurb'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
								voluptates corrupti at delectus accusamus ducimus suscipit earum
								neque fugit inventore.
								<br />
								<br />
								Yadda yadda yadda Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Non sunt necessitatibus officia. Ea rerum
								asperiores, expedita, dolorem velit sequi enim mollitia iusto
								corporis maxime deleniti exercitationem facilis sunt quis dolore
								deserunt quas assumenda, voluptates voluptatem quos odio amet
								accusantium itaque dolores. Iure ducimus eius nisi hic excepturi
								labore, saepe ratione? /rant <br />
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Home;
