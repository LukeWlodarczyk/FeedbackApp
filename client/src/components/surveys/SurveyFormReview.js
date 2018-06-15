import React, { Component } from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { submitSurvey } from '../../actions/index';

class SurveyFormReview extends Component {
	onSubmit = () => {
		const { formValues, history } = this.props;
		this.props.submitSurvey(formValues, history);
	};

	reviewFields() {
		return formFields.map(({ name, label }) => (
			<div key={name}>
				<label>{label}</label>
				<div>{this.props.formValues[name]}</div>
			</div>
		));
	}

	render() {
		const { onCancel } = this.props;
		return (
			<div>
				<h5>Please confirm your entries</h5>
				<div style={{ marginBottom: '20px' }}>{this.reviewFields()}</div>
				<button
					className="yellow darken-3 white-text btn-flat"
					onClick={onCancel}
				>
					Back
					<i className="material-icons right">arrow_back</i>
				</button>
				<button
					className="green btn-flat right white-text"
					onClick={this.onSubmit}
				>
					Send Survey
					<i className="material-icons right">email</i>
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({ formValues: state.form.surveyForm.values });

export default connect(mapStateToProps, { submitSurvey })(SurveyFormReview);
