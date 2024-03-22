import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';
import FormatPrice from '../Helpers/FormatPrice';
import axios from 'axios';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useAddressContext } from '../context/address_context';
import { useCartContext } from '../context/cart_context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthHeader from '../Helpers/AuthHeader';
import { useLoginContext } from '../context/login_context';


function countDigits(inputString) {

    var digitMatches = inputString.match(/\d/g);


    if (digitMatches !== null) {
        return digitMatches.length;
    } else {
        return 0;
    }
}

const Address = () => {

    const navigate = useNavigate();

    const { name, mobileno, pincode, address, locality, setName, setAddress, setLocality, setMobileno, setPincode, district, setDistrict, state, setState, setsaveaddress, saveaddress, id } = useAddressContext();

    const { total_price, shipping_fee } = useCartContext();

    const {isLogin} = useLoginContext();

    // console.log(id);

    useEffect(() => {
        if(!isLogin)
        {
            navigate('/');
        }
    },[])

    const validate_detail = async (e) => {
        e.preventDefault();

        if (name === "") {
            toast.error("Please enter name",{
                position: "top-center"});
            return;
        }
        else {
            let alphabeticPattern = /^[A-Za-z]+$/;

            if (!alphabeticPattern.test(name)) {
                toast.error("Please enter a valid name without numbers or special characters.",{
                    position: "top-center"});
                    return;
            }
        }
        if (mobileno === "") {
            toast.error("Please enter mobile number",{
                position: "top-center"});
            return;
        }
        if (mobileno) {
            
            let number = BigInt(mobileno);
            
            if (number.toString().length !== 10) {
                toast.error("Please enter a valid 10-digit mobile number",{
                    position: "top-center"});
                return;
            }
        }
        if (pincode === "") {
            toast.error("Please enter pincode",{
                position: "top-center"});
            return;
        }
        if (pincode) {
            
            

            if(pincode.length === 6)
            {
                let second = pincode[1];
                let first = pincode[0];

                if(first === '0' && second === '0')
                {
                    toast.error("Please enter valid pincode",{
                        position: "top-center",
                    });
                    return;
                }
            }
            else{
                toast.error("Please enter valid pincode",{
                    position: "top-center",
                });
                return;
            }
            
        }
        if (address === "") {
            toast.error("Please enter address",{
                position: "top-center"});
            return;
        }
        if (locality === "") {
            toast.error("Please enter locality",{
                position: "top-center"});
            return;
        }
        if (state === "") {
            toast.error("Please enter state",{
                position: "top-center"});
            return;
        }
        if (district === "") {
            toast.error("Please enter district",{
                position: "top-center"});
            return;
        }


        try{

            const obj = {
                name : name,
                mobile_no : mobileno,
                pincode : pincode,
                addr : address,
                town : locality,
                city : district,
                state : state
            }

            const headers = AuthHeader();

            const res = await axios.put(import.meta.env.VITE_url + `/addr/addAddr/${id}`, obj, {headers});

            navigate("/showaddress");
        }
        catch(error)
        {
            toast.error("Something went wrong")
            console.log(error);
        }

    }



    return (
        <>



            <Wrapper>
                <div className='main-div'>
                    <div className='card'>

                        {/* contact-detail */}
                        <div className='sub-div'>
                            <p >CONTACT DETAILS</p>



                            {/* <input type="text" onChange={(e) => setName(e.target.value)} value={name} id='name' className='input' required/>
                            <label className='label' htmlFor="name">Name</label> */}

                            {/* 
                            <input type="text"  onChange={(e) => setMobileno(e.target.value)} value={mobileno} className='input' id='no' required/>
                            <label className='label' htmlFor="no">mobile no</label> */}


                            <FormControl variant="floating" isRequired>
                                <Input placeholder=" " className='input' value={name} onChange={(e) => {
                                    setName(e.target.value);
                                }} />

                                <FormLabel className='label'>Name</FormLabel>

                            </FormControl>
                            <FormControl variant="floating" isRequired>
                                <Input placeholder="  " className='input' value={mobileno} onChange={(e) => setMobileno(e.target.value)} type='number'/>
                                <FormLabel className='label'>Mobile No</FormLabel>
                            </FormControl>


                        </div>

                        {/* address */}
                        <div className='sub-div'>
                            <p >ADDRESS</p>
                            {/* <input type="text" placeholder='Pin Code' onChange={findStateAndDis} value={pincode} />

                            <input type="text" placeholder='Address(House No, Building, Street, Area)' onChange={(e) => setAddress(e.target.value)} value={address} />

                            <input type="text" placeholder='Locality / Town' onChange={(e) => setLocality(e.target.value)} value={locality} /> */}

                            <FormControl variant="floating" isRequired>
                                <Input placeholder="  " className='input' value={pincode} onChange={(e) => setPincode(e.target.value)} type='number' />
                                <FormLabel>Pin Code</FormLabel>
                            </FormControl>

                            <FormControl variant="floating" isRequired>
                                <Input placeholder="  " className='input' value={address} onChange={(e) => setAddress(e.target.value)} />
                                <FormLabel>Address(House No, Building, Street,Area)</FormLabel>
                            </FormControl>

                            <FormControl variant="floating" isRequired>
                                <Input placeholder="  " className='input' value={locality} onChange={(e) => setLocality(e.target.value)} />
                                <FormLabel>Locality / Town</FormLabel>
                            </FormControl>

                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>


                                <FormControl variant="floating" isRequired>
                                    <Input placeholder="  " style={{ width: '19rem' }} value={district} onChange={(e) => setDistrict(e.target.value)} />
                                    <FormLabel>District</FormLabel>
                                </FormControl>

                                <FormControl variant="floating" isRequired>
                                    <Input placeholder="  " style={{ width: '19rem' }} value={state} onChange={(e) => setState(e.target.value)} />
                                    <FormLabel>State</FormLabel>
                                </FormControl>

                                {/* <input style={{ width: '19rem', border: 'none'}} className='dis-btn'
                                    type="text" placeholder='District' value={district} disabled />
                                <input style={{ width: '19rem', textTransform: 'uppercase', border: 'none' }} className='dis-btn' type="text" placeholder='State' value={state} disabled />  */}




                            </div>
                        </div>

                        <div className='sub-div'>
                            <p>SAVE ADDRESS AS</p>
                            <div className='button-add'>

                                <button type='button' className={saveaddress === 'home' ? 'btn-select' : ""} onClick={() => setsaveaddress('home')}>Home</button>
                                <button type='button' className={saveaddress === 'work' ? 'btn-select' : ""} onClick={() => setsaveaddress('work')}>Work</button>
                            </div>
                        </div>


                        <Button style={{ margin: '1rem', borderRadius: '0.7rem', height: '5rem' }} onClick={(e) => validate_detail(e)}>add address</Button>


                    </div>

                    <div className="order-total--amount">

                        <div className="order-total--subdata">
                            <p style={{ color: 'black', fontSize: '1.4rem' }}>PRICE DETAILS ({3} items)</p>
                            <hr />
                            <div>
                                <p>Total MRP:</p>
                                <p>
                                    <FormatPrice price={total_price} />
                                </p>
                            </div>
                            <div>
                                <p>shipping fee:</p>
                                <p >
                                    <FormatPrice price={shipping_fee} />
                                </p>
                            </div>
                            <hr />
                            <div>
                                <p >Total Amount:</p>
                                <p>
                                    <FormatPrice price={total_price + shipping_fee} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`


    background-color : white;
    height : 100%;

    input {
        box-shadow: none;
        text-transform: none;
        border : 0.1px solid rgb(0,0,0,0.25);
        border-radius : 0.4rem;
        width : 100%;
        font-size : 1.48rem;
        height : 4.7rem;
        font-weight : normal;
        font-family : system-ui;
        padding-left : 1.4rem;
    }

    input::placeholder{
        font-size : 1.2rem;
        color : rgb(0,0,0,0.4);
        text-transform: capitalize;
    }

.main-div{
    margin-top : 5rem;
    margin-left : 20rem;
    margin-right : 20rem;
    display : flex;
    justify-content: space-around;
    gap : 6rem; 
}

.card{

    width : 45rem;
    height : auto;
    border : 0.1px solid rgb(0,0,0,0.15);
    display : flex;
    flex-direction : column;
    justify-content: space-around;
}


.sub-div{
    display : flex;
    flex-direction : column;
    gap : 2rem;
    padding : 2rem;

}

.sub-div>p{
    font-size: 1.2rem;
    font-weight: 550;
    color: rgb(0,0,0,0.9);
}



.button-add button{
    margin-right : 2rem;
    background-color : white;
    padding : 0.6rem;
    padding-left : 2rem;
    padding-right : 2rem;
    border : 1px solid rgb(0,0,0,0.3);
    border-radius : 5rem;
    font-size : 1rem;
    font-weight : 550;
    cursor : pointer;
}

.button-add button:hover{
    border-color : ${({ theme }) => theme.colors.btn};
}

.button-add .btn-select{
    border-color : ${({ theme }) => theme.colors.btn};
    color : ${({ theme }) => theme.colors.btn};
}


.order-total--amount {
    
    width : 30rem;
    text-transform: capitalize;
    
    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
        
    }

    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div p{
        font-size : 1.35rem;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {    
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: 600px) 
  {
    .order-total--amount{
        display : none;  
    }

  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) 
  {
    .input{
        height : 5rem;
        font-size : 1.7rem;
        
    }


    .button-add button{
        height : 3.6rem;
        width : 8rem;
        font-size : 1.2rem;
    }

    .dis-btn::placeholder{
    font-size : 1.45rem;
    }

    .sub-div>p{
        font-size : 1.5rem;
    }
  }
  
`;

export default Address