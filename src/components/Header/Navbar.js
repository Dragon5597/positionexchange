import React, { useContext } from "react";
import logo from "../../images/logo-likefit-white.png";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import useBreakpoint from "../../hooks/useBreakpoint";
import { pathRouter } from "../../constants";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";

import ContractContext from "../../context/ContractContext";
import { formatAddress } from "../../utils";

const Navbar = () => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();
  const { account, active } = useWeb3React();
  const { connectWeb3 } = useContext(ContractContext);
  const isMobile = breakpoint === "mobile";

  return (
    <header
      className="navbar-wrapper navbar-boxed navbar-simple-ghost  "
      style={{
        width: "100%",
        backgroundColor: "#1a202c",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="container-fluid">
        <div className="d-table-cell align-middle pr-md-3 ">
          <Link className="navbar-brand mr-1" to={pathRouter.home}>
            <img
              src={logo}
              alt="Like"
              style={{ width: "90%", position: "relative", marginTop: "20px" }}
            />
          </Link>
        </div>
        <div className="nav-PC">
          <div className="d-table-cell w-100 align-middle pl-md-3">
            <ul
              className="navbar  justify-content-lg-between"
              style={{ width: "100%" }}
            >
              {/* <li className="nav-item ">
                <a
                  className="nav-link "
                  href="/"
                  style={
                    {
                      // marginLeft: "200px",
                    }
                  }
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Trading
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#technology">
                  Exchange
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#technology">
                  Pool
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#event">
                  Farming
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  NFTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Docs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Whitepaper
                </a>
              </li> */}
              <li className="nav-item">
                {active ? (
                  <button
                    className="btn_nav"
                    data-toggle="modal"
                    data-target="#modalWallet"
                  >
                    {formatAddress(account)}
                  </button>
                ) : (
                  <button className="btn_nav" onClick={connectWeb3}>
                    Connet To Wallet
                  </button>
                )}
              </li>
            </ul>
            <div>
              {/* <ul className="navbar-buttons d-inline-block align-middle">
                <li className="d-block d-lg-none">
                  <a href="#mobile-menu" data-toggle="offcanvas">
                    <i className="fe-icon-menu"></i>
                  </a>
                </li>
                {!isMobile && (
                  <li>
                    <a href="#" data-toggle="search">
                      <i className="fe-icon-search"></i>
                    </a>
                  </li>
                )}
              </ul> */}
              {/* {!isMobile && <Language />} */}
            </div>
          </div>
        </div>
      </div>

      <label for="nav-mobile-input" className="nav-bars-btn">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="svg-inline--fa fa-bars fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </label>

      <input
        type="checkbox"
        hidden
        name=""
        className="nav_input"
        id="nav-mobile-input"
      ></input>
      <label for="nav-mobile-input" className="nav__overlay"></label>
      <div className="nav__mobile">
        <label for="nav-mobile-input" className="nav-mobile-close">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            class="svg-inline--fa fa-times fa-w-11"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </label>

        <ul
          className="nav__mobile-list  "
          style={{ fontSize: "16px", width: "100%" }}
        >
          {/* <li>
            <a className="nav-link-mobile " href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link-mobile " href="#">
              Trading
            </a>
          </li>
          <li>
            <a className="nav-link-mobile " href="#technology">
              Exchange
            </a>
          </li>
          <li>
            <a className="nav-link-mobile " href="#technology">
              Pool
            </a>
          </li>
          <li>
            <a className="nav-link-mobile " href="#event">
              Farming
            </a>
          </li>
          <li>
            <a className="nav-link-mobile " href="#footer">
              NFTS
            </a>
          </li>
          <li>
            <a className="nav-link-mobile " href="#footer">
              Docs
            </a>
          </li>
          <li>
            <a className="nav-link-mobile " href="#footer">
              Whitepaper
            </a>
          </li> */}
          <li>
            <button className="btn_nav-mobile ">Connect To Wallet</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
