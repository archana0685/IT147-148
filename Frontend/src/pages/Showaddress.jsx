import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context';
import FormatPrice from '../Helpers/FormatPrice';
import { Button } from '../styles/Button';
import { useAddressContext } from '../context/address_context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AuthHeader from '../Helpers/AuthHeader';
import { useLoginContext } from '../context/login_context';
import { useOrderContext } from '../context/order_context';

const Showaddress = () => {

    const navigate = useNavigate();

    const { orders, setOrders } = useOrderContext();

    const { cart, total_item, total_price, shipping_fee,clearCart } = useCartContext();

    const { name, mobileno, pincode, address, locality, district, state, saveaddress, setName, setAddress, setLocality, setMobileno, setPincode, setState, setsaveaddress, setDistrict, id } = useAddressContext();

    const { isLogin } = useLoginContext();

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sept", "Oct", "Novr", "Dec", "Jan"
    ];

    let x = new Date();
    let year = x.getFullYear();
    let month = x.getMonth();
    let date = x.getDate();


    useEffect(() => {
        if (!isLogin) {
            navigate('/');
        }
    }, [])


    const removeaddress = async () => {
        setAddress("");
        setName("");
        setDistrict("");
        setPincode("");
        setMobileno("");
        setState("");
        setLocality("");
        setsaveaddress("home");


        try {

            const obj = {
                name: name,
                mobile_no: mobileno,
                pincode: pincode,
                addr: address,
                town: locality,
                city: district,
                state: state
            }
            const headers = AuthHeader();

            const res = await axios.put(import.meta.env.VITE_url + `/addr/addAddr/${id}`, obj, { headers });

            navigate('/address');
        }
        catch (error) {
            toast.error("Something went wrong")
            console.log(error);
        }
    }


    const editaddress = () => {
        navigate('/address');
    }

    const savedetail = async (e) => {

        e.preventDefault();

        const total = parseFloat(total_price) + shipping_fee;

        const headers = AuthHeader();

        try {
            const res = await axios.post(import.meta.env.VITE_url + "/payment/makePayment", total, { headers });


            const options = {

                key: "rzp_test_2fB7s8LlAuJ7HT", // Enter the Key ID generated from the Dashboard
                amount: 100,
                currency: "INR",
                name: "Trendloom",
                description: "Test Transaction",
                image: "images/logo2.png",
                order_id: res.data.id,


                handler: function (response) {
                    if (typeof response.razorpay_payment_id == 'undefined' || response.razorpay_payment_id < 1) {
                        console.log("fail");
                    }
                    else {

                        async function Orderdatail() {

                            const obj = {
                                amount: total,
                                paymentType: "netbanking",
                            }
                            try {
                                const res2 = await axios.post(import.meta.env.VITE_url + "/order/createOrder", obj, { headers });

                                setOrders([...orders, res2.data]);

                                const response = await axios.put(import.meta.env.VITE_url + "/cart/clearCart", null, { headers });

                                clearCart();

                                navigate("/myorder");

                            }
                            catch (error) {
                                console.log(error);
                            }

                        }

                        Orderdatail();
                    }
                },


                prefill: {
                    name: "Trendloom",
                    email: "akshayvaghasiya3636@gmail.com",
                    // contact: ,
                },
                notes: {
                    address: "Soumya Dey Corporate Office",
                },
                theme: {
                    color: "#61dafb",
                },
            };

            var rzp1 = new Razorpay(options);

            rzp1.open();

        }
        catch (error) {
            console.log(error);
        }



    }


    return (
        <>
            <Wrapper>

                <div className='main-class'>

                    <div className='address-detail'>
                        <h3>Delivery Address</h3>

                        <div className='card'>

                            <div className='name-detail'>
                                <h3>{name}</h3>
                                <button type='button'>{saveaddress}</button>
                            </div>

                            <div className='address'>
                                <p>{`${address}, ${locality}`}</p>
                                <p>{`${district}, ${state} - ${pincode}`}</p>
                            </div>

                            <p>Mobile : <b>{mobileno}</b></p>

                            <div className='edit-button'>
                                <button type='button' onClick={removeaddress}>REMOVE</button>
                                <button type='button' onClick={editaddress}>EDIT</button>
                            </div>
                        </div>
                    </div>

                    <div className='order-datail'>
                        <div className='product-estimate'>
                            <h3>DELIVERY ESTIMATES</h3>

                            <div className='product-item'>


                                {

                                    cart.map((curEle) => {

                                        const min = 6;
                                        const max = 10;

                                        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                                        let curdate = new Date(year, month, date + randomNumber).toDateString();
                                        return (
                                            <>
                                                <div className='product'>
                                                    <img src={curEle.image} alt="product image" />

                                                    <div style={{ display: "flex", flexDirection: "column" }}>

                                                        <p>Estimated delivery by <b>{curdate.substring(8, 10)}</b> <b>{curdate.substring(4, 7)}</b> <b>{curdate.substring(11, 15)}</b></p>
                                                        <p>Size <b>: {curEle.size}</b></p>
                                                        <p>Quantity <b>: {curEle.amount}</b></p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>

                            <hr />

                            <div className='pricing'>
                                <h3>PRICE DETAILS ({total_item} Items)</h3>

                                <div className='price-item'>

                                    <div className='price-datail'>
                                        <p>Total MRP  </p>
                                        <p><FormatPrice price={total_price} /></p>
                                    </div>

                                    <div className='price-datail'>
                                        <p>Shipping Fee  </p>
                                        <p><FormatPrice price={shipping_fee} /></p>
                                    </div>


                                    <hr />

                                    <div className='price-datail'>
                                        <p style={{ fontWeight: '550' }}>Total Amount  </p>
                                        <p style={{ fontWeight: '550' }}><FormatPrice price={shipping_fee + total_price} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <Button style={{ borderRadius: '0.5rem', letterSpacing: '1.2px', height: '5rem' }} onClick={savedetail}>Make Payment</Button>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`

    height : 100%;

.main-class{
    margin-left : 20rem;
    display : flex;
    flex-direction : row;
    gap : 4rem;
}


.address-detail{
    margin-top : 4rem;
    width : 50%;
    display : flex;
    flex-direction : column;
    gap : 3rem;
}

.address-detail h3{
    font-weight : bold;
    font-size : 1.8rem;
}

.address p{
    font-size : 1.3rem;
}

.card{
    height : 23rem;
    border : 0.3px solid rgb(0,0,0,0.2);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius : 0.6rem;
    display : flex;
    flex-direction : column;
    padding-left : 5rem;
    justify-content : space-around;
}

.card h3{
    margin-top : 1.3rem;
    font-size : 1.4rem;
}

.card p{
    font-size : 1.3rem;
}

.name-detail{
    display : flex;
    justify-content : space-between;
}

.name-detail button{
    margin-right : 3rem;
    margin-top : 1rem;
    border : 0.2px solid green;
    font-size : 1.2rem;
    width : 6rem;
    height : 2.5rem;
    border-radius : 1.6rem;
    font-weight : 550;
    color : green;
    padding : -1px;
    text-transform: uppercase;
}

.order-datail{
    border-left : 0.3px solid rgb(0,0,0,0.2);
    width : 40%;
    display : flex;
    flex-direction : column;
    gap : 4rem;
    padding-left : 2rem;    
    padding-right : 15rem;   
}

.edit-button{
    display : flex;
    margin-bottom : 1.9rem;
    gap : 2.3rem;
}

.edit-button button {
    border : 1px solid rgb(0,0,0,1);
    padding : 0.8rem 2rem;
    border-radius : 0.6rem; 
    font-size : 1rem;
    font-weight : bold; 
    letter-spacing : 1px;
}

.edit-button button:hover {
    border : 0.3px solid ${({ theme }) => theme.colors.btn};
    color : ${({ theme }) => theme.colors.btn};
}

.product-estimate{
    display : flex;
    flex-direction : column;
    gap : 2rem;
    margin-top : 3rem;  
}

.product-estimate :first-child{
    border-top : none;
}

.product-estimate h3 {
    font-size : 1.3rem; 
    font-weight : bold;
    color : rgb(0,0,0,0.7)
}

.product-item{
    display : flex;
    flex-direction : column;
    gap : 0.2rem;
}

.product{
    display : flex;
    gap : 2rem;
    align-items : center; 
    border-top: 1.4px dashed rgb(0,0,0,0.1); 
    padding-top : 1rem;
    padding-bottom : 1rem;
}

.product :first-child{
    display : inline;
}

.product img{
    height : 6rem;
    width : 5rem;
}

.product p{
    font-size : 1.39rem;
}


.pricing{
    display : flex;
    flex-direction : column;
    gap : 2rem;
}

.price-item{
    display : flex;
    flex-direction : column;
    gap : 1rem;
    
}

.price-item p {
    font-size : 1.3rem;
}

.price-datail{
    width : 70%;
    display : flex;
    justify-content : space-between; 
}

.price-datail :last-child{
    color : rgb(0,0,0,1);
}

@media (max-width: ${({ theme }) => theme.media.mobile}) 
{

    height : 100rem;

    .main-class{
    margin-left : 2rem;
    margin-right : 2rem;
    flex-direction : column;
    justify-content: space-around;
    gap : 4rem;
    }

.address-detail{
    width : 100%;
}

.order-datail{
    margin-left : 1rem;
    margin-right : 3rem;
    width : 90%;
    border-left : none;
    padding-right : 0;
}

.card p{
    font-size : 1.5rem;
}

.card h3{
    margin-top : 1.3rem;
    font-size : 1.6rem;
}

.edit-button button {
    font-size : 1.3rem;
}

.product-estimate h3 {
    font-size : 1.6rem;
}

.product p{
    font-size : 1.7rem;
}

.price-item p {
    font-size : 1.6rem;
}

.price-datail{
    width : 70%;
   
}

}


`;

export default Showaddress