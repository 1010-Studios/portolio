import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { Home, Portfolio, Aboot, Contact } from './components/Content';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/Home' component={Home} />
					<Route exact path='/Portfolio' component={Portfolio} />
					<Route exact path='/Aboot' component={Aboot} />
					<Route exact path='/Contact' component={Contact} />
					<Route component={Home} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
