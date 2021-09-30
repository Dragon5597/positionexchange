import React, { useState, useEffect, Suspense } from "react";
import "../../scss/home.scss";
import PageTitle from "../../components/PageTitle";
import Hero from "./components/Hero";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Technology2 from "./components/Technology2";
// import OurTeam from "./components/OurTeam";
// import OurPartner from "./components/OurPartner";
// import Event from "./components/Event";
// import MapSection from "../../components/MapSection";
import { API_GET_USER } from "../../constants";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    fetch(API_GET_USER)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMapData(result);
        },
        () => {
          setIsLoaded(true);
        }
      );
  }, [isLoaded]);
  return (
    <>
      <PageTitle title="Home | Like2Like" description="Like2Like" />
      <Hero />
      {/* <About /> */}
      {/* <Portfolio /> */}
      {/* <Technology2 /> */}
      {/* <Suspense fallback={<div></div>}>
        <MapSection mapData={mapData} />
      </Suspense> */}
      {/* <OurTeam mapData={mapData} /> */}
      {/* <OurPartner /> */}
      {/* <Event /> */}
    </>
  );
};

export default HomePage;
