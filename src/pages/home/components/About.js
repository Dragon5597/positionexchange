import React from "react";

const About = () => {
	return (
		<section id="about" className="bg-dark pt-3">
			<div className="container">
				<hr className="hr-light" />
			</div>
			<div className="container text-center text-sm-left pt-5 mb-5" id="home-about">
				<div className="row pb-5 mb-5">
					<div className="col-md-4 col-sm-7 mb-30">
						<h3 className="h5 text-white">About LikeFit</h3>
						<p className="text-white opacity-80 mb-0">Bring Technology to change a daily life of people</p>
					</div>
					<div className="col-md-4 col-sm-5 mb-30">
						<h3 className="h5 text-white">
						    A Portal of like
						</h3>
						{/* <p className="text-white font-weight-medium mb-0">A Portal of like</p>
						<p className="text-white font-weight-medium mb-0">Like Token</p> */}
					</div>
					{/* <div className="col-md-3 col-sm-7 mb-30">
						<h3 className="h5 text-white">
						    Like Token
						</h3>
						<p className="text-white font-weight-medium mb-0">5 minutes</p>
					</div> */}
					<div className="col-md-4 col-sm-5 mb-30">
						<h3 className="h5 text-white pb-2">Like Token</h3>
						<a
							className="scroll-to btn btn-ofe btn-primary btn-block"
							href="http://eepurl.com/g2BtnH"
							target="_blank "
						>
							Buy Like Token 
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
