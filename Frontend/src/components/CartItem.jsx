import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import axios from 'axios';
import AuthHeader from '../Helpers/AuthHeader';

const CartItem = ({id,name,image,color,price,size,amount, max, cartpId}) => {

    const { removeItem, setDecrease, setIncrement } = useCartContext();


    const deleteItem = async () => {

        try{

            const headers = AuthHeader();

            const res = await axios.put(import.meta.env.VITE_url + `/cart/deleteCartProduct/${id}`, null, {headers});

            if(res.data === "OK")
            {
                removeItem(id,size);
            }
        }
        catch(error)
        {
            console.log(error);
        }

    }

  return (
    <>
        <div data-aos="fade-right" className='cart_heading grid grid-five-column'>
           
           {/* item */}
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>color : </p>
                        <div className="color-style"
                        style={{backgroundColor : color, color : color}}></div>
                    </div>

                    <div>
                        <p>Size : {size}</p>
                    </div>
                </div>
            </div>

            {/* price */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            {/* Quantity */}
            <CartAmountToggle amount={amount}
                setDecrease = {() => setDecrease(id,size)}
                setIncrease = {() => setIncrement(id,size)}
                id = {id}
                cartpId = {cartpId}
                max = {max}
            />

            {/* Subtotal */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price*amount}/>
                </p>
            </div>

            {/* Remove */}
            <div>
                <FaTrash className="remove_icon" onClick={deleteItem}/>
            </div>


        </div>
    </>
  )
}

export default CartItem