import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Dashboard from './Dashboard';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';
import SurveyThanks from './surveys/SurveyThanks';

import { fetchUser } from '../actions/index';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<Router>
				<div className="container">
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/surveys" component={Dashboard} />
					<Route path="/surveys/new" component={SurveyNew} />
					<Route path="/surveys/thanks" component={SurveyThanks} />
				</div>
			</Router>
		);
	}
}

export default connect(null, { fetchUser })(App);
