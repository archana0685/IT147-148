// import React from 'react'
import styled from 'styled-components'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { BiSolidUser } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import { passwordStrength } from 'check-password-strength'
import 'react-toastify/dist/ReactToastify.css';
import { useLoginContext } from '../context/login_context';
import { TailSpin } from 'react-loader-spinner'
import {auth, provider} from '../Helpers/Config'
import { signInWithPopup } from 'firebase/auth';
import { Button } from '../styles/Button';



const SignupPage = () => {


    const [passStrengthshow, setPassStrengthshow] = useState(false);
    const [passStrength, setPassStrength] = useState('');
    const navigate = useNavigate();
    const { isLogin, setIsLogin, setUname, setUemail, uname, uemail} = useLoginContext();
    const [clicked, setClicked] = useState(false);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showpassword, setShowpassword] = useState(false);


    useEffect(() => {

        if (isLogin) {
            navigate("/");
        }

    }, [])


    useEffect(() => {

        if (password.length == 0) {
            setPassStrengthshow(false);
        }

        if (password.length > 0) {
            setPassStrengthshow(true);

            setPassStrength(passwordStrength(password).value);
        }

    }, [password])


    const putdata = async (e) => {

        setClicked(true);

        if (!name && !email && !password) {
            toast.error("Please enter name, email and password");
            setClicked(false);
            return;
        }
        else if (!name && !email) {
            toast.error("Please enter name and email");
            setClicked(false);
            return;
        }
        else if (!email && !password) {
            toast.error("Please enter password and email");
            setClicked(false);
            return;
        }
        else if (!name && !password) {
            toast.error("Please enter name and password");
            setClicked(false);
            return;
        }
        else if (!name) {
            toast.error("Please enter name");
            setClicked(false);
            return;
        }
        else if (!password) {
            toast.error("Please enter password");
            setClicked(false);
            return;
        }
        else if (!email) {
            toast.error("Please enter email");
            setClicked(false);
            return;
        }

        if (passStrength !== "Strong") {
            toast.error("Please enter Strong Password");
            setClicked(false);
            return;
        }


        e.preventDefault();
        try {

            const obj = {
                name: name,
                email: email,
                password: password,
            }

            let status = await axios.post(import.meta.env.VITE_url + "/api/signup", obj);
            let data = status.data;

            console.log(data);

            if (data === "OK") {
                setClicked(false);
                navigate('/getotp', { state: data.email });
            }
            else {
                setClicked(false);
                toast.warn("This email address already exist please login");
                navigate('/login');
            }

        } catch (er) {
            console.log(er);
        }
    }


    const handleAuth = () => {
        signInWithPopup(auth,provider).then( async (data) =>{        

            try{
                const obj = {
                    name : data.user.displayName,
                    email : data.user.email,
                }
    
                const response = await axios.post(import.meta.env.VITE_url + "/api/signup/auth",obj);
                
                if(response.data === "Error")
                {
                    console.log("in error")
                    toast.error("User already exist please login");
                    setUemail("");
                    setUname("");
                    return;
                }
                else
                {       
                    localStorage.setItem("ACCESS_TOKEN", response.data.jwtToken);
                    localStorage.setItem("USERNAME", response.data.username);
                    setUemail(data.user.email);
                    setUname(data.user.displayName);
                    setIsLogin(true);
                    navigate("/");
                }
            }
            catch(error){
                console.log(error);
            }
        })

        
    }
    

    return (
        <>
            <Wrapper>
                <form data-aos="zoom-in" data-aos-duration="1000" action="#" className="main-form" onSubmit={(e) => {
                    e.preventDefault();
                }}>

                    <img className="image" src="/images/logo2.png" alt="" />

                    <p className="title">Welcome To SignUp</p>

                    <div className='field'>

                        <div className='icon'>
                            <BiSolidUser />
                        </div>

                        <input className='input-i1' type="text" placeholder="Enter name" onChange={(e) => {
                            setName(e.target.value);
                        }}

                            value={name} />
                    </div>

                    <div className='field'>

                        <div className='icon'>
                            <IoIosMail />
                        </div>

                        <input className='input-i1' type="email" placeholder="Enter your email" onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                            value={email} />

                    </div>


                    <div className='field'>

                        <div className='icon'>

                            <MdLock />
                        </div>
                        <input className="pass-i input-i1" type={showpassword ? 'text' : 'password'} placeholder="Enter your password" onChange={(e) => {
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


                    <div className="btn-div">

                        <Button type='submit' className="btn" onClick={putdata}>


                            {
                                clicked === true ? <div className='lodder'>

                                    <TailSpin
                                        visible={true}
                                        height="30"
                                        width="30"
                                        color="white"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </div>
                                    : "Continue"

                            }



                        </Button>
                    </div>

                    <p className="signup">Already have an account? <NavLink className="linkset" to="/login"> Log in</NavLink></p>


                    <div className="divide">
                        <span>________________</span>
                        <p>OR</p>
                        <span>________________</span>

                    </div>

                    <div className='signInButton' onClick={handleAuth}> 

                            <img className='google-logo' src="images/google-logo.png" alt=" " />                     
                            <button >Sign Up With Google</button>
                    </div>


                </form>

            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
                        height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #303340;
    background-size: cover;

    .main-form{
    
    background-color: white;
    /* margin-left: 45rem; */

    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 40rem;
    height: 66rem;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    
}

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

.field{
    position : relative;
}

.lodder{
    width : 4rem;
    height : 4rem;
    margin-top: 1.2rem;
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
    bottom : 50px;
    right : 4px;
    font-size : 1.3rem;
}

.sub-field{
    padding-left: 7px;
    display: flex;
    /* background-color: rgb(161, 90, 227); */
    border-radius: 30px;
    border: 1px solid black;
    width: 17rem;
    height: 2.5rem;
    flex-direction: column;
    /* align-items: start; */
}

.sub-field input{
    width: 10rem;
}

.image{
    width: 90px;
}

.password-icon{
    position: absolute;    
    padding: 0.75rem;
    right: 36px;
    z-index: 4;
}

.password-container{
    position: relative;
    width: 17rem;
    margin-left: 1rem;
}

.icon{
    z-index: 3;
}

.title{
    margin: 1.8rem;
    font-size: 2.7rem;
    font-family: sans-serif;
}

.btn-div{
    margin-top: 1.5rem;
}

.btn{
    background-color: #635dff;
    width: 30rem;
    height: 5rem;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-size: 1.8rem;
    display : flex;
    justify-content : center;
    align-items : center;
}

.btn:hover{
    cursor : pointer;
}

.setcontinue{
    color : #fff
}

.divide{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 17rem;
}

.divide p {
    padding: 5% 6% 0 6%;
    color: rgb(132, 132, 132);
    font-size: 13px;
    font-family: sans-serif;
}

.divide span{
    color: rgb(169, 169, 169);
}

.signup{
    font-family: sans-serif;
    font-size: 1.5rem;
    margin: 0;
}

.signup a {
    text-decoration: none;
}

.linkset{
    color : #635dff;
}

.signInButton{
    border-radius : 0.5rem;
    padding : 1rem;
    display : flex;
    gap : 1.4rem;
    align-items: center;
    cursor : pointer;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
}

.signInButton:hover{
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
}

.google-logo{
    width : 2rem;
    height : 2rem;
    background-color : white;
}


@media (max-width: ${({ theme }) => theme.media.tab}) {
    .pass-strenght{
        color : rgb(0,0,0,0.6);
        position : absolute;
        bottom : 39px;
        right : 4px;
        font-size : 1.3rem;
    } 

    .main-form{
        height : 75rem;
    }
  }



                    `

export default SignupPage