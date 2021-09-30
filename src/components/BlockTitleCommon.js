import React from "react";
import PropTypes from "prop-types";

const BlockTitleCommon = ({ title, description }) => {
	return (
		<div className="pb-4 pt-2 text-center">
			<h3 className="block-title mb-30">
				{title}
				<small className="py-4" style={{ lineHeight: 2 }}>
					{description}
				</small>
			</h3>
		</div>
	);
};

BlockTitleCommon.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
};

export default BlockTitleCommon;
