import React from 'react';

// import homepage sections
import Header from './Header';
import About from './About';
import Location from './Location';
import Schedule from './Schedule';
import Pricing from './Pricing';
import Contact from './Contact';

const Homepage = () => {
	return(
		<div className='main'>
			<Header />
			<About />
			<Location />
			<Schedule />
			<Pricing />
			{/* <Reviews /> */}
			<Contact />
		</div>
	);
};

export default Homepage;
