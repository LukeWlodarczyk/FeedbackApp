import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleToken } from '../actions/index';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				name="Feedbacky"
				description="5 dolars for 5 email credits"
				amount={500}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, { handleToken })(Payments);
