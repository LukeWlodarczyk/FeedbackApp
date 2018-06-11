import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../actions/index';
import Payments from './Payments';

class Header extends Component {
	renderContent = () => {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return (
					<Fragment>
						<li>
							<Payments />
						</li>
						<li>
							<Link to="/" onClick={this.props.logOut}>
								Logout
							</Link>
						</li>
					</Fragment>
				);
		}
	};

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="left brand-logo"
					>
						Feedbacky
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => ({ auth: auth.user });

export default connect(mapStateToProps, { logOut })(Header);
