import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const About = () => {


    const data = {
        name : "Discover Our Story", 
    }

    return (
        <>
        <Wrapper>
          <div className="background-opa">
        <div className="main" >

            <div className="grid grid-two-column">
                <div data-aos="flip-down" data-aos-duration="1000" className="hero-section-data">
                    <h1>{data.name}</h1>
                    <p>
                        <b>TrendLoom's Epic Tale of Style and Sophistication. Dive into our legacy, where every stitch tells a story of passion, innovation, and timeless fashion.Learn more about Trendloom and our commitment to style, quality, and you.</b>
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
        </>
    )
}

const Wrapper = styled.section`

${'' /* padding: 0 12rem; */}

img {
  min-width: 10rem;
  height: 10rem;
}

${'' /* .background-opa{
  width : 100%;
  height : 100%;
  background: rgba(0, 0, 0, 0.5);
  position : fixed;
} */}
.hero-section-data {
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

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }

  .main{
    margin-bottom : 10rem;
  }

  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    background-color: rgba(81, 56, 238, 0.4);
  }
}
`;

export default About;