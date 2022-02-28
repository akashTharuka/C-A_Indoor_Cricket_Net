import React from 'react';
import EventScheduler from './EventScheduler';
import { HashLink } from 'react-router-hash-link';


const Schedule = () => {
	return (
		<div className="container-fluid schedule" id='schedule'>
			<h5 className="topic display-6 mb-4 p-3 text-uppercase text-center">
				Available Dates
			</h5>
			<div className="row mb-5 p-4 justify-content-center text-center">
				<div className="col-12 col-lg-8 scheduler my-3">
					<EventScheduler />
				</div>
				<div className="col-10 col-md-4 scheduling-details my-3">
					<div className="details-body">
						<div className="net my-3 p-3 mx-auto border-0 shadow p-3 mb-5 bg-body rounded">
							A, B - Normal Net
						</div>
						<div className="net my-3 p-3 mx-auto border-0 shadow p-3 mb-5 bg-body rounded">
							C - Machine Net
						</div>
						<p className="lead">Use the event calender to get an idea of reserved dates</p>
						
						<p className='lead'>Contact us to book a time and a date at your convenience</p>

						<HashLink to="#contact">
							<button className='btn btn-outline-dark px-3'>Contact Us</button>
						</HashLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Schedule