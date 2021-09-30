import React from "react";
import PropTypes from "prop-types";

const Alert = ({ type, icon, title, description, children, message, isTextCenter, style }) => {
	return (
		<div
			className={`alert alert-${type} alert-dismissible fade show mb-4 ${isTextCenter ? "text-center" : null}`}
			style={style}
		>
			<span className="close" data-dismiss="alert"></span>
			{title && <h3>{title}</h3>}
			{description && <p>{description}</p>}
			<>
				{icon && icon}
				{message}
				{children}
			</>
		</div>
	);
};

Alert.defaultProps = {
	type: "secondary"
};

Alert.propTypes = {
	type: PropTypes.string,
	icon: PropTypes.node,
	title: PropTypes.node,
	description: PropTypes.node,
	children: PropTypes.node,
	message: PropTypes.node,
	isTextCenter: PropTypes.bool
};

export default Alert;
