import React from 'react';
import Headshot from '../res/headshot_1500.png';
import './Home.css';

const Home = () => {
	return (
		<section className='container-main'>
			<div className='container-home'>
				<div className='sidebar'>
					<img
						src={Headshot}
						alt='headshot'
						width='200'
						className='img-headshot'></img>
					<div className='sidebar--deets'>
						<h3>Tyler Lowes</h3>
						<h5>Web Developer</h5>
						<h5>Calgary, AB</h5>
						{/* <h6>Skills:</h6> */}
						<hr />
						<ul className='skills'>
							<li>
								Javascript(ES6)
								<br />
								******
							</li>
							<li>
								HTML5
								<br />
								******
							</li>
							<li>
								CSS
								<br />
								******
							</li>
							<li>
								React
								<br />
								******
							</li>
							<li>
								Webpack
								<br />
								******
							</li>
						</ul>
					</div>
				</div>
				<div className='main'>
					<h1>HELLO!</h1>
					<p>I am a web developer from Calgary, AB</p>
				</div>
			</div>
		</section>
	);
};

export default Home;
