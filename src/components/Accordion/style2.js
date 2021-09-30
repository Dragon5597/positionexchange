import React from "react";
import PropTypes from "prop-types";

const style2 = ({ data }) => {
	return (
		<div className="accordion accordion-style-2" id="accordion2">
			{data?.map((acc, index) => (
				<div className="card" key={acc?.id ? acc?.id : index}>
					<div className="card-header">
						<h6>
							<a
								className="collapsed"
								href={acc?.id ? `accordion.html#collapse${acc?.id}` : `accordion.html#collapse${index}`}
								data-toggle="collapse"
							>
								{acc?.icon && acc?.icon}
								{acc?.title ? acc?.title : "Please convert props type object includes field title"}
							</a>
						</h6>
					</div>
					<div
						className="collapse"
						id={acc?.id ? `collapse${acc?.id}` : `collapse${index}`}
						data-parent="#accordion2"
					>
						<div className="card-body">
							<div className="opacity-75">
								{acc?.description
									? acc?.description
									: "Please convert props type object includes field description"}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

style2.propTypes = {
	data: PropTypes.array.isRequired
};

export default style2;
