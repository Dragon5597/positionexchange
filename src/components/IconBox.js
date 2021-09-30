import React from "react";
import PropTypes from "prop-types";

const IconBox = ({ data }) => {
	return (
		<div className="row py-4">
			{data?.map((arr) => (
				<div className="col-lg-4 col-sm-6">
					<div className="icon-box text-center mx-auto">
						<div className="icon-box-icon">{data.icon}</div>
						<h3 className="icon-box-title">{arr.title}</h3>
						<p className="icon-box-text">{arr.description}</p>
						<a className="icon-box-link" href="icon-box.html#">
							Learn more<i className="fe-icon-arrow-right"></i>
						</a>
					</div>
				</div>
			))}
		</div>
	);
};

IconBox.propTypes = {
	data: PropTypes.object.isRequired
};

export default IconBox;
