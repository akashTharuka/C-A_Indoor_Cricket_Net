import React from 'react';

const Pricing = () => {
	return (
		<div className='container-fluid pricing' id='pricing'>
			<h5 className="topic display-6 my-4 p-3 text-uppercase text-center">
				Pricing Information
			</h5>
			<div className="row mt-5 p-4 justify-content-center text-center">
				<div className="col-8 col-md-4 mx-auto my-4 p-3">
					<div className="card border-0 shadow p-3 mb-5 bg-body rounded">
						<div className="card-body text-dark">
							<div className="card-title display-6">
								Normal
							</div>
							<div className="card-subtitle lead">
								Rs. 700 per hour
							</div>
						</div>
					</div>
				</div>
				<div className="col-8 col-md-4 mx-auto my-4 p-3">
					<div className="card border-0 shadow p-3 mb-5 bg-body rounded">
						<div className="card-body text-dark">
							<div className="card-title display-6">
								Machine Net without operator
							</div>
							<div className="card-subtitle lead">
								Rs. 1100 per hour
							</div>
						</div>
					</div>
				</div>
				<div className="col-8 col-md-4 mx-auto my-4 p-3">
					<div className="card border-0 shadow p-3 mb-5 bg-body rounded">
						<div className="card-body text-dark">
							<div className="card-title display-6">
								Machine Net with operator
							</div>
							<div className="card-subtitle lead">
								Rs. 1200 per hour
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;