import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../styles/Button'
import { useCartContext } from '../context/cart_context';
import { CgFormatSlash } from "react-icons/cg";
import { toast } from 'react-toastify';
import axios from "axios";
import AuthHeader from '../Helpers/AuthHeader';
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCart = ({ product }) => {

  const { addToCart } = useCartContext();

  const navigate = useNavigate();

  let { pId, color, product_sizes } = product.singleProduct;
  // const [colors, setColors] = useState(color);
  let [amount, setAmount] = useState(1);
  let [selectSize, setselectSize] = useState("");
  let [sizes, setSizes] = useState([]);
  let [stock, setStock] = useState(2);

  let dumisize = [{
    size: 'S',
    available: false,
  },
  {
    size: 'M',
    available: false,
  },
  {
    size: 'L',
    available: false,
  },
  {
    size: 'XL',
    available: false,
  },
  {
    size: 'XXL',
    available: false,
  }
  ];

  let dumisize1 = [{
    size: '28',
    available: false,
  },
  {
    size: '30',
    available: false,
  },
  {
    size: '32',
    available: false,
  },
  {
    size: '34',
    available: false,
  },
  {
    size: '36',
    available: false,
  },
  {
    size: '38',
    available: false,
  }
  ];


  useEffect(() => {

    let x = product_sizes.map((curEle) => {
      return curEle.psize;
    })

    if(x)
    {
        setStock(product_sizes[0].pstock);
        setselectSize(product_sizes[0].psize);
        product.setPrice1(product_sizes[0].price)
    }

    setSizes((dumisize.map((curEle) => {
      if (x.includes(curEle.size)) {
        curEle.available = true;
      }

      return curEle;
    })));


  }, [])





  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  
  const usercheck = async () => {

    if(localStorage.getItem('ACCESS_TOKEN') === null)
    {
        toast.error("login first");
        navigate("/login");
        return;
    }
    else
    {
      
      let obj = {
        pid : pId,
        size : selectSize,
        quty : amount,
      }

      try
      {
        
        const headers = AuthHeader();
        let response = await axios.post(import.meta.env.VITE_url + "/cart/addToCart", obj,{ headers });
        
        console.log(response.data);

        if(response.data !== null)
        {
          addToCart(pId, color, amount, product.price1, stock, selectSize, product.singleProduct, response.data.id);
          navigate("/cart");
        }
        else
        {
          toast.error("Please try again");
        }
      }
      catch(e)
      {
        toast.error("Please try again");
        console.log(e);
      }
    }
  }


  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors :
          {/* {
                        colors.map((curColor, index) => {
                            return (
                                <button key={index} style={{ backgroundColor: curColor }} className={colors === curColor ? "btnStyle active" : "btnStyle"}
                                    onClick={() => setColors(curColor)}
                                >
                                    {colors === curColor ? <FaCheck className="checkStyle" /> : null}
                                </button>
                            )
                        })
                    } */}

          <button style={{ backgroundColor: color }} className={"btnStyle active"}

          >
            <FaCheck className="checkStyle" />
          </button>
        </p>
      </div>


      <div className='size'>
        {
          sizes.map((curEle, index) => {

            if (curEle.available === true) {

              return (<button key={index} className={selectSize === curEle.size ? "size-button1" : "size-button"} value={curEle.size} onClick={() => {

                setselectSize(curEle.size);
                
                let obj = product_sizes.filter((Ele) => {
                  return Ele.psize === curEle.size;
                })
                
                  if(amount > obj[0].pstock)
                  {
                      setAmount(obj[0].pstock);
                  }
                  setStock(obj[0].pstock);
                  product.setPrice1(obj[0].price);
              }}>
                {curEle.size}
              </button>
              )
            }
            else {
              return (

                <button className='size-button-not-show'>

                  {curEle.size}
                </button>

              )
            }

          })
        }
      </div>


      <div className="cart-button">
        <div className="amount-toggle">
            <button onClick={setDecrease}>
            <FaMinus />
            </button>
            <div className="amount-style">{amount}</div>
            <button onClick={setIncrease}>
            <FaPlus />
            </button>
        </div>
    </div>


   
        <Button className="btn" onClick={usercheck}>Add to Cart</Button>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    margin-left : 0.5rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 4rem;
    margin-bottom: 1rem;
    margin-left : 1.5rem;
    display: flex;
    gap : 4rem;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

.size{
  margin-top : 5rem;
  margin-bottom : 3rem;
  display : flex;
  gap : 2rem;
}

.size-button{
  height : 6rem;
  width : 6rem;
  background-color : white;
  border-radius : 50%;
  color : black;
  font-weight: bold;  
  cursor: pointer;
  border-width: 1px;
}

.size-button:hover{
  border-color : ${({ theme }) => theme.colors.btn};
  border-width: 1.7px;
}

.size-button1
{
  height : 6rem;
  width : 6rem;
  font-weight: bold;
  border-radius : 50%;
  background-color : white;
   color : ${({ theme }) => theme.colors.btn};
   border-color : ${({ theme }) => theme.colors.btn};
   cursor: pointer;
   border-width: 2.3px;
}

.size-button-not-show{
  height : 6rem;
  width : 6rem;
  border-width: 1px;
  background-color : white;
  border-radius : 50%;
  color : rgb(0,0,0,0.3);
  font-weight: bold;
  border-color : rgb(0,0,0,0.3);
  display : block;
  
}


`;

export default AddToCart;