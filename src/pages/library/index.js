import React from "react";
import Hero from "./components/Hero";
import { useTranslation } from "react-i18next";

const Library = () => {
	const { t } = useTranslation();
	return (
		<div className="bg-secondary">
			<Hero />
			<section className="download py-5 px-3 mt-lg-5 container">
				<div className="card px-5 py-5">
					<h2 className="block-title">{t("library.downloadHere")}</h2>
					<a
						className="py-4 mt-2"
						style={{ textDecoration: "underline", display: "inline-block", fontSize: "20px" }}
						href="pdf/LikeToken-Capacity-Profile.pdf"
						download
					>
						<i className="fas fa-file-download"></i> &nbsp;{t("library.link1")}
					</a>

					<a
						className="py-4 mt-2"
						style={{ textDecoration: "underline", display: "inline-block", fontSize: "20px" }}
						href="pdf/Like2Like&LikeToken.pdf"
						download
					>
						<i className="fas fa-file-download"></i> &nbsp;{t("library.link2")}
					</a>
				</div>
			</section>
		</div>
	);
};

export default Library;
