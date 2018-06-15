// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div style={{ margin: '10px 5px' }}>
			<label>{label}</label>
			<input {...input} style={{ marginBottom: '5px' }} />
			<small className="red-text" style={{ marginBottom: '20px' }}>
				{touched && error}
			</small>
		</div>
	);
};
