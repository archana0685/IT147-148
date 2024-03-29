import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoginContext } from '../context/login_context';
import { useCartContext } from '../context/cart_context';
import { auth, provider } from '../Helpers/Config'
import { signInWithPopup } from 'firebase/auth';
import AuthHeader from '../Helpers/AuthHeader';
import { Button } from '../styles/Button';

const LoginPage = () => {

    const navigate = useNavigate();

    const { isLogin, setIsLogin, setUname, setUemail, uemail } = useLoginContext();
    const { addToCart } = useCartContext();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showpassword, setShowpassword] = useState(false);

    useEffect(() => {

        if (isLogin) {
            navigate("/");
        }

    }, [])


    const varifydata = async (e) => {

        if (isLogin) {
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
            name: name,
            email: email,
            password: password,
        }

        const status = await axios.post(import.meta.env.VITE_url + "/logIn/LogInCus", obj);
        const data1 = status.data;



        if (data1.jwtToken) {
            setUname(data1.username);
            setUemail(email);
            localStorage.setItem("ACCESS_TOKEN", data1.jwtToken);
            localStorage.setItem("USERNAME", data1.username);


            const headers = AuthHeader();
            const cartresponse = await axios.get(import.meta.env.VITE_url + "/cart/viewCart", { headers });

            const data = cartresponse.data;

            console.log(data);

            data.map((curEle) => {

                const size_obj = curEle.product[0].product_sizes.filter((ele) => {
                    return ele.psize === curEle.size;
                })

                addToCart(curEle.product[0].pid, curEle.product[0].color, curEle.quty, size_obj[0].price, size_obj[0].pstock, curEle.size, curEle.product[0], curEle.id);
            })

            toast.success("Login Successful.", {
                theme: "light",
            });
            setIsLogin(true);
            navigate('/');
        }
        else if (data1 === "Account does not exist create new account") {
            toast.error("Account does not exist create new account.");
            navigate('/signup');
        }
        else if (data1 === "Incorrect password try to LogIn with Google") {
            toast.error("Incorrect password try to LogIn with Google.");

        }
        else if (data1 === "Incorrect password") {
            toast.error("Incorrect password.");
        }

    }

    const handleAuth = async () => {

        signInWithPopup(auth, provider).then(async (data) => {

            try {
                const obj = {
                    email: data.user.email
                }

                const response = await axios.post(import.meta.env.VITE_url + "/logIn/LogInAuth", obj);

                if (response.data === "Account does not exist create new account") {
                    toast.error("Account does not exist create new account");
                    setUemail("");
                    setUname("");
                    return;
                }
                else {
                    localStorage.setItem("ACCESS_TOKEN", response.data.jwtToken);
                    localStorage.setItem("USERNAME", response.data.username);
                    setUemail(data.user.email);
                    setUname(response.data.username);
                    setIsLogin(true);
                    toast.success("Login Successful.", {
                        theme: "light",
                    });

                    const headers = AuthHeader();
                    const cartresponse = await axios.get(import.meta.env.VITE_url + "/cart/viewCart", { headers });

                    const data1 = cartresponse.data;

                    console.log(data1);

                    data1.map((curEle) => {

                        const size_obj = curEle.product[0].product_sizes.filter((ele) => {
                            return ele.psize === curEle.size;
                        })

                        addToCart(curEle.product[0].pid, curEle.product[0].color, curEle.quty, size_obj[0].price, size_obj[0].pstock, curEle.size, curEle.product[0], curEle.id);
                    })


                    navigate("/");
                }
            }
            catch (error) {
                console.log(error);
            }
        })

    }

    const generatelink = async () => {

        if (email === "") {
            toast.error("Please enter email");
            return;
        }

        let cururl = window.location.href;

        cururl = cururl.substring(0, cururl.length - 5);

        cururl = cururl + "forgetpassword";

        const obj = {
            email: email,
            url: cururl
        }

        try {

            const res = await axios.post(import.meta.env.VITE_url + "/forgetP/forgotPassword", obj);

            if (res.data === "Account does not exists create new account") {
                toast.error("Account does not exists create new account.");
            }
            else {
                toast.success("Email varification link has been sent to your email account", {
                    position: "top-center",
                })

                //const x = window.open(window.location.href);

                try{
                    window.top.close();
                    console.log("yey!!!!!!!!!!!!");
                }
                catch(err){
                    console.log(err);
                }

                // setTimeout(() => {
                //     x.close();

                // }, 1500);
            }
        }
        catch (error) {
            console.log(error);
        }

    }




    return (
        <>
            <Wrapper>
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




                    </div>

                    <div className='forgot-pass'>
                        <NavLink onClick={generatelink} className="linkset">Forgot Password?</NavLink>
                    </div>


                    <div className="btn-div">

                        <Button type='submit' className="btn" onClick={varifydata}> Continue</Button>
                    </div>

                    <p className="signup">Don't have an account? <NavLink className="linkset" to="/signup">Sign Up</NavLink></p>



                    <div className="divide">
                        <span>________________</span>
                        <p>OR</p>
                        <span>________________</span>

                    </div>


                    <div className='signInButton' onClick={handleAuth}>

                        <img className='google-logo' src="images/google-logo.png" alt=" " />
                        <button >Login With Google</button>
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
    height: 70rem;
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
    right : 1rem;
    bottom : 1.3rem;
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

.linkset{
    color : #635dff;
}

.forgot-pass{
    margin-left : 18rem;
    font-size : 1.5rem;
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

                    `


export default LoginPage