import React from 'react';

import Homepage from './Home';
import PortfolioPage from './Portfolio';
import ContactPage from './Contact';
import AbootPage from './Aboot';

const Home = () => {
	return <Homepage />;
};

const Portfolio = () => {
	return <PortfolioPage />;
};

const Contact = () => {
	return <ContactPage />;
};
const Aboot = () => {
	return <AbootPage />;
};

export { Home, Portfolio, Aboot, Contact };
