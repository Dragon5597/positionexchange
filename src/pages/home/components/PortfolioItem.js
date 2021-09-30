import React from 'react';
import PropTypes from 'prop-types';

const PortfolioItem = ({ portfolio, setPortfolioData }) => {
    const { title, id, title1, title2, title3, title4, image, link } = portfolio;
    const handleOpenDetails = () => {
       setPortfolioData(portfolio);
    }
    return (
        <div className="col-lg-3 col-md-4 col-sm-6" onClick={handleOpenDetails}>
            <div className="d-block text-decoration-none mb-4 outline-none border-none" data-toggle="modal" data-target="#modalCentered" style={{ border: 'none', outline: 'none', backgroundColor: '#fff', cursor: 'pointer'}}>
                <figure className="figure">
                    {/* <span className="badge badge-secondary">48 posts</span> */}
                    <img className="figure-img" src={image} alt="im1" />
                    <figcaption className="figure-caption h6 text-lg text-center mb-2">{title}</figcaption>
                </figure>
            </div>
		</div>
    )
}

PortfolioItem.propTypes = {
    portfolio: PropTypes.object.isRequired
}

export default PortfolioItem
