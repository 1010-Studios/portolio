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
						<p>
							My name is Ty!
							<br />I am a web developer living in Calgary, Alberta.
						</p>
						<div className='btns'>
							<Link to='/Portfolio' className='action-btn'>
								View Portfolio
							</Link>
							<Link to='Contact' className='action-btn'>
								Hire me!
							</Link>
						</div>
						<div className='social-links'>
							<span>Github</span> | <span>LinkedIn</span>
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
								labore, saepe ratione? /rant
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Home;
