import React from "react";
import screenshot1 from "../../../images/screenshot/screenshot1.jpg";
import screenshot2 from "../../../images/screenshot/screenshot2.jpg";
import screenshot3 from "../../../images/screenshot/screenshot3.jpg";
import screenshot4 from "../../../images/screenshot/screenshot4.jpg";
import screenshot5 from "../../../images/screenshot/screenshot5.jpg";

const Screenshot = () => {
	return (
		<div className="screenshot container-fluid pb-5">
			<div
				className="owl-carousel carousel-flush owl-loaded owl-drag"
				data-owl-carousel='{ "nav": false, "dots": true, "loop": true, "autoplay": true, "autoplayTimeout": 4000, "responsive": {"0":{"items":1},"500":{"items":2},"920":{"items":3},"1200":{"items":4}} }'
			>
				<div className="owl-stage-outer owl-height" style={{ height: "580px" }}>
					<div
						className="owl-stage"
						style={{
							transform: "translate3d(0px, 0px, 0px)",
							transition: "all 0s ease 0s"
						}}
					>
						<div className="owl-item active" style={{ width: "283px" }}>
							<figure className="figure mb-4">
								<img className="figure-img" src={screenshot1} alt="Onboard screen" />
								<figcaption className="figure-caption text-center">Onboarding Screen</figcaption>
							</figure>
						</div>
						<div className="owl-item active" style={{ width: "283px" }}>
							<figure className="figure mb-4">
								<img className="figure-img" src={screenshot2} alt="Onboard screen" />
								<figcaption className="figure-caption text-center">Onboarding Screen</figcaption>
							</figure>
						</div>
						<div className="owl-item active" style={{ width: "283px" }}>
							<figure className="figure mb-4">
								<img className="figure-img" src={screenshot3} alt="Onboard screen" />
								<figcaption className="figure-caption text-center">Onboarding Screen</figcaption>
							</figure>
						</div>
						<div className="owl-item active" style={{ width: "283px" }}>
							<figure className="figure mb-4">
								<img className="figure-img" src={screenshot4} alt="Onboard screen" />
								<figcaption className="figure-caption text-center">Onboarding Screen</figcaption>
							</figure>
						</div>
						<div className="owl-item active" style={{ width: "283px" }}>
							<figure className="figure mb-4">
								<img className="figure-img" src={screenshot5} alt="Onboard screen" />
								<figcaption className="figure-caption text-center">Onboarding Screen</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Screenshot;
