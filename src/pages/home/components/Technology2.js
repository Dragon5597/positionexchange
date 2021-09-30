import React from "react";
import mobileApp from "../../../images/mobile-app.jpg";
import phone from "../../../images/technology/bg-tech.png";
import { useTranslation } from "react-i18next";

const Technology2 = () => {
  const { t } = useTranslation();
  return (
    <div className="community" style={{ backgroundColor: "#171923" }}>
      <img src="assets/img/back-gr.svg" style={{ width: " 100%" }}></img>
      <section
        id="technology"
        style={{ backgroundColor: "#171923", marginTop: 0 }}
      >
        <div className="community_tt">
          <h2
            className="h2 block-title text-center pt-3 mt-2"
            style={{ color: "white" }}
          >
            By the Community, For the <br />
            Community
          </h2>
          <h3 className="community-h3">Position Exchange Token (POSI)</h3>
          <p style={{ textAlign: "center", color: "white" }}>
            POSI is the native BEP-20 Token to Position Exchange serving as the
            backbone of its Ecosystem
          </p>
        </div>

        <div className="community_content">
          <div className="token">
            <img
              className="community-img__left"
              src="https://position.exchange/img/home/token-buy-back.svg"
            ></img>
            <span className="community-span__right">
              Token Buy-back & Burn
              <p className="community-p__right">
                The sums generated from transaction taxes and trading fees are
                used to buy back POSI tokens from exchanges. Those tokens are
                burnt in order to reduce the overall POSI tokens circulation,
                stabilize the token price and create deflation.
              </p>
              <span className="learn-more__btn">Learn More </span>
            </span>
          </div>
          <div className="dao">
            <span className="community-span__left">
              DAO: Developed by the community
              <p className="community-p__left">
                Position Exchange is owned and operated by its community as a
                decentralized autonomous organization (DAO). The Position
                Exchange protocol is subject to a democratic and transparent
                voting system that enables POSI token holders to get involved
                and shape the future of Position Exchange.
              </p>
              <span className="learn-more__btn">Learn More </span>
            </span>
            <img
              className="community-img__right"
              src="https://position.exchange/img/home/DAO.svg"
            ></img>
          </div>
          <div className="stake">
            <img
              className="community-img__left "
              src="https://position.exchange/img/home/stake-earn.svg"
            ></img>
            <span className="community-span__right ">
              Stake & Earn Hold & Earn (RFI)
              <p className="community-p__right">
                Generate passive income by providing Liquidity or depositing
                your POSI tokens. POSI holders can stake the tokens into the
                staking pools to receive rewards. Staking indirectly serves to
                support the system. Position Exchange is implementing RFI
                Technology allowing rewards generation simply by HODLing POSI
                tokens. Applying a 1% fee to each transaction and distributing
                it to all token holders.
              </p>
              <span className="learn-more__btn">Learn More </span>
            </span>
          </div>
          <div className="position-echange">
            <span className="community-span__left">
              Position Exchange NFTs
              <p className="community-p__left">
                Postion Exchange is building a new NFT Protocol and introducing
                Crypto NFTs as a new feature. Users can mint NFTs with unique
                characteristics and different rarities ( by depositing POSI
                tokens ) then stake it in the NFT Pools to generate rewards.
                Issue, trade NFTs and participate in auctions!
              </p>
              <span className="learn-more__btn">Learn More </span>
            </span>

            <img
              className="community-img__right "
              src="https://position.exchange/img/home/NFT.svg"
            ></img>
          </div>
          <div className="deflationary-token">
            <img
              className="community-img__left"
              src="https://position.exchange/img/home/position-coin.svg"
            ></img>
            <span className="community-span__right">
              A Deflationary Token
              <p className="community-p__right">
                Position Exchange’s team is implementing several anti- inflation
                measures such as Anti-Whale, Harvest lock up period, token burn
                and emission rate control to keep the POSI token stable,
                encourage holding and ensure the best benefits for the POSI
                community.
              </p>
              <span className="learn-more__btn">Learn More </span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology2;
