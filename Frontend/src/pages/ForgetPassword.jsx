import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { passwordStrength } from 'check-password-strength'
import { MdLock } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const ForgetPassword = () => {

    const [passStrengthshow, setPassStrengthshow] = useState(false);
    const [passStrength, setPassStrength] = useState('');
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [showpassword, setShowpassword] = useState(false);
    const [showpassword1, setShowpassword1] = useState(false);


    const navigate = useNavigate();


    useEffect(() => {

        if (password.length == 0) {
            setPassStrengthshow(false);
        }

        if (password.length > 0) {
            setPassStrengthshow(true);

            setPassStrength(passwordStrength(password).value);
        }

    }, [password])


    const updatePassword = async () => {
      
        if (password === "" && confirmpassword === "") {
            toast.error("Please enter new password");
            return;
        }
        else if (password !== confirmpassword) {
            toast.error("New password and Confirm password is not match");
            return;
        }
        else if (passStrength !== "Strong") {
            toast.error("Your new password is not strong enough");
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const value = params.get("token");

        const obj = {
            token : value,
            password : password,
        }

        try
        {
            const res = await axios.post(import.meta.env.VITE_url + "/forgetP/resetPassword", obj);

            if(res.data === "OK")
            {
                toast.success("Password updated successfully!")
                navigate("/")
            }
            else
            {
                console.log("fail");
            }
        }
        catch(error)
        {
            console.log(error);
        }

    }


    return (
        <>

            <Wrapper>

                <div className='card'>

                    <div className='card-header'>
                    <img className="image" src="/images/logo2.png" alt="" />

                        <h2>Forget Password</h2>

                        
                    </div>




                    

                    <div className='field'>

                        <div className='icon'>

                            <MdLock />
                        </div>

                        <input className="pass-i input-i1" type={showpassword ? 'text' : 'password'} placeholder="Enter New Password" onChange={(e) => {
                            setPassword(e.target.value);

                        }}
                            value={password} />


                        {
                            showpassword === true ? (<div className='pass-icon' onClick={() => { setShowpassword(false); }}>
                                <IoMdEyeOff />
                            </div>) : (<div className='pass-icon' onClick={() => { setShowpassword(true); }}>
                                <IoMdEye />
                            </div>)
                        }

                        {
                            passStrengthshow ? <span className='pass-strenght'>{`your password is ${passStrength}`}</span> : <span></span>
                        }


                    </div>

                    <div className='field field1'>

                        <div className='icon'>

                            <MdLock />
                        </div>
                        <input className="pass-i input-i1" type={showpassword1 ? 'text' : 'password'} placeholder="Confirm New Password" onChange={(e) => {
                            setConfirmpassword(e.target.value);

                        }}
                            value={confirmpassword} />


                        {
                            showpassword1 === true ? (<div className='pass-icon' onClick={() => { setShowpassword1(false); }}>
                                <IoMdEyeOff />
                            </div>) : (<div className='pass-icon' onClick={() => { setShowpassword1(true); }}>
                                <IoMdEye />
                            </div>)
                        }


                    </div>

                    <div className='card-footer'>
                        <Button onClick={updatePassword}>Update</Button>

                        
                    </div>

                </div>

            </Wrapper>
        </>
    )
}


const Wrapper = styled.section`
overflow: hidden;
  height: 100vh;
  width : 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  input{
    font-size: 1.7rem;
    height: 5.3rem;
    padding-left: 1rem;
    width: 30rem;
    /* border: 0.1px solid black; */
    text-transform: none;
    transition: border-color 0.3s;
    border-radius : 3px
}

input:focus{
    width: 30rem;
    height: 5rem;
    border: none;
    ${'' /* border-color:red; */}
    border-radius: 3px;
    text-align: start;
    font-size: 1.7rem;
    padding-left : 5rem;
}


.card{

    margin-top : 8rem;
  height: 55rem;
  width: 54rem;
  border-radius: 10px;
  background-color: white;
  /* border: 0.5px solid rgb(83, 83, 83); */
  box-shadow: 0 0px 30px rgb(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  font-family: sans-serif;
  font-size: 1.3rem;

  margin-bottom : 8rem;
}

.card-header{
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.9rem;
}

.card-header p {
  text-align: center;
  padding: 0 11rem;
  line-height: 3rem;

  margin-bottom : -2rem;
}


.card-footer{
    margin-top : 0.5rem;
    display : flex;
    flex-direction: column;
    align-items : center;
    gap : 1rem;
    font-size : 1.6rem;
}

.card-footer p {
    margin-top : 2.8rem;
}

.card-footer button{
  
  border-radius: 8px; 
  width : 25rem;
}

.image{
    width: 90px;
}

.field{
    position : relative;
    margin-top : 1rem;
}

.field1{
    margin-top : -1.5rem;
}


.icon{
    position : absolute;
    font-size : 2.5rem;
    color : rgb(0,0,0,0.7);
    top : 1.2rem;
    left : 1rem;
}

.input-i1{
    padding-left : 5rem;
    padding-right : 4.7rem;
}

.pass-icon{
    position : absolute;
    font-size : 2.5rem;
    color : rgb(0,0,0,0.7);
    bottom : 1.3rem;
    right : 1rem;
    
}

.pass-strenght{
    color : rgb(0,0,0,0.6);
    position : absolute;
    bottom : 53px;
    right : 4px;
    font-size : 1.3rem;
}

.linkset{
    color : #635dff;
}



@media (max-width: ${({ theme }) => theme.media.tab}) {
    .pass-strenght{
        color : rgb(0,0,0,0.6);
        position : absolute;
        bottom : 43px;
        right : 4px;
        font-size : 1.3rem;
    } 

    .card{
        margin-top : 0rem;
        height : 70rem;
    }
  }

`


export default ForgetPassword