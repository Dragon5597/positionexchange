import React from "react";
import { VectorMap } from "react-jvectormap";
import { REGION_COUNTRY } from "../constants";
import "./jvectormap.css";

const regionStyle = {
  initial: {
    fill: "#9FD2EA",
    "fill-opacity": 1,
    stroke: "black",
    "stroke-opacity": 1,
  },
  hover: {
    fill: "#5792F5",
    cursor: "pointer",
  },
  selected: {
    fill: "#5792F5",
  },
};

const containerStyle = {
  width: "100%",
  height: "420px",
};

export default function VectorMaps({ dataMap = [] }) {
  const series = {
    regions: [
      {
        data: [
          ["Africa", "AF"],
          ["Asia", "AS"],
          ["Europe", "EU"],
          ["North America", "NA"],
          ["South America", "SA"],
          ["Oceania", "OC"],
        ],
        fields: [
          {
            name: "continent",
            type: 4,
            width: 100,
          },
          {
            name: "cont_code",
            type: 4,
            width: 4,
          },
        ],
        on: "continent",
      },
      {
        name: "union",
        by: "cont_code",
      },
      {
        name: "remove_other_fields",
        fields: ["continent", "cont_code"],
      },
      {
        name: "write_data",
        format: "jvectormap",
        params: {
          code_field: "cont_code",
          name_field: "continent",
          name: "continents",
        },
      },
    ],
  };
  const getUserAmountCountry = (code) => {
    if (!dataMap.length) {
      return 0;
    }

    const countries = REGION_COUNTRY[code];

    if (countries && countries.length) {
      let total = 0;
      dataMap.forEach(({ code, amount }) => {
        if (countries.find((country) => country.country_code === code)) {
          total += amount;
        }
      });
      return total;
    }

    return 0;
  };

  return (
    <VectorMap
      map={"continents_mill"}
      backgroundColor="transparent"
      zoomOnScroll={false}
      containerStyle={containerStyle}
      containerClassName="map"
      regionStyle={regionStyle}
      series={series}
      onRegionTipShow={(e, el, code) => {
        el.html(el.html() + " - " + getUserAmountCountry(code) + " users)");
      }}
    />
  );
}
