import React from "react";
import PropTypes from "prop-types";
import "../../../scss/portfolio-details.scss";
import { isUrl } from "../../../utils/isUrl";

const style = {
	list: {
		padding: "15px 0",
		textAlign: "justify",
		fontSize: "16px"
	},
	flexCenter: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}
};

const PortfolioDetails = ({ portfolio }) => {
	const { id, title, title1, title2, title3, title4, image, link, isLikeMiner, actionText } = portfolio;
	return (
		<div className="modal fade" id="modalCentered" tabindex="-1" role="dialog">
			<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">{title}</h4>
						<button className="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body" style={{ paddingBottom: "30px" }}>
						<div className="row">
							<div className="col-xs-12 col-md-6" style={style.flexCenter}>
								<img src={image} style={{ width: "90%", height: "300px" }} />
							</div>
							<div className="col-xs-12 col-md-6">
								<ul style={{ listStyleType: "revert", width: "90%" }}>
									{title1 && <li style={style.list}>{title1}</li>}
									{title2 && <li style={style.list}>{title2}</li>}
									{title3 && <li style={style.list}>{title3}</li>}
									{title4 && <li style={style.list}>{title4}</li>}
								</ul>
							</div>
						</div>
					</div>
					{/* <div class="modal-footer">
                        <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Close</button>
                        <a class="btn btn-primary btn-sm" href={link}>Read More</a>
                    </div> */}
					{isUrl(link) && (
						<div className="modal-footer">
							{/* <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Close</button> */}
							<a className="btn btn-primary btn-sm" href={link} target="_blank" rel="noreferrer">
								{actionText || 'Read more'}
							</a>
							{isLikeMiner && (
								<a
									className="btn btn-primary btn-sm"
									href="https://miner.like2like.net"
									target="_blank"
									rel="noreferrer"
								>
									Buying Now
								</a>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

PortfolioDetails.propTypes = {
	portfolio: PropTypes.object.isRequired
};

export default PortfolioDetails;
