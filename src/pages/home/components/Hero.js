import React, { useState, useEffect, useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import heroBg from "../../../images/hero-bg.jpg";
import { useTranslation } from "react-i18next";
import Typical from "react-typical";
import Promise from "bluebird";
import moment from "moment";
import __ from "lodash";
import { useQuery, gql } from "@apollo/client";
import ContractContext from "../../../context/ContractContext";
import { formatAddress, numberWithCommas } from "../../../utils";
import { chainData } from "../../../constants";
import OurTeam from "./OurTeam";
import { number } from "prop-types";

const QUERY = gql`
  query getUser($address: String) {
    getUser(address: $address) {
      _id
      address
      isReceive
      isCreated
      donated
      got
      createdAt
      step
      waiting
    }
    getTrans(address: $address) {
      hash
      from
      to
      amount
      createdAt
    }
    giveAddress {
      address
    }
  }
`;

const Hero = () => {
  const { t } = useTranslation();
  const [amountToken, setAmountToken] = useState("");
  const [balance, setBalance] = useState("");
  const { deactivate, active, account, library } = useWeb3React();
  const { connectWeb3, contract } = useContext(ContractContext);
  const {
    loading: loadingGraph,
    error,
    data,
    refetch,
  } = useQuery(QUERY, {
    variables: { address: account },
    fetchPolicy: "no-cache",
  });
  const step = data && data.getUser ? data.getUser.step : 1;

  useEffect(() => {
    if (!loadingGraph) {
      console.log("close loading");
      setTimeout(hideLoading, 1000);
    }
  }, [loadingGraph]);

  useEffect(() => {
    if (contract) {
      getUserData();
      console.log("[contract]", contract);
      contract.events.DonateUser("DonateUser", {}, (from, tran) => {
        if (
          tran.returnValues.from === account ||
          tran.returnValues.to === account
        ) {
          getUserData();
        }
      });
    } else {
      setBalance("");
      setAmountToken("");
    }
  }, [contract]);

  const getUserData = () => {
    Promise.all([
      library.eth.getBalance(account),
      contract.methods.balanceOf(account).call(),
      contract.methods.symbol().call(),
    ]).then(([balance, amount, symbol]) => {
      setBalance(library.utils.fromWei(balance, "ether"));
      setAmountToken(numberWithCommas(amount) + " " + symbol);
      refetch();
    });
  };

  const enableLoading = () =>
    window.$("#modalLoading").modal({ keyboard: false });
  const hideLoading = () => window.$("#modalLoading").modal("hide");

  const getClassName = (_step) =>
    step >= _step ? "table-verify active" : "table-verify";
  const checkedImg = (
    <img
      alt="checked_step"
      src="assets/img/checked.svg"
      style={{ width: 24, height: 24 }}
    />
  );

  const giveUser = async (address) => {
    if (!address) address = data.giveAddress[0].address;
    enableLoading();
    try {
      const response = await contract.methods
        .donateToken(address, 50)
        .send({ from: account });
      console.log("response send", response, moment().valueOf());
      getUserData();
    } catch (error) {
      console.log("giveUser err", error);
    }
    hideLoading();
  };

  return (
    <>
      <div className="banner-PC">
        <section
          id="hero-banner"
          className="bg-center bg-no-repeat py-5"
          style={{
            backgroundColor: "rgba(23, 25, 35)",
          }}
        >
          <div className="banner">
            <div className="col-xs-12 col-md-6 text-center text-md-left pb-4">
              <div
                className="banner__left"
                style={{ paddingLeft: "113px", paddingTop: "200px" }}
              >
                <div className="full-title">
                  <div className="title-static">
                    <h2
                      style={{
                        display: "inline",
                        color: "white",
                        marginTop: "0px",
                        fontSize: "36px",
                        fontWeight: "600px",
                      }}
                    >
                      Bringing ochain{" "}
                    </h2>
                  </div>
                  <div className="title-animation">
                    <h2
                      className="h2-abc h3 mt-2 py-3 py-lg-0"
                      style={{
                        color: "white",
                        marginTop: "120px",
                        fontSize: "36px",
                        fontWeight: "600px",
                      }}
                    >
                      <Typical
                        steps={[
                          "Derivatives",
                          2000,
                          "Trading Experience",
                          2000,
                        ]}
                        loop={Infinity}
                        wrapper="h"
                      />
                    </h2>
                  </div>
                </div>

                <h2
                  className="abc_h2"
                  style={{
                    color: "white",
                    fontSize: "36px",
                    fontWeight: "600px",
                  }}
                >
                  DeFi Ecosystem
                </h2>
                <p
                  className="text-muted d-lg-block pb-3"
                  style={{ fontSize: "16px", textAlign: "justify" }}
                >
                  Position Exchange is a Decentralized Trading Protocol
                  operating on Binance Smart Chain (BSC), that enables traders,
                  liquidity providers and developers to participate in an open
                  financial market with no barriers to entry. No authorization
                  is required to use the open source Position Exchange protocol.
                </p>
                <span
                  className="learn-more__btn"
                  style={{
                    display: "block",
                    fontSize: "16px",
                    color: "#1ac486",
                  }}
                >
                  Learn more!
                </span>
                <div className="banner__left-btn">
                  <a className=" mr-3 mb-3" href="#">
                    <span
                      className="btn"
                      style={{
                        width: "230px ",
                        height: "62px",
                        fontSize: "16px",
                      }}
                    >
                      Migrate POSI V2
                    </span>
                  </a>
                  <a className="  mr-3 mb-3" href="#">
                    <span
                      className="btn"
                      style={{
                        width: "230px ",
                        height: "62px",
                        fontSize: "16px",
                      }}
                    >
                      Buy POS!
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6" style={{ color: "white" }}>
              <div className="banner__right">
                <span className="banner__right-title">
                  EMBARK ON THE NEW COMMUNITY DRIVEN PROJECT
                </span>
                <p className="banner__right-description">
                  <div>
                    Join the AIRDROP and participate in the Exclusive
                    <br />
                    Public Sales Lottery!
                  </div>
                </p>
                <p className="banner__right-content">
                  1,000,000 USD is waiting for you
                </p>
                <div className={getClassName(1)} style={{ marginTop: "22px" }}>
                  <div className="table-verify-content">
                    <span className="table-verify__title">
                      Verify your Wallet
                    </span>
                    <span className="table-verify__span">
                      Your wallet:{" "}
                      <span className="table-verify__title">{amountToken}</span>
                    </span>
                  </div>
                  {active ? (
                    checkedImg
                  ) : (
                    <button className="btn_connect" onClick={connectWeb3}>
                      Connect
                    </button>
                  )}
                </div>
                <div
                  className={getClassName(2)}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    marginLeft: "1px",
                  }}
                >
                  <div className="table-verify-content">
                    <span className="table-verify__title">Give 1st user</span>
                    <span className="table-verify__span">50$</span>
                  </div>
                  {step > 2 && checkedImg}
                  {step === 2 && (
                    <button
                      className="btn_connect"
                      data-toggle="modal"
                      data-target="#modalGive"
                    >
                      Pick
                    </button>
                  )}
                </div>
                <div
                  className={getClassName(3)}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    marginLeft: "1px",
                  }}
                >
                  <div className="table-verify-content">
                    <span className="table-verify__title">Give 2nd user</span>
                    <span className="table-verify__span">50$</span>
                  </div>
                  {step > 3 && checkedImg}
                  {step === 3 && (
                    <button
                      className="btn_connect"
                      data-toggle="modal"
                      data-target="#modalGive"
                    >
                      Pick
                    </button>
                  )}
                </div>
                <div
                  className={getClassName(4)}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    marginLeft: "1px",
                  }}
                >
                  <div className="table-verify-content">
                    <span className="table-verify__title">
                      Awaiting receive...
                    </span>
                    <span className="table-verify__span">Total 200$</span>
                  </div>
                  {step === 4 && (
                    <p className="table-verify__title">
                      {data && data.getUser ? data.getUser.waiting : 0}/4
                    </p>
                  )}
                </div>
                <div
                  className={getClassName(5)}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    marginLeft: "1px",
                  }}
                >
                  <div className="table-verify-content">
                    <span className="table-verify__title">Level Up</span>
                    <span className="table-verify__span">You got 80$</span>
                  </div>
                </div>
                <br />
                <div
                  className="text-center"
                  style={{ cursor: "pointer" }}
                  data-toggle="modal"
                  data-target="#modalHistory"
                >
                  <p style={{ color: "#1ac486" }}>
                    View History{" "}
                    <img
                      alt="history"
                      src="assets/img/history.svg"
                      style={{ width: 24, height: 24 }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="banner-mobile">
        <section
          id="hero-banner"
          className="bg-center bg-no-repeat py-5"
          style={{
            backgroundColor: "rgba(23, 25, 35)",
            maxWidth: "100%",
          }}
        >
          <div className="banner">
            <div className="col-xs-12 col-md-6 text-center text-md-left pb-4">
              <div
                className="banner__left"
                style={{ paddingLeft: "113px", paddingTop: "200px" }}
              >
                <div className="full-title">
                  <div className="title-static">
                    <h2
                      style={{
                        display: "inline",
                        color: "white",
                        marginTop: "0px",
                        fontSize: "36px",
                        fontWeight: "600px",
                      }}
                    >
                      Bringing ochain{" "}
                    </h2>
                  </div>
                  <div className="title-animation">
                    <h2
                      className="h2-abc h3 mt-2 py-3 py-lg-0"
                      style={{
                        color: "white",
                        marginTop: "120px",
                        fontSize: "36px",
                        fontWeight: "600px",
                      }}
                    >
                      <Typical
                        steps={[
                          "Derivatives",
                          2000,
                          "Trading Experience",
                          2000,
                        ]}
                        loop={Infinity}
                        wrapper="h"
                      />
                    </h2>
                  </div>
                </div>

                <h2
                  className="abc_h2"
                  style={{
                    color: "white",
                    fontSize: "36px",
                    fontWeight: "600px",
                  }}
                >
                  DeFi Ecosystem
                </h2>
                <p
                  className="text-muted d-lg-block pb-3"
                  style={{ fontSize: "16px", textAlign: "justify" }}
                >
                  Position Exchange is a Decentralized Trading Protocol
                  operating on Binance Smart Chain (BSC), that enables traders,
                  liquidity providers and developers to participate in an open
                  financial market with no barriers to entry. No authorization
                  is required to use the open source Position Exchange protocol.
                </p>
                <span
                  className="learn-more__btn"
                  style={{
                    display: "block",
                    fontSize: "16px",
                    color: "#1ac486",
                  }}
                >
                  Learn more!
                </span>
                <div className="banner__left-btn">
                  <a className=" mr-3 mb-3" href="#">
                    <span
                      className="btn"
                      style={{
                        width: "230px ",
                        height: "62px",
                        fontSize: "12px",
                      }}
                    >
                      Migrate POSI V2
                    </span>
                  </a>
                  <a className="  mr-3 mb-3" href="#">
                    <span
                      className="btn"
                      style={{
                        width: "230px ",
                        height: "62px",
                        fontSize: "12px",
                      }}
                    >
                      Buy POS!
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6" style={{ color: "white" }}>
              <div className="banner__right">
                <span className="banner__right-title">
                  EMBARK ON THE NEW COMMUNITY DRIVEN PROJECT
                </span>
                <p className="banner__right-description">
                  <div>
                    Join the AIRDROP and participate in the Exclusive
                    <br />
                    Public Sales Lottery!
                  </div>
                </p>
                <p className="banner__right-content">
                  1,000,000 USD is waiting for you
                </p>
                <div
                  className={getClassName(1)}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    marginLeft: "1px",
                  }}
                >
                  <div className="table-verify-content">
                    <span className="table-verify__title">
                      Verify your Wallet
                    </span>
                    <span className="table-verify__span">
                      Your wallet:{" "}
                      <span className="table-verify__title">{amountToken}</span>
                    </span>
                  </div>
                  {active ? (
                    checkedImg
                  ) : (
                    <button className="btn_connect" onClick={connectWeb3}>
                      Connect
                    </button>
                  )}
                </div>
                <div
                  className={getClassName(2)}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    marginLeft: "1px",
                  }}
                >
                  <div className="table-verify-content">
                    <span className="table-verify__title">Give 1st user</span>
                    <span className="table-verify__span">50$</span>
                  </div>
                  {step > 2 && checkedImg}
                  {step === 2 && (
                    <button
                      className="btn_connect"
                      data-toggle="modal"
                      data-target="#modalGive"
                    >
                      Pick
                    </button>
                  )}
                </div>
                <div
                  className={getClassName(3)}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    marginLeft: "1px",
                  }}
                >
                  <div className="table-verify-content">
                    <span className="table-verify__title">Give 2nd user</span>
                    <span className="table-verify__span">50$</span>
                  </div>
                  {step > 3 && checkedImg}
                  {step === 3 && (
                    <button
                      className="btn_connect"
                      data-toggle="modal"
                      data-target="#modalGive"
                    >
                      Pick
                    </button>
                  )}
                </div>
                <div
                  className={getClassName(4)}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    marginLeft: "1px",
                  }}
                >
                  <div className="table-verify-content">
                    <span className="table-verify__title">
                      Awaiting receive...
                    </span>
                    <span className="table-verify__span">Total 200$</span>
                  </div>
                  {step === 4 && (
                    <p className="table-verify__title">
                      {data && data.getUser ? data.getUser.waiting : 0}/4
                    </p>
                  )}
                </div>
                <div
                  className={getClassName(5)}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    marginLeft: "1px",
                  }}
                >
                  <div className="table-verify-content">
                    <span className="table-verify__title">Level Up</span>
                    <span className="table-verify__span">You got 80$</span>
                  </div>
                </div>
                <br />
                <div
                  className="text-center"
                  style={{ cursor: "pointer" }}
                  data-toggle="modal"
                  data-target="#modalHistory"
                >
                  <p style={{ color: "#1ac486" }}>
                    View History{" "}
                    <img
                      alt="history"
                      src="assets/img/history.svg"
                      style={{ width: 24, height: 24 }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ backgroundColor: "rgba(23, 25, 35)" }}>
        <img
          src="assets/img/back-gr.svg"
          alt="img-footer"
          style={{ width: "100%" }}
        />
      </div>
      <div className="modal fade" data-backdrop="static" id="modalLoading">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className="modal-content"
            style={{
              background: "transparent",
              justifyContent: "center",
              border: "none",
              boxShadow: "none",
              flexDirection: "row",
            }}
          >
            <div
              className="spinner-grow text-light"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="modalWallet" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Your Wallet</h4>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span ari-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <p style={{ color: "#718096" }}>{account}</p>
              <p className="learn-more__btn">
                {balance} {chainData.nativeCurrency.symbol}
              </p>
              <a
                href={`https://bscscan.com/address/${account}`}
                target="_blank"
              >
                View on BscScan
              </a>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary btn-sm"
                type="button"
                data-dismiss="modal"
                onClick={deactivate}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="modalGive" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Select an account</h4>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span ari-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <ul className="list-group list-group-flush">
                {data && data.giveAddress
                  ? __.difference(
                      data.giveAddress.map((item) => item.address),
                      data.getUser.donated
                    ).map((item) => (
                      <li
                        key={item}
                        className="list-group-item chakra-background"
                        data-dismiss="modal"
                        onClick={() => giveUser(item)}
                      >
                        {item}
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary btn-sm"
                type="button"
                data-dismiss="modal"
                onClick={() => giveUser()}
              >
                Random
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="modalHistory">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">History</h4>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span ari-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-0">
              <div className="tokenomics-statistics__content">
                {data && data.getTrans && (
                  <>
                    <div className="row-tk">
                      {data.getTrans.map((item) => (
                        <div className="row-tk__t">
                          {item.from === account ? "Give" : "Receive"}
                        </div>
                      ))}
                    </div>

                    <div className="row-tk">
                      {data.getTrans.map((item) => (
                        <div className="row-tk__title">
                          {item.from === account
                            ? formatAddress(item.to)
                            : formatAddress(item.from)}
                        </div>
                      ))}
                    </div>

                    <div className="row-tk">
                      {data.getTrans.map((item) => (
                        <div className="row-tk__nb">
                          {numberWithCommas(item.amount)}
                        </div>
                      ))}
                    </div>
                    <div className="row-tk">
                      {data.getTrans.map((item) => (
                        <div className="row-tk__n">
                          {moment(item.createdAt).format("MMM DD HH:mm")}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
