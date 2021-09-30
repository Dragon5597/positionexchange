import React from "react";
import { useTranslation } from "react-i18next";
// import { SOCIAL_LINK } from "../../../constants";
// import bgTeam from "../../../images/team/bg-team-2.png";
// import iconTeam from "../../../images/team/icon-team.svg";
import "../../../scss/ourteam.scss";

const OurTeam = ({ mapData }) => {
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: "#171923" }}>
      <div className="tokenomics-statistics">
        <h2 className="tokenomics-statistics__h2">History</h2>
        <div className="tokenomics-statistics__content">
          <div className="row-tk">
            <div className="row-tk__title">Farms & Pools</div>
            <div className="row-tk__title">Airdrop</div>
            <div className="row-tk__title">Team & Advisors</div>
          </div>

          <div className="row-tk">
            <div className="row-tk__nb">80.000.000</div>
            <div className="row-tk__nb">1.000.000</div>
            <div className="row-tk__nb">10.000.000</div>
          </div>
          <div className="row-tk">
            <div className="row-tk__t">POSI</div>
            <div className="row-tk__t">POSI</div>
            <div className="row-tk__t">POSI</div>
          </div>
          <div className="row-tk">
            <div className="row-tk__n">80%</div>
            <div className="row-tk__n">1%</div>
            <div className="row-tk__n">1%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
