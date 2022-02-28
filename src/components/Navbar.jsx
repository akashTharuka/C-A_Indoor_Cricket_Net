import React from 'react';

import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3" role="navigation">
			<div className="container-fluid">
				<HashLink className="navbar-brand text-uppercase" smooth to="#page-top">C&A indoor cricket net</HashLink>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
			
			<div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
				<ul className="navbar-nav mx-auto">
					<li className="nav-item mx-3">
						<HashLink className="nav-link active" aria-current="page" to="#page-top">Home</HashLink>
					</li>
					<li className="nav-item mx-3">
						<HashLink className="nav-link" to="#about">About</HashLink>
					</li>
					<li className="nav-item mx-3">
						<HashLink className="nav-link" to="#schedule">Schedule</HashLink>
					</li>
					<li className="nav-item mx-3">
						<HashLink className="nav-link" to="#pricing">Pricing</HashLink>
					</li>
					{/* <li className="nav-item mx-3">
						<HashLink className="nav-link" to="#reviews">Reviews</HashLink>
					</li> */}
					<li className="nav-item mx-3">
						<HashLink className="nav-link" to="#contact">Contact</HashLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
