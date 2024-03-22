import axios from 'axios';
import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import AuthHeader from '../Helpers/AuthHeader';

const CartAmountToggle = ({amount, setDecrease, setIncrease, id, cartpId, max}) => {

  const Decrease = async ( ) => {
    
      if(amount <= 1)
      {
          return;
      }

      try{

        const headers = AuthHeader();

      
        const res = await axios.put(import.meta.env.VITE_url + `/cart/decQyt/${cartpId}`, null, { headers });

   
        if(res.data === "OK")
        {
          setDecrease();
  
        }

      }
      catch(error)
      {
          console.log(error);
      }
  }


  const Increase = async () => {

    if(amount >= max)
    {
      return;
    }

    try{

      const headers = AuthHeader();
      
      const res = await axios.put(import.meta.env.VITE_url + `/cart/incQyt/${cartpId}`, null, {headers});


      if(res.data === "OK")
      {
        setIncrease();
      }

    }
    catch(error)
    {
        console.log(error);
    }

  }


  return (

    <div className="cart-button">
        <div className="amount-toggle">
            <button onClick={Decrease}>
            <FaMinus />
            </button>
            <div className="amount-style">{amount}</div>
            <button onClick={Increase}>
            <FaPlus />
            </button>
        </div>
    </div>
 
  )
}


export default CartAmountToggle