import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProduct from "../components/FeatureProduct";

const Home = () => {

    const data = {
        name : "Trendloom", 
        link : "images/hero.jpg"
    }

    useEffect(() => {

        window.scrollTo({
            top: 0,
          });

    },[])

    return (
        <>
            <HeroSection myData={data}/>
            <FeatureProduct />
            <Services />
            <Trusted />
        </>
    )
}

export default Home;