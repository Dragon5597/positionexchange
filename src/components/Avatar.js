import React from "react";
import PropTypes from "prop-types";
import "../scss/avatar.scss";

const Avatar = ({ src, size, style }) => {
	return (
		<div>
			<img src={src} className={`${size}`} alt="Avatar" style={style} />
		</div>
	);
};

Avatar.propTypes = {
	src: PropTypes.string,
	size: PropTypes.string,
	style: PropTypes.object
};

Avatar.defaultProps = {
	src: "http://imgs.vietnamnet.vn/Images/2013/03/19/09/20130319095227_theluoi.jpg",
	size: "default"
};

export default Avatar;
