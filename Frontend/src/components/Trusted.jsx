import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

const Trusted = () => {



    return (

        <Wrapper data-aos="zoom-in" data-aos-duration="1000" className="brand-section" >
            <div className="container">
                <h3>Trusted By 500+ Companies</h3>
                <div className="brand-section-slider">
                    {/* my 1st img  */}
                    <div className="slide">
                        <img
                            src="images/trust1.png"
                            alt="trusted-brands"
                        />
                    </div>
                    <div className="slide">
                        <img
                            src="images/trust2.png"
                            alt="trusted-brands"
                        />
                    </div>
                    <div className="slide">
                        <img
                            src="images/trust3.png"
                            alt="trusted-brands"
                        />
                    </div>
                    <div className="slide">
                        <img
                            src="images/trust4.png"
                            alt="trusted-brands"
                        />
                    </div>
                    <div className="slide">
                        <img
                            src="images/trust5.png"
                            alt="trusted-brands"
                        />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;