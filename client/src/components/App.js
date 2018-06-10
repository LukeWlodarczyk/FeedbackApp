import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import SurveyNew from './SurveyNew';

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Route exact path="/" component={Landing} />
				<Route exact path="/surveys" component={Dashboard} />
				<Route path="/surveys/new" component={SurveyNew} />
			</div>
		</Router>
	);
};

export default App;
