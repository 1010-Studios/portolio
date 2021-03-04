import React from 'react';
import './stylesheets/Portfolio.css';
import PortfolioItem from './PortfolioItems';
import PortfolioProjects from './PortfolioProjects';

function GenerateItems() {
	const portItems = PortfolioProjects.map((item) => (
		<PortfolioItem {...item} />
	));
	return <div className='port-items'>{portItems}</div>;
}

const Portfolio = () => {
	return (
		<section className='container-port'>
			<h1>Portfolio</h1>

			<GenerateItems />
		</section>
	);
};

export default Portfolio;
