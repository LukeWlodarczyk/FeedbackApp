import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			<div className="fixed-action-btn">
				<Link to="/surveys/new" className="btn-floating btn-large pulse">
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
