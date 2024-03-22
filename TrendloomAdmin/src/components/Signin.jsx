import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../styles/Button';
import { useAdminContext } from '../context/AdminContext';

const Signin = () => {

    const navigate = useNavigate();

    const { loginState, setLoginState, adminname, setAdminName, adminemail, setAdminEmail } = useAdminContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showpassword, setShowpassword] = useState(false);

    useEffect(() => {

        if (loginState) {
            navigate("/");
        }

    }, [])


    const varifydata = async (e) => {

        if (loginState) {
            toast.info("You are already login");
            return;
        }

        e.preventDefault();

        if (!email && !password) {
            toast.error("Please Enter Email and Password.")
            return;
        }

        if (!email) {
            toast.error("Please Enter Email.");
            return;
        }
        if (!password) {
            toast.error("Please Enter Password.");
            return;
        }
        const obj = {
            email: email,
            password: password,
        }

        const status = await axios.post(import.meta.env.VITE_url + "/logIn/LogInCus", obj);
        const data1 = status.data;


        if (data1.jwtToken) {
            setAdminName(data1.username);
            setAdminEmail(email);
            localStorage.setItem("ADMIN_TOKEN", data1.jwtToken);
            localStorage.setItem("ADMINNAME", data1.username);
            localStorage.setItem("ADMINEMAIL", email);
            setLoginState(true);
            toast.success("Admin Login Successfully");
            navigate('/');
        }
        else if (data1 === "Account does not exist create new account" || data1 === "Incorrect password try to LogIn with Google") {
            toast.error("Account does not exist, You are wrong Admin");
            return;
        }
        else if (data1 === "Incorrect password") {
            toast.error("Incorrect password.");
        }

    }


    return (
        <>
            <Wrapper>

                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition:Bounce
                />
                <div className="main-form">

                    <form data-aos="zoom-in" data-aos-duration="1000" action="#" className="main-form" onSubmit={(e) => {
                        e.preventDefault();
                    }}>

                        <img className="image" src="/images/logo2.png" alt="" />

                        <p className="title">Welcome To Login</p>


                        <div className='field'>

                            <div className='icon'>
                                <IoIosMail />
                            </div>

                            <input className='input-i1' type="email" placeholder="Enter your email" onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                                value={email} />

                        </div>

                        <div className='field' style={{ marginTop: "0.4rem" }}>

                            <div className='icon'>

                                <MdLock />
                            </div>
                            <input className="pass-i input-i1" value={password} type={showpassword ? 'text' : 'password'} placeholder="Enter your password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} />


                            {
                                showpassword === true ? (<div className='pass-icon' onClick={() => { setShowpassword(false); }}>
                                    <IoMdEyeOff />
                                </div>) : (<div className='pass-icon' onClick={() => { setShowpassword(true); }}>
                                    <IoMdEye />
                                </div>)
                            }

                        </div>


                        <div className="btn-div">
                            <Button type='submit' className="btn" onClick={varifydata}>Login</Button>
                        </div>



                    </form>

                    <p style={{ marginBottom: "1px" }}>Copyright © Trendloom</p>
                </div>

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
    padding-top: 3rem;
    padding-bottom: 4rem;
    width: 30rem;
    height: 37rem;
    border: 1px solid black;
    border-bottom : none;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    
}

input{
    font-size: 1.2rem;
    height: 3rem;
    padding-left: 0rem;
    width: 23rem;
    text-transform: none;
    transition: border-color 0.3s;
}

input:focus{
    width: 23rem;
    height: 3.3rem;
    border: 0.1px solid black;
    border-radius: 3px;    
    text-align: start;
    font-size: 1.2rem;
    padding-left : 4rem;
}

.field{
    position : relative;
    display : flex;
    align-items : center;
    ${'' /* margin-top : 0.5rem;  */}
}


.icon{
    position : absolute;
    font-size : 1.8rem;
    color : rgb(0,0,0,0.7);
    top : 0.1rem;
    left : 1rem;
}

.input-i1{
    padding-left : 4rem;
    padding-right : 4.7rem;
}

.pass-icon{
    position : absolute;
    font-size : 2rem;
    color : rgb(0,0,0,0.7);
    right : 1rem;
    bottom : 0.2rem;
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
    width: 24rem;
    height: 3.3rem;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-size: 1.2rem;
    letter-spacing : 0.3rem;
}

.btn:hover{
    cursor : pointer;
}

.setcontinue{
    color : #fff
}

@media screen and (max-width: 700px) {
    .main-form{
        background-color: white;
        padding-top: 3rem;
        padding-bottom: 4rem;
        width: 23rem;
        height: 36rem;
        border: 1px solid black;
        border-bottom : none;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    input{
    font-size: 1.2rem;
    height: 3rem;
    width: 19rem;
    text-transform: none;
    transition: border-color 0.3s;
}

input:focus{
    width: 19rem;
    height: 3.3rem;
    border: 0.1px solid black;
    border-radius: 3px;    
    text-align: start;
    font-size: 1.2rem;
    padding-left : 4rem;
}

.btn{
    background-color: #635dff;
    width: 19rem;
    height: 3.3rem;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-size: 1.2rem;
    letter-spacing : 0.3rem;
}

.title{
    margin: 1.8rem;
    font-size: 2rem;
    font-family: sans-serif;
}

}


                    `


export default Signin