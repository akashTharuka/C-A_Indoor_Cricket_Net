import React from 'react';

import { images } from '../javascript/imageImports';

const About = () => {

	const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const workingHours = ["7 a.m - 10 p.m", "7 a.m - 10 p.m", "7 a.m - 10 p.m", "7 a.m - 10 p.m", "7 a.m - 10 p.m", "7 a.m - 10 p.m", "7 a.m - 10 p.m"];

	return (
		<div className='container-fluid about' id='about'>
			<div className="row my-5 p-4 justify-content-center">
				<div className="col-10 col-xl-6 text-center">
					<h3 className="display-6 topic text-uppercase">About us</h3>
					<h4 className="lead my-4">Business Hours</h4>
					<table className="table table-striped table-hover">
						<thead>
							<tr>
								<th scope="col" className='lead'><strong>Day</strong></th>
								<th scope="col" className='lead'><strong>Hour</strong></th>
							</tr>
						</thead>
						<tbody>
							{
								weekDays.map((day, index) => {
									return(
										<tr key={index}>
											<th scope="row" className='lead'>{day}</th>
											<td>{workingHours[index]}</td>
										</tr>
									);
								})
							}
						</tbody>
					</table>
					<h4 className="lead my-5">
						<p className='text-info'>*** Parking Available ***</p>
						<p className='text-dark'><small>Reservations have to be made through phone calls and to see the booking confirmations on the calendar, please refresh the page</small></p>
						<div className="row">
							<div className="col-6">
								<h4 className="lead text-start mt-5 text-success">Available Bookings</h4>
								<ul className='text-start'>
									<li>Normal</li>
									<li>Recurring - <small>Eg:- Daily, Weekly</small></li>
								</ul>
							</div>
							<div className="col-6">
								<h4 className="lead text-start mt-5 text-success">What you can get</h4>
								<ul className='text-start'>
									<li>Net Practice</li>
									<li>Bowling Machine</li>
									<li>Private Coaching</li>
									<li>Baseball Practice</li>
									<li>Buddy Cricket</li>
									<li>Cricket Academy</li>
								</ul>
							</div>
						</div>
					</h4>
				</div>
				<div className="col-10 col-xl-6">
					<div id="aboutImages" className="carousel slide" data-bs-ride="carousel">
						<div className="carousel-indicators">
							<button type="button" data-bs-target="#aboutImages" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#aboutImages" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#aboutImages" data-bs-slide-to="2" aria-label="Slide 3"></button>
							<button type="button" data-bs-target="#aboutImages" data-bs-slide-to="3" aria-label="Slide 4"></button>
							{/* <button type="button" data-bs-target="#aboutImages" data-bs-slide-to="4" aria-label="Slide 5"></button> */}
						</div>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img src={images.img_1} className="d-block w-100 facilitiesImg" alt="..." />
							</div>
							<div className="carousel-item">
								<img src={images.img_2} className="d-block w-100 facilitiesImg" alt="..." />
							</div>
							<div className="carousel-item">
								<img src={images.img_4} className="d-block w-100 facilitiesImg" alt="..." />
							</div>
							<div className="carousel-item">
								<img src={images.img_5} className="d-block w-100 facilitiesImg" alt="..." />
							</div>
							{/* <div className="carousel-item">
								<img src={images.img_3} className="d-block w-100 facilitiesImg" alt="..." />
							</div> */}
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#aboutImages" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#aboutImages" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;