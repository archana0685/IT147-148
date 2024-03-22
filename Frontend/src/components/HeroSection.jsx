import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = ({ myData }) => {

  const { name, link } = myData;
  const [counter, setCounter] = useState("Fashion Start Here");

  return (
    <Wrapper>
      <div className="background-opa">
        <div className="main" >

          <div className="grid grid-two-column">
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="hero-section-data">
              <p className="intro-data"><b>Welcome to</b> </p>
              <h1 data-aos="flip-up" data-aos-delay="900" style={{letterSpacing : "0.3rem"}}>{name}</h1>
              <TypeAnimation
                sequence={[
                  "Fashion Start Here",
                  2000,

                  ""
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />

              <p>
                <b>Discover handpicked selections of clothing that reflect the season's hottest looks. Our team of fashion enthusiasts scours the globe to bring you the most coveted pieces, ensuring you're always ahead of the curve.</b>
              </p>

              <NavLink to="/products">
                <Button>
                  Show now
                </Button>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

${'' /* padding: 0 12rem; */}

img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {

  padding-left : 1rem;
  
  p {
    margin: 2rem 0;
    font-size : 2rem;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
  }
}



@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }

  .hero-section-data {
    padding-left : 0rem;
  }

  .main{
    padding : 7rem 9rem;
  }
}
`;

export default HeroSection;