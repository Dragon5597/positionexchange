import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { REGION_COUNTRY } from "./constants";
import bgMap from "../../images/map/bg-map.png";
import map from "../../images/map/map.svg";
import icon from "../../images/map/icon.svg";

// const VectorMap = React.lazy(() => import("./VectorMap"));

const regions = [
  {
    name: "Africa",
    code: "AF",
    count: 0,
  },
  {
    name: "Asia",
    code: "AS",
    count: 0,
  },
  {
    name: "Europe",
    code: "EU",
    count: 0,
  },
  {
    name: "North America",
    code: "NA",
    count: 0,
  },
  {
    name: "South America",
    code: "SA",
    count: 0,
  },
  {
    name: "Oceania",
    code: "OC",
    count: 0,
  },
];
const MapSection = ({ mapData }) => {
  const { t } = useTranslation();
  const [dataMap, setDataMap] = useState(regions);

  const getCountCountryRegion = React.useCallback((code, dataUser) => {
    if (!dataUser.length) {
      return 0;
    }

    const countries = REGION_COUNTRY[code];

    if (countries && countries.length) {
      let total = 0;
      dataUser.forEach(({ code, amount }) => {
        if (countries.find((country) => country.country_code === code)) {
          total += amount;
        }
      });
      return total;
    }

    return 0;
  }, []);

  useEffect(() => {
    if (mapData && mapData.length) {
      const data = [];
      regions.forEach((region, index) => {
        data.push({
          ...regions[index],
          count: getCountCountryRegion(region.code, mapData),
        });
      });
      setDataMap(data);
    }
  }, [mapData, getCountCountryRegion]);

  return (
    <React.Fragment>
      <section
        className="spread-map"
        style={{
          backgroundColor: "#17c893",
          textAlign: "center",
          color: "white",
        }}
      >
        <div>
          <h2 className="Together_h2">Together we are stronger!</h2>
          <p className="Together_p">
            All generated fees from different features will be invested back in
            POSI and in our Community. Position Exchange’s team will not receive
            any of the fees! We invest our hard work in the potential value of
            the token.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};
export default MapSection;
