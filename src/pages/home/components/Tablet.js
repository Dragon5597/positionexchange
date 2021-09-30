import React from "react";
import tableImg from "../../../images/tablet/tablet-app.jpg";

const Tablet = () => {
	return (
		<div className="container-fluid pt-lg-2 pb-5">
			<div className="row align-items-center">
				<div className="col-xl-4 offset-xl-2 col-lg-6 col-md-5 pb-4 text-center text-md-left">
					<h2 className="h3">Tablet version is available</h2>
					<p className="text-muted pt-3 pb-4">
						Morbi fringilla ex luctus, tempor ante id, finibus ante. Nulla facilisi.
						<span className="d-sm-block d-md-none d-lg-block">
							Phasellus et quam porta, elementum sem eget, pellentesque dolor. Pellentesque efficitur
							suscipit ullamcorper cum soluta nobis est eligendi optio cumque nihil impedit.
						</span>
					</p>
					<div className="text-md-nowrap">
						<a className="market-btn apple-btn mr-3 mb-3" href="market-buttons.html#">
							<span className="mb-subtitle">Download on the</span>
							<span className="mb-title">App Store</span>
						</a>
						<a className="market-btn google-btn mr-3 mb-3" href="market-buttons.html#">
							<span className="mb-subtitle">Download on the</span>
							<span className="mb-title">Google Play</span>
						</a>
					</div>
				</div>
				<div className="col-lg-6 col-md-7">
					<img src={tableImg} alt="Tablet version" />
				</div>
			</div>
		</div>
	);
};

export default Tablet;
