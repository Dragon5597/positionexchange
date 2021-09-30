import React from "react";
import { useTranslation } from "react-i18next";
import "../../../scss/ourpartner.scss";
import cse from "../../../images/partner/cse.png";
import master from "../../../images/partner/master.png";
import water from "../../../images/partner/water.png";
import ochain from "../../../images/partner/ochain.png";
import sri from "../../../images/partner/sri.png";
import otalk from "../../../images/partner/otalk.png";
import aws from "../../../images/partner/aws.png";
import nft from "../../../images/partner/nft.jpg";

const OurPartner = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div
        className="heading-branch__haj "
        style={{
          backgroundColor: "#1a202c",
          height: "600px",
        }}
      >
        <div className="tokenomics-statistics">
          <div className="tokenomics-statistics__title">
            Tokenomics Statistics
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurPartner;
