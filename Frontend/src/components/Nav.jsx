import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { CgMenu, CgClose } from 'react-icons/cg';
import { Button } from '../styles/Button';
import { useCartContext } from '../context/cart_context';
import { useLoginContext } from '../context/login_context';
import { useAddressContext } from '../context/address_context';
import { Avatar } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import { useOrderContext } from '../context/order_context';

const Nav = () => {

  const navigate = useNavigate();

  const { isLogin, uname, setIsLogin, setUname, setUemail } = useLoginContext();
  const [menuIcon, setMenuIcon] = useState(false);
  const { total_item } = useCartContext();
  const [status, setStatus] = useState(false);
  const { clearCart } = useCartContext();
  const { setId } = useAddressContext();
  const { setOrders } = useOrderContext();

  useEffect(() => {

    if (localStorage.getItem("ACCESS_TOKEN") !== null) {
      setUname(localStorage.getItem("USERNAME"));
      setIsLogin(true);
    }

  }, [])


  const logoutfun = () => {
    setMenuIcon(false);
    setUname('');
    setUemail("");
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USERNAME");
    setIsLogin(false);
    clearCart();
    setId(0);
    setOrders([]);
  }


  return (
    <Navb>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul data-aos="fade-down" className='navbar-lists'>
          <li>
            <NavLink x to="/" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>




          {
            isLogin ? (
              <>
                {/* <li className='user_name'>{uname}</li>  */}
                <li>
                  {/* <NavLink to="/" onClick={logoutfun}> */}

                  {
                    menuIcon ? <></> :  
                      <Popover>
                        <PopoverTrigger>
                          <button >
                            <Avatar bg='blue.500' size='lg' />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent >
                          <PopoverArrow />
                    
                          <PopoverHeader size='xl'>

                            <div className='popup-header'>
                            <p>{uname}</p>

                            </div>  
                         
                                               
                          </PopoverHeader>
                          <PopoverBody>
                            
                            <div className='popup-body'>

                            <div style={{display : "flex" , alignItems : "center"}} onClick={() => navigate("/myorder")}>
                            <img src="images/purchase-order.png" style={{width : "3rem", height : "3rem"}} />
                            <button >My Orders </button>
                            </div>
                            
                            
                            </div>

                          </PopoverBody>

                          <PopoverFooter>
                              <div className='popup-footer'>
                              <Button onClick={logoutfun}>Logout</Button>
                              </div>
                          </PopoverFooter>
                        </PopoverContent>
                      </Popover>

                  }
                  {/* </NavLink> */}
                </li>
              </>
            ) : (<li>
              <NavLink to="/signup" onClick={() => setMenuIcon(false)}><Button >Sign up</Button></NavLink>
            </li>)
          }



          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
              <FiShoppingCart className="cart-trolley" />
              <span className='cart-total--item'> {total_item} </span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">

          {
            isLogin ? <Popover>
                        <PopoverTrigger>
                          <button >
                            <Avatar bg='blue.500' size='lg' />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent >
                          <PopoverArrow />
                    
                          <PopoverHeader size='xl'>

                            <div className='popup-header'>
                            <p>{uname}</p>

                            </div>
                         
                                               
                          </PopoverHeader>
                          <PopoverBody>
                            
                            <div className='popup-body'>

                            <div style={{display : "flex" , alignItems : "center"}} onClick={() => navigate("/myorder")}>
                            <img src="images/purchase-order.png" style={{width : "3rem", height : "3rem"}} />
                            <button >My Orders </button>
                            </div>
                            
                            
                            </div>

                          </PopoverBody>

                          <PopoverFooter>
                              <div className='popup-footer'>
                              <Button onClick={logoutfun}>Logout</Button>
                              </div>
                          </PopoverFooter>
                        </PopoverContent>
                      </Popover> : <></>
          }
        

          <CgMenu className="mobile-nav-icon" name="menu-outline" onClick={() => setMenuIcon(true)} />
          <CgClose name="menu-outline" className="mobile-nav-icon close-outline" onClick={() => setMenuIcon(false)} />
        </div>
      </div>
    </Navb>
  );
}


const Navb = styled.nav`

    .user_name{
        font-size : 2rem;
        color : rgb(0,0,0,0.5);
    }

    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    ${'' /* .popup-header{
      display : flex;
      align-items : center;
      justify-content : center;
      height : 5rem;
    } */}


    .popup-header p{
      margin : 1rem 0.5rem;
        font-size : 2rem;
        color : black;
    }

    .popup-footer{
      display : flex;
      justify-content : center;
      align-items : center;
    }

    .popup-footer button{
      margin : 0.7rem 0;
      height : 5rem;
      border-radius : 0.7rem;
    }

    .popup-body button{
      margin : 0.5rem 0;
      width : 10rem;
    }

    .popup-body button{

      color : black;

      &:hover {
          color: ${({ theme }) => theme.colors.helper};
        }
    }

    .popup-body button img{
      width : 2rem;
    }


    .mobile-navbar-btn {
      display : none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: flex;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        gap : 2rem;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 1s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 1s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

export default Nav;