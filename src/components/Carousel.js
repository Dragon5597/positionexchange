import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Avatar from "./Avatar";

const settings = {
	dots: true,
	infinite: true,
	nav: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const Carousel = ({ images }) => {
	return (
		<div className="py-4">
			<Slider {...settings}>
				{images.map((image, index) => (
					<div className="card blog-card" key={index}>
						<div
							className="card-body"
							style={{
								backgroundImage: `url(${image})`,
								height: "400px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<div className="bg-light px-4 py-4 text-black" style={{ maxWidth: "500px" }}>
								<span className="post-format bg-gradient text-dark">
									<i className="font-family-heading h4 text-white pt-1 text-dark">“</i>
								</span>
								<p>
									<span className="text-dark">
										I did a business in a box called College Pro Painters. They taught you how to
										paint houses, how to hire and fire, how to sell, how to deal with customers. You
										got a one-year franchise. It was the hardest year of my life in terms of hard
										work. I won manager of the year. It was very successful..
									</span>
								</p>
								<p
									className="text-dark fw-bold pt-3 d-flex align-items-center"
									style={{ fontWeight: "bold" }}
								>
									<Avatar size="small" /> <span className="pl-2">Someone famous</span>
								</p>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

Carousel.propTypes = {
	images: PropTypes.array.isRequired
};

export default Carousel;
