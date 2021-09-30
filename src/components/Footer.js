import React from "react";
// import { useTranslation } from "react-i18next";
// import { SOCIAL_LINK } from "../constants";
import "../scss/footer.scss";
import footerLogo from "../images/footer-logo.png";
import footerBg from "../images/footer-bg.png";

const Footer = () => {
  // const { t } = useTranslation();
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#171923" }}>
        <footer
          id="footer"
          className="footer-area bg-img"
          style={{
            backgroundImage: `url(${footerBg})`,
            backgroundColor: "#171923",
          }}
        >
          <div className="footer-content-area ">
            <div className="container">
              <div className="footer">
                <div className="footer-left">
                  <div className="footer-logo">
                    <a href="/">
                      <img src={footerLogo} alt="logo" width="200px" />
                    </a>
                  </div>
                  <p
                    style={{
                      color: "white",
                      display: "block",
                      textAlign: "center",
                      fontSize: "16px",
                    }}
                  >
                    The Next-Gen Decentralized Exchange & Trading Platform
                  </p>

                  {/* Social Icon */}
                  <div className="icon-footer">
                    <div
                      className="footer-social-info wow fadeInUp"
                      data-wow-delay="0.4s"
                      style={{ marginLeft: "40px" }}
                    >
                      <a
                        href="https://twitter.com/Like2likeN"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="img/icons/twitter-logo.png"
                          alt="logo"
                          style={{ width: 28 }}
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/like2like.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="img/icons/facebook-logo2.png"
                          alt="logo"
                          style={{ width: 15, marginRight: 5 }}
                        />
                      </a>
                      <a
                        href="https://t.me/hotrolike2like"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="img/icons/telegram-logo.png"
                          alt="logo"
                          style={{ width: 20 }}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* <div className="col-12 col-md-2"></div> */}
                <div className="footer-right">
                  <div className="col-12 col-md-5 align-self-end">
                    {/* Content Info */}
                    <div className="contact_info_area d-sm-flex justify-content-between">
                      {/* Content Info  */}
                      <div
                        className="contact_info text-center wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <h5 className="text-uppercase">Governance</h5>
                        <a href="/term-of-use">
                          <p>Forum</p>
                        </a>
                        <a href="/private-policy">
                          <p>Voting</p>
                        </a>
                        <a href="/term-of-use">
                          <p>Announcements</p>
                        </a>
                      </div>
                      <div
                        className="contact_info text-center wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <h5 className="text-uppercase">Governance</h5>
                        <a href="/term-of-use">
                          <p>Forum</p>
                        </a>
                        <a href="/private-policy">
                          <p>Voting</p>
                        </a>
                        <a href="/term-of-use">
                          <p>Announcements</p>
                        </a>
                      </div>
                      <div
                        className="contact_info text-center wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <h5 className="text-uppercase">Governance</h5>
                        <a href="/term-of-use">
                          <p>Forum</p>
                        </a>
                        <a href="/private-policy">
                          <p>Voting</p>
                        </a>
                        <a href="/term-of-use">
                          <p>Announcements</p>
                        </a>
                      </div>
                      <div
                        className="contact_info text-center wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <h5 className="text-uppercase">Governance</h5>
                        <a href="/term-of-use">
                          <p>Forum</p>
                        </a>
                        <a href="/private-policy">
                          <p>Voting</p>
                        </a>
                        <a href="/term-of-use">
                          <p>Announcements</p>
                        </a>
                      </div>
                      <div
                        className="contact_info text-center wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <h5 className="text-uppercase">Governance</h5>
                        <a href="/term-of-use">
                          <p>Forum</p>
                        </a>
                        <a href="/private-policy">
                          <p>Voting</p>
                        </a>
                        <a href="/term-of-use">
                          <p>Announcements</p>
                        </a>
                      </div>

                      {/* Content Info */}
                      {/* <div
                    className="contact_info text-center wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <h5 className="text-uppercase">{t("footer.contact_us")}</h5>
                    <p>
                      <a
                        href="mailto:support@like2like.org"
                        style={{ color: "#007bff" }}
                      >
                        support@like2like.org
                      </a>
                    </p>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Footer;
