import React from "react";
import PropTypes from "prop-types";

const Animated = ({
	startNumber,
	endNumber,
	description,
	icon,
	color,
	style,
	children,
	prefix,
	suffix,
	isInsideCard,
	align
}) => {
	return (
		<>
			{isInsideCard ? (
				<div className="card">
					<div className="card-body">
						<div
							className={`animated-digits text-${align}`}
							data-number={endNumber?.toString()}
							style={style}
						>
							{icon && <span className="animated-digits-icon">{icon}</span>}
							<h5 className="animated-digits-digit" style={{ color: color }}>
								{prefix && prefix}
								<span>{startNumber?.toString()}</span>
								{suffix && suffix}
							</h5>
							{description && (
								<p className="animated-digits-text" style={{ color: color }}>
									{description}
								</p>
							)}
							{children}
						</div>
					</div>
				</div>
			) : (
				<div className={`animated-digits text-${align}`} data-number={endNumber?.toString()} style={style}>
					{icon && <span className="animated-digits-icon">{icon}</span>}
					<h5 className="animated-digits-digit" style={{ color: color }}>
						{prefix && prefix}
						<span>{startNumber?.toString()}</span>
						{suffix && suffix}
					</h5>
					{description && (
						<p className="animated-digits-text" style={{ color: color }}>
							{description}
						</p>
					)}
					{children}
				</div>
			)}
		</>
	);
};

Animated.defaultProps = {
	startNumber: 0,
	endNumber: 1000,
	isInsideCard: false,
	align: "left"
};

Animated.propTypes = {
	startNumber: PropTypes.number,
	endNumber: PropTypes.number,
	description: PropTypes.string,
	icon: PropTypes.node,
	color: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node,
	prefix: PropTypes.node,
	suffix: PropTypes.node,
	isInsideCard: PropTypes.bool,
	align: PropTypes.string
};

export default Animated;
