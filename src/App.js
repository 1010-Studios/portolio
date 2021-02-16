import './App.css';
import Navbar from './components/Navbar';
import { Home, Portfolio, Aboot, Contact } from './components/Content';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
				</Switch>
			</Router>
		</div>
	);
}

export default App;
