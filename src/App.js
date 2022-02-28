import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Homepage } from './components';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="main">
					<Switch>
						<Route exact path='/'>
							<Homepage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
