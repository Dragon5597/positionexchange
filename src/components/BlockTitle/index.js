import React from "react";
import PropTypes from "prop-types";

const BlockTitle = (component, title, subTitle, icon, align, style, children) => {
	return (
		<>
			{component === "h1" && (
				<h2 className={`block-title text-${align}`} style={style}>
					{icon && <span className="block-title-icon">{icon}</span>}
					{title} {subTitle && <small>{subTitle}</small>}
					{children}
				</h2>
			)}
			{component === "h2" && (
				<h2 className={`block-title text-${align}`} style={style}>
					{icon && <span className="block-title-icon">{icon}</span>}
					{title} {subTitle && <small>{subTitle}</small>}
					{children}
				</h2>
			)}
			{component === "h3" && (
				<h3 className={`block-title text-${align}`} style={style}>
					{icon && <span className="block-title-icon">{icon}</span>}
					title {subTitle && <small>{subTitle}</small>}
					{children}
				</h3>
			)}
			{component === "h4" && (
				<h4 className={`block-title text-${align}`} style={style}>
					{icon && <span className="block-title-icon">{icon}</span>}
					{title} {subTitle && <small>{subTitle}</small>}
					{children}
				</h4>
			)}
			{component === "h5" && (
				<h5 className={`block-title text-${align}`} style={style}>
					{icon && <span className="block-title-icon">{icon}</span>}
					{title} {subTitle && <small>{subTitle}</small>}
					{children}
				</h5>
			)}
			{component === "h6" && (
				<h6 className={`block-title text-${align}`} style={style}>
					{icon && <span className="block-title-icon">{icon}</span>}
					{title} {subTitle && <small>{subTitle}</small>}
					{children}
				</h6>
			)}
		</>
	);
};

BlockTitle.propTypes = {
	component: PropTypes.string,
	title: PropTypes.node,
	subTitle: PropTypes.node,
	icon: PropTypes.node,
	align: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node
};

BlockTitle.defaultProps = {
	component: "h2",
	align: "left"
};

export default BlockTitle;
