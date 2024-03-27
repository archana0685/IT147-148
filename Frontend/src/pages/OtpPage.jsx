import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useLoginContext } from '../context/login_context';


const OtpPage = () => {
  const [otp, setOtp] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const {setUname,setUemail,setIsLogin} = useLoginContext();

  const varifydata = async () => {

    try
    {
      
      const obj = {
        email : location.state,
        otp: otp
      }
      console.log("Email ",location.state)
      const status = await axios.post(import.meta.env.VITE_url+"/api/signup/email", obj);

      console.log(status);
      const data = status.data

      if(data === "Error"){
        toast.error("Please Enter Valid OTP");
      }else
      {
        toast.success("Signup Successful")
        setUname(data.username);
        setUemail(location.state);
        localStorage.setItem("ACCESS_TOKEN", data.jwtToken);
        localStorage.setItem("USERNAME", data.username);
        setIsLogin(true);
        navigate('/');
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
            <h2>Enter OTP</h2>

            <p>We have sent a varification code to your Email ID</p>
          </div>

          <div>
            <OtpInput
              inputStyle={{
                width: '5rem',
                height: '5rem',
                margin: '0.8rem 0.8rem',
                fontSize: '2rem',
                borderRadius: 4,
                border: '2px solid rgba(0,0,0,0.3)',
                padding : '0',
              }}
              inputType='tel'
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
            />
          </div>

          <div className='card-footer'>
            <Button onClick={varifydata}>Verify</Button>

            <p>Don't receive the code?</p>
            <NavLink className="linkset" to="/"> Resend Code</NavLink>
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


.card{
  height: 54rem;
  width: 50rem;
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

.linkset{
    color : #635dff;
}

`


export default OtpPage
