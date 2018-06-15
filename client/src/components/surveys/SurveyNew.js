import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
	state = { showReview: false };

	toggleShowReview = () => {
		this.setState({
			showReview: !this.state.showReview,
		});
	};

	render() {
		return (
			<div>
				{this.state.showReview ? (
					<SurveyFormReview
						onCancel={this.toggleShowReview}
						history={this.props.history}
					/>
				) : (
					<SurveyForm onSurveySubmit={this.toggleShowReview} />
				)}
			</div>
		);
	}
}

export default reduxForm({
	form: 'surveyForm',
})(SurveyNew);
