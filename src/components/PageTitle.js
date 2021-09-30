import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const PageTitle = ({ title, description, image, url }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />

			{/* OpenGraph tags */}
			<meta property="og:title" content={title} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />
			<meta property="og:description" content={description} />

			{/* Twitter Card tags */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content="{site.siteMetadata.author}" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:description" content={description} />
		</Helmet>
	);
};

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string,
	url: PropTypes.string
};

export default PageTitle;
