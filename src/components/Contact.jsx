import React from 'react';
import { images } from '../javascript/imageImports';

const Contact = () => {
	return (
		<div className="container-fluid contact p-0 m-0" id='contact' style={{backgroundImage: `url(${images.svg_bg})`}}>
			<h5 className="topic display-5 my-5 text-uppercase text-center text-white">Keep in touch</h5>
			<div className="row my-4 py-3 px-5 justify-content-center">
				<div className="col-10 col-lg-4 mx-auto text-start text-light lead">
					<div className="row phone">
						<div className="col-3 text-center">
							<i className="fas fa-phone-alt py-1"></i>
						</div>
						<div className="col-9">
							<a href="tel:+94770722933" className="link">077-072-2933</a><br />
							<a href="tel:+94701184455" className="link">070-118-4455</a>
						</div>
					</div>
					<div className="row email">
						<div className="col-3 text-center">
							<i className="fas fa-envelope py-1"></i>
						</div>
						<div className="col-9">
							<a href="mailto:caindoor44@gmail.com" className="email link">caindoor44@gmail.com</a>
						</div>
					</div>
					<div className="row address">
						<div className="col-3 text-center">
							<i className="fas fa-map-marked-alt py-1"></i>
						</div>
						<div className="col-9">
							<span>
							Singhepura,
							Battaramulla, 10120,
							Sri Lanka.
							</span>
						</div>
					</div>
					<div className="social-media">
						<div className="icons my-4 d-flex justify-content-center">
                            <a href="https://www.facebook.com/C-A-Indoor-Cricket-Net-101735057996036/" className="me-4" target="_blank" rel='noreferrer'><i className="fab fa-facebook-f"></i></a>
                            <a href="mailto:caindoor44@gmail.com" className="me-4"><i className="fas fa-envelope"></i></a>
                            <a href="https://wa.me/+94770722933" className="me-4"><i className="fab fa-whatsapp"></i></a>
                        </div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Contact