import React, { useState } from "react";
import portfolioDemo from "../../../images/portfolio-demo.jpg";
import likeMinerImage from "../../../images/portfolio/like-miner.jpg";
import likeFitImage from "../../../images/portfolio/likefit.jpg";
import nftImage from "../../../images/portfolio/nft.png";
import likeStakingImage from "../../../images/portfolio/likestaking.png";
import farmingImage from "../../../images/portfolio/farming.jpg";
import eventImage from "../../../images/portfolio/event.jpg";
import likeUpImage from "../../../images/portfolio/likeup2.png";
import gameImage from "../../../images/portfolio/game.jpg";
import PortfolioDetails from "./PortfolioDetails";
import PortfolioItem from "./PortfolioItem";

import "../../../scss/portfolio.scss";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  // const { t } = useTranslation();
  // const portfolios = [
  // 	{
  // 		id: "like-mining",
  // 		title: "Like Mining - Like Miner",
  // 		title1: t("portfolio.like-mining.title1"),
  // 		title2: t("portfolio.like-mining.title2"),
  // 		title3: t("portfolio.like-mining.title3"),
  // 		image: likeMinerImage,
  // 		link: "https://mining.like2like.net",
  // 		isLikeMiner: true
  // 	},
  // 	{
  // 		id: "like-games",
  // 		title: "Like Games",
  // 		title1: t("portfolio.like-games.title1"),
  // 		title2: t("portfolio.like-games.title2"),
  // 		image: gameImage,
  // 		link: "#"
  // 	},
  // 	{
  // 		id: "like-fit",
  // 		title: "Like Fit",
  // 		title1: t("portfolio.like-fit.title1"),
  // 		title2: t("portfolio.like-fit.title2"),
  // 		title3: t("portfolio.like-fit.title3"),
  // 		image: likeFitImage,
  // 		link: "https://likefit.io"
  // 	},
  // 	{
  // 		id: "like-farming",
  // 		title: "Like Farming",
  // 		title1: t("portfolio.like-farming.title1"),
  // 		title2: t("portfolio.like-farming.title2"),
  // 		title3: t("portfolio.like-farming.title3"),
  // 		image: farmingImage,
  // 		link: "https://farm.cs9.io/farms",
  // 		actionText: "FARMING NOW",
  // 	},
  // 	{
  // 		id: "like-staking",
  // 		title: "Like Staking",
  // 		title1: t("portfolio.like-staking.title1"),
  // 		title2: t("portfolio.like-staking.title2"),
  // 		title3: t("portfolio.like-staking.title3"),
  // 		title4: t("portfolio.like-staking.title3"),
  // 		image: likeStakingImage,
  // 		link: "#"
  // 	},
  // 	{
  // 		id: "like-up",
  // 		title: "Like Up Card",
  // 		title1: t("portfolio.like-up.title1"),
  // 		title2: t("portfolio.like-up.title2"),
  // 		title3: t("portfolio.like-up.title3"),
  // 		image: likeUpImage,
  // 		link: "https://up.like2like.net/"
  // 	},
  // 	{
  // 		id: "like-nft",
  // 		title: "Like NFT Platform",
  // 		title1: t("portfolio.like-nft.title1"),
  // 		title2: t("portfolio.like-nft.title2"),
  // 		title3: t("portfolio.like-nft.title3"),
  // 		image: nftImage,
  // 		link: "#"
  // 	},
  // 	{
  // 		id: "like-upcomming",
  // 		title: "Like2Like Platform",
  // 		title1: t("portfolio.like-upcomming.title1"),
  // 		title2: t("portfolio.like-upcomming.title2"),
  // 		title3: t("portfolio.like-upcomming.title3"),
  // 		image: eventImage,
  // 		link: "https://like2like.org"
  // 	}
  // ];
  // const [portfolioData, setPortfolioData] = useState({});
  return (
    <div style={{ backgroundColor: "#171923" }}>
      <section id="portfolio" className="container py-2 mt-2">
        <h2
          className="h2 block-title text-center pt-3 mt-2"
          style={{
            fontWeight: "700",
            position: "relative",
            fontSize: "32px",
            color: "white",
          }}
        >
          OUR MAIN FEATURES
        </h2>
        <div className="main-features">
          <div className="features main-features__invert" style={{ flex: "1" }}>
            <h3
              style={{
                color: "#1ac486",
                textAlign: "center",
                marginTop: "194px",
              }}
            >
              Invest
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "White",
                marginTop: "50px",
                fontWeight: "800",
              }}
            >
              Let your Crypto work hard for you!
            </p>
            <p className="main-features-p">
              POSI holders can stake the tokens into the Staking Pools to
              receive rewards and transaction fees. Staking indirectly serves to
              support the system.
            </p>
            <p className="main-features__span">Learn More </p>
          </div>
          <div className="features main-features__build" style={{ flex: "1" }}>
            <h3
              style={{
                color: "#1ac486",
                textAlign: "center",
                marginTop: "194px",
              }}
            >
              Build
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "White",
                marginTop: "50px",
                fontWeight: "800",
                marginLeft: "40px",
              }}
            >
              Easy & Fast on-chain API creation!
            </p>
            <p className="main-features-p-buld">
              Position Exchange protocol is a staple of the DeFi infrastructure,
              an original financial permissionless development platform offering
              a flexible and versatile vAMM, providing developers with great
              flexibility and customizability.
            </p>
            <p className="main-features__span">Learn More </p>
          </div>
          <div className="features main-features__Trade" style={{ flex: "1" }}>
            <h3
              style={{
                color: "#1ac486",
                textAlign: "center",
                marginTop: "194px",
              }}
            >
              Trade
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "White",
                marginTop: "50px",
                fontWeight: "800",
              }}
            >
              Take your trading to the next level!
            </p>
            <p className="main-features-p">
              Trade on-chain derivatives with High Leverage, Low Fees, Low
              Slippage and Gas Costs. Position Exchange enables efficient
              trading at the best available price. Easily exchange ERC-20 tokens
              permissionless.
            </p>
            <p className="main-features__span">Learn More </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
