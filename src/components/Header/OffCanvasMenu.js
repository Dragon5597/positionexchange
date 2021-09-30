import React from "react";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import { pathRouter } from "../../constants";
import { Link } from "react-router-dom";

const OffCanvasMenu = () => {
  const { t } = useTranslation();
  return (
    <div
      className="offcanvas-container is-triggered offcanvas-container-reverse"
      id="mobile-menu"
    >
      <span className="offcanvas-close">
        <i className="fe-icon-x"></i>
      </span>
      <div className="px-4 pb-4">
        <h6>Menu</h6>
        <div className="d-flex justify-content-between pt-2">
          <Language />
        </div>
      </div>
      <div
        className="offcanvas-scrollable-area border-top"
        style={{ height: "calc(100% - 235px)", top: "144px" }}
      >
        <div className="accordion mobile-menu" id="accordion-menu">
          <div className="card">
            <div className="card-header">
              <Link className="mobile-menu-link active" to={pathRouter.home}>
                {t("navbar.home")}
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a className="mobile-menu-link" href="#">
                {t("navbar.portfolio")}
              </a>
              <a
                className="collapsed"
                href="#about-submenu"
                data-toggle="collapse"
              ></a>
            </div>
            <div
              className="collapse"
              id="about-submenu"
              data-parent="#accordion-menu"
            >
              <div className="card-body">
                <ul>
                  <li className="dropdown-item">
                    <a href="#portfolio">Like mine</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#portfolio">Like staking</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#portfolio">Like games</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#portfolio">Like fit</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#portfolio">Like farming</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#portfolio">Like miner - Like mining</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#portfolio">Like NFT platform</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#portfolio">Upcoming Event</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a className="mobile-menu-link" href="#technology">
                {t("navbar.technology")}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <Link className="mobile-menu-link" to={pathRouter.library}>
                {t("navbar.library")}
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a className="mobile-menu-link" href="#event">
                {t("navbar.event")}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a className="mobile-menu-link" href="#footer">
                {t("navbar.contact")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-footer px-4 pt-3 pb-2 text-center">
        <a className="social-btn sb-style-3 sb-twitter" href="#">
          <i className="socicon-twitter"></i>
        </a>
        <a className="social-btn sb-style-3 sb-facebook" href="#">
          <i className="socicon-facebook"></i>
        </a>
        <a className="social-btn sb-style-3 sb-pinterest" href="#">
          <i className="socicon-pinterest"></i>
        </a>
        <a className="social-btn sb-style-3 sb-instagram" href="#">
          <i className="socicon-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
