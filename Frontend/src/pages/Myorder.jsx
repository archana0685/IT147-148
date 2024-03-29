import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FormatPrice from '../Helpers/FormatPrice';
import axios from 'axios';
import AuthHeader from '../Helpers/AuthHeader'
import { useOrderContext } from '../context/order_context';
import { useProductContext } from '../context/productcontext';
import { useNavigate } from 'react-router-dom';

const Myorder = () => {

  let curdate = new Date().toDateString();

  const navigate = useNavigate();

  const { orders } = useOrderContext();

  const {products} = useProductContext();

  const getProductPrice = (id, size) => {

    let price;

    products.map((ele) => {
      

        if(ele.pId === id)
        {
          ele.product_sizes.map((curele)=>{

            if(curele.psize === size)
            {
               price = curele.price;
            }

          })
          
        }
    })

    return price;

  }

  let date;


  return (
    <>
      <Wrapper>
        <div className='main-div'>

          <div className='header'>
            <h2>Your Orders</h2>
          </div>

          <div className='blank'>
          </div>

          <div className='content'>


            { orders.length !== 0 ?
              orders.map((ele, index) => {

                date = new Date(ele.date.substring(0,10)).toDateString()
                return (
                  <div className='item-division'>



                    {
                      ele.orderItems.map((curEle, ind) => {

                        return (
                          <>
                            <div className='item'>

                              <img className='item-pic' src={`${curEle.image}`} alt="product pic" />

                              <div className='order-detail'>

                                <div className='item-detail'>
                                  <p style={{ fontSize: "2rem" }}>{curEle.name}</p>
                                  <p style={{ fontSize: "1.5rem", color: "rgb(0,0,0,0.6)" }}>Colour : {curEle.color}</p>
                                  <p style={{ fontSize: "1.5rem", color: "rgb(0,0,0,0.6)" }}>Item : {curEle.qyt}</p>
                                  <p style={{ fontSize: "1.5rem", color: "rgb(0,0,0,0.6)" }}>Size : {curEle.size}</p>
                                </div>

                                <p>
                                  {
                                    Intl.NumberFormat("en-IN", {
                                      style: "currency",
                                      currency: "INR",
                                      minimumFractionDigits: 2,
                                    }).format((getProductPrice(curEle.pId, curEle.size) / 100)*curEle.qyt)
                                  }
                                </p>

                                <div className='delivery-detail'>

                                  <p>Delivery expected by {curdate.substring(8, 10)} {curdate.substring(4, 7)} {curdate.substring(11, 15)}</p>

                                  <p style={{ fontSize: "1.5rem", color: "rgb(0,0,0,0.6)" }}>Your Order has been placed</p>
                                </div>

                                <div className='buttons'>

                                  <button className='view-product-button' onClick={() => navigate(`/singleproduct/${curEle.pId}`)}>View Product</button>

                                  <button className='view-product-button'>Track Order</button>
                                </div>
 
                              </div>

                            </div>

                            <hr />
                          </>
                        )

                      })

                    }

                    

                    <div className='item-footer'>
                      <p style={{ color: "rgb(0,0,0,0.5)", fontSize: "1.6rem" }}>Ordered On <span style={{ color: "rgb(0,0,0,0.8)" }}>{date.substring(8, 10)} {date.substring(4, 7)} {date.substring(11, 15)}</span></p>

                      <p style={{ color: "rgb(0,0,0,0.5)", fontSize: "1.6rem" }}>Order Total : <span style={{ color: "rgb(0,0,0,0.8)" }}>
                        {
                          Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 2,
                          }).format(ele.totalAmount / 100)
                        }
                      </span></p>
                    </div>

                        <hr />
                    <div className='item-footer'>
                        <p style={{ color: "rgb(0,0,0,0.5)", fontSize: "1.6rem" }}>Address : <span style={{ color: "rgb(0,0,0,0.8)" }}>{ele.addr}</span></p>
                    </div>

                  </div>
                )
              }) : <></>

            }


          </div>

        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`

  padding : 4rem 10rem;
  height : 100%;

  .main-div{
    display : flex;
    flex-direction : column;
  }

  .header{
    padding-left : 3rem;
  }

  .header h2{
    font-weight : 550;
    letter-spacing : 0.1rem;
  }

  .blank{
    height : 6rem;
    background-color :  #F9F6F4;
  }

  .content{
    display : flex;
    flex-direction : column;
    box-shadow : 1px 1px 20px rgba(0,0,0,0.2);
    padding : 1rem;
  }

  .item{
    display : flex;
    
  }

  .item-division{
    display : flex;
    flex-direction : column;
    border : 0.1px solid rgb(0,0,0,0.2);
    margin : 1rem 0;
  }

  .item-pic{
    margin-left : 6rem; 
    margin-right : 6rem;
    padding : 2rem 0;
    width : 12rem;
   
  }

  .order-detail{
    width : 100%;
    margin-top : 1.5rem;
    display : grid;
    grid-template-columns : 3fr 1fr 3fr 1fr;

  }

  .item-detail{
    display : flex;
    flex-direction : column;
    gap : 0.5rem;
  }

  .item-footer{
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    margin : 1rem;
  }

  .delivery-detail{
    display : flex;
    flex-direction : column;
    gap : 3rem;
    margin-left : 1.5rem;
  }

  .view-product-button{
    margin-right : 2rem;
    height : 4rem;
    width : 18rem;
    border : 1px solid rgb(0,0,0,1)
  }

  .view-product-button:hover{
    box-shadow : 0.4px 0.4px 15px rgb(0,0,0,0.1);
  }

  .buttons{
    display : flex;
    flex-direction : column;

    gap : 5rem;
  }


  @media (max-width: ${({ theme }) => theme.media.mobile}) {
      padding : 0;

      .order-detail{
        grid-template-columns : 1fr;
        gap : 1rem;
      }

      .item-pic{
        width : 18rem;
        height : 30rem;
        margin : 0 2rem;
        margin-top : 1.6rem;
      }

      .view-product-button{
        margin-bottom : 2rem;
      }

      .delivery-detail{
        margin : 0;
      }

      .buttons{
        gap : 0rem;
      }
  }

`;


export default Myorder