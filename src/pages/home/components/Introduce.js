import React from "react";
import categories1 from "../../../images/categories/categories1.png";

const Introduce = () => {
	return (
		<div className="introduce" style={{ paddingTop: "80px" }}>
			<div className="introduce__provider main-large pt-md-5 pt-2 row">
				<div className="introduce__image col-lg-7 col-md-6">
					<img src={categories1} alt="Background" className="d-block mx-auto mr-md-5" />
				</div>
				<div className="introduce__content col-lg-5 col-md-6 pt-md-5 text-center text-md-left">
					<h1 className="pt-md-5 pb-md-4">Minimal App For Your Lifestyle</h1>
					<div className="introduce__video">
						<a
							className="video-player-button bg-gradient text-white my-3 mr-3"
							href="https://player.vimeo.com/video/93641234?color=ac32e4&title=0&byline=0&portrait=0"
							data-fancybox
							data-width="1000"
							data-height="563"
						>
							<i className="fe-icon-play"></i>
						</a>
						<span className="video-player-label text-muted">Click me to watch video!</span>
					</div>
					<div className="introduce__btn-download pt-4 mt-md-3">
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
			</div>
		</div>
	);
};

export default Introduce;
