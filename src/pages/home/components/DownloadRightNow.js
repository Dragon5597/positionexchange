import React from "react";

const DownloadRightNow = () => {
	return (
		<div className="download-right-now pb-4">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 col-sm-6 border-white border-right py-5 border-bottom">
						<div className="animated-digits text-white mx-auto text-center" data-number="10">
							<h5 className="animated-digits-digit text-white">
								<span>10</span>
								k+
							</h5>
							<p className="animated-digits-text">Totally satisfied users</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 border-white border-right py-5 border-bottom">
						<div className="animated-digits text-white mx-auto text-center" data-number="10">
							<h5 className="animated-digits-digit text-white">
								<span>98</span>%
							</h5>
							<p className="animated-digits-text">Positive feedback</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 border-white border-right py-5 border-bottom">
						<div className="animated-digits text-white mx-auto text-center" data-number="10">
							<h5 className="animated-digits-digit text-white">
								<span>760</span>+
							</h5>
							<p className="animated-digits-text">Downloads per day</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 border-white py-5 border-bottom">
						<div className="animated-digits text-white mx-auto text-center" data-number="10">
							<h5 className="animated-digits-digit text-white">
								<span>25</span>
							</h5>
							<p className="animated-digits-text">People behind this app</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container py-5 text-center">
				<h2 className="h3 block-title text-white">Download right now</h2>
				<div className="row justify-content-center pt-3">
					<div className="col-xl-7 col-lg-8 col-md-10">
						<p className="text-white opacity-60 pb-4">
							Morbi fringilla ex luctus, tempor ante id, finibus ante. Nulla facilisi. Phasellus et quam
							porta, elementum sem eget, pellentesque dolor. Pellentesque efficitur suscipit ullamcorper.
						</p>
						<a className="market-btn market-btn-light-skin apple-btn mx-2 mb-3" href="market-buttons.html#">
							<span className="mb-subtitle">Download on the</span>
							<span className="mb-title">App Store</span>
						</a>
						<a
							className="market-btn market-btn-light-skin google-btn mx-2 mb-3"
							href="market-buttons.html#"
						>
							<span className="mb-subtitle">Download on the</span>
							<span className="mb-title">Google Play</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DownloadRightNow;
