import React from "react";
import PropTypes from "prop-types";
import AccordionStyle1 from "./style1";
import AccordionStyle2 from "./style2";
import AccordionStyle3 from "./style3";

const Accordion = ({ data, type }) => {
	return (
		<>
			{!data && <span>Please add data in props</span>}
			{typeof type !== "number" && <AccordionStyle1 data={data} />}
			{type === 1 && <AccordionStyle1 data={data} />}
			{type === 2 && <AccordionStyle2 data={data} />}
			{type === 3 && <AccordionStyle3 data={data} />}
		</>
	);
};

Accordion.propTypes = {
	data: PropTypes.object.isRequired,
	type: PropTypes.number
};

Accordion.defaultProps = {
	type: 1
};

export default Accordion;
