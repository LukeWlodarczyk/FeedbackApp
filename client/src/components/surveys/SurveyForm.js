import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import SurveyField from './SurveyField';
import surveyFileds from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return (
			<div style={{ marginBottom: '20px' }}>
				{surveyFileds.map(({ name, label }, i) => (
					<Field
						key={name}
						type="text"
						name={name}
						label={label}
						component={SurveyField}
					/>
				))}
			</div>
		);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/surveys" className="red darken-3 btn-flat white-text">
						Cancel
						<i className="material-icons right">arrow_back</i>
					</Link>
					<button type="submit" className="teal btn-flat right white-text">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};

	errors.recipients = validateEmails(values.recipients || '');

	surveyFileds.forEach(({ name, label }) => {
		if (!values[name]) {
			errors[name] = `${label} is required`;
		}
	});

	return errors;
};

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false,
})(SurveyForm);
