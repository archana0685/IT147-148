import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

const MyImage = ({ imgs = [{ imgUrl: "" }] }) => {

  const [mainImage, setMainImage] = useState(imgs[0]);

  if (imgs.length === 0) {
    return (
      <Wrapper>
        <div className="grid grid-four-column">


          <figure>
            <RotatingLines
              visible={true}
              height="60"
              width="60"
              color="blue"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </figure>


        </div>


        <div className="main-screen">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="blue"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {
          imgs.map((curElm, index) => {
            return (
              <figure>
                <img data-aos="zoom-in-up" src={curElm.imgUrl} alt={curElm.filename} className='box-image--style'
                  key={index}
                  onClick={() => setMainImage(curElm)}
                />
              </figure>
            )
          })
        }
      </div>


      <div className="main-screen">
        <img data-aos="zoom-in-up" src={mainImage.imgUrl} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;


export default MyImage;