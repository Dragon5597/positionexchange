import React from "react";
import heroBg from "../../../images/library/hero.svg";
import { useTranslation } from "react-i18next";

const Hero = () => {
	const { t } = useTranslation();
	return (
		<>
			<section
				id="hero-banner"
				className="bg-dark bg-center bg-no-repeat py-5"
				style={{ backgroundImage: `url(${heroBg})` }}
			>
				<div className="container py-5 my-5 text-center text-sm-left">
					<div>
						<h1 className="display-3 text-white text-center py-5 pt-md-5 pb-2">
							<span className="d-block" data-parallax='{"y" : -20}'>
								<span
									className="d-none d-sm-inline-block bg-white text-dark text-center mr-2"
									data-parallax='{"rotateZ" : 20}'
									style={{ width: "80px" }}
								>
									L
								</span>
								<span>
									<span className="d-sm-none">L</span>ibrary
								</span>
							</span>
						</h1>
						{/* <div className="countdown countdown-style-2 countdown-light-skin h4">
							<div className="countdown-item">
								<div className="countdown-value">10+</div>
								<div className="countdown-label">{t('hero.countries')}</div>
							</div>
							<div className="countdown-item">
								<div className="countdown-value">30+</div>
								<div className="countdown-label">{t('hero.schools')}</div>
							</div>
							<div className="countdown-item">
								<div className="countdown-value">1000+</div>
								<div className="countdown-label">{t('hero.teachers')}</div>
							</div>
							<div className="countdown-item">
								<div className="countdown-value">5TR+</div>
								<div className="countdown-label">{t('hero.students')}</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
