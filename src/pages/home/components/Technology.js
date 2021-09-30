import React from "react";
import IOS from "../../../images/ios.jpg";
import blockchain from '../../../images/technology/blockchain.jpg';
import cse from '../../../images/technology/cse.jpg';
import nodejs from '../../../images/technology/nodejs.jpg';
import react from '../../../images/technology/react.png';
import ios from '../../../images/technology/ios.jpg';
import android from '../../../images/technology/android.png';

const Technology = () => {
	return (
		<section className="container py-2 mt-3">
			<h2 className="h2 block-title text-center pt-3 mt-2">Technology</h2>
			<div className="isotope-grid filter-grid cols-3 pt-2" style={{ position: "relative", height: "850px", marginTop: 50}}>
				<div className="gutter-sizer"></div>
				<div className="grid-sizer"></div>
				<div className="grid-item mobile-apps mb-30" style={{ position: "absolute", left: 0, top: 0 }}>
					<div className="portfolio-card">
						<a className="portfolio-thumb" href="#">
							<img src={blockchain} alt="blockchain" />
						</a>
						<div className="portfolio-card-body">
							<div className="portfolio-meta">
								<span className="mr-3">
									<i className="fe-icon-user"></i>Blockchain
								</span>
								<a href="#">
									<i className="fe-icon-heart text-accent"></i>12
								</a>
							</div>
							<h5 className="portfolio-title">
								<a href="#">BlockChain Development</a>
							</h5>
							<a className="tag-link" href="#">
								Block Chain
							</a>
						</div>
					</div>
				</div>
				<div className="grid-item mobile-apps mb-30" style={{ position: "absolute", left: 390, top: 0 }}>
					<div className="portfolio-card">
						<a className="portfolio-thumb" href="#">
							<img src={cse} alt="Nam" />
						</a>
						<div className="portfolio-card-body">
							<div className="portfolio-meta">
								<span className="mr-3">
									<i className="fe-icon-user"></i>CSE 3.0
								</span>
								<a href="#">
									<i className="fe-icon-heart text-accent"></i>12
								</a>
							</div>
							<h5 className="portfolio-title">
								<a href="#">CSE 3.0 Blockchain</a>
							</h5>
							<a className="tag-link" href="#">
								Block Chain
							</a>
						</div>
					</div>
				</div>
				<div className="grid-item mobile-apps mb-30" style={{ position: "absolute", left: 780, top: 0 }}>
					<div className="portfolio-card">
						<a className="portfolio-thumb" href="#">
							<img src={nodejs} alt="Nodejs" />
						</a>
						<div className="portfolio-card-body">
							<div className="portfolio-meta">
								<span className="mr-3">
									<i className="fe-icon-user"></i>Node
								</span>
								<a href="#">
									<i className="fe-icon-heart text-accent"></i>12
								</a>
							</div>
							<h5 className="portfolio-title">
								<a href="#">Backend Development</a>
							</h5>
							<a className="tag-link" href="#">
								Backend
							</a>
						</div>
					</div>
				</div>
				<div className="grid-item mobile-apps mb-30" style={{ position: "absolute", left: 0, top: 446 }}>
					<div className="portfolio-card">
						<a className="portfolio-thumb" href="#">
							<img src={react} alt="Nam" />
						</a>
						<div className="portfolio-card-body">
							<div className="portfolio-meta">
								<span className="mr-3">
									<i className="fe-icon-user"></i>Facebook
								</span>
								<a href="#">
									<i className="fe-icon-heart text-accent"></i>12
								</a>
							</div>
							<h5 className="portfolio-title">
								<a href="#">FrontEnd Development</a>
							</h5>
							<a className="tag-link" href="#">
								Front End
							</a>
						</div>
					</div>
				</div>
				<div className="grid-item mobile-apps mb-30" style={{ position: "absolute", left: 389, top: 446 }}>
					<div className="portfolio-card">
						<a className="portfolio-thumb" href="#">
							<img src={ios} alt="Nam" />
						</a>
						<div className="portfolio-card-body">
							<div className="portfolio-meta">
								<span className="mr-3">
									<i className="fe-icon-user"></i>Swift
								</span>
								<a href="#">
									<i className="fe-icon-heart text-accent"></i>12
								</a>
							</div>
							<h5 className="portfolio-title">
								<a href="#">iOS App</a>
							</h5>
							<a className="tag-link" href="#">
								Mobile Apps
							</a>
						</div>
					</div>
				</div>
				<div className="grid-item mobile-apps mb-30" style={{ position: "absolute", left: 790, top: 446 }}>
					<div className="portfolio-card">
						<a className="portfolio-thumb" href="#">
							<img src={android} alt="Nam" />
						</a>
						<div className="portfolio-card-body">
							<div className="portfolio-meta">
								<span className="mr-3">
									<i className="fe-icon-user"></i>Kotlin
								</span>
								<a href="#">
									<i className="fe-icon-heart text-accent"></i>12
								</a>
							</div>
							<h5 className="portfolio-title">
								<a href="#">Android App</a>
							</h5>
							<a className="tag-link" href="#">
								Mobile Apps
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technology;
