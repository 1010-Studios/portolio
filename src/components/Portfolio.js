import React from 'react';
import './stylesheets/Portfolio.css';
import PortfolioItem from './PortfolioItems';
import PortfolioProjects from './PortfolioProjects';

function GenerateItems() {
	const portItems = PortfolioProjects.map((item) => (
		<PortfolioItem {...item} />
	));
	return <div className='port-container'>{portItems}</div>;
}

const Portfolio = () => {
	return (
		<section className='container-main'>
			<GenerateItems />
		</section>
	);
};

export default Portfolio;
