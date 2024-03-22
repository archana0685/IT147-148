import React from "react";
import styled from "styled-components";
import { useAdminContext } from "../context/AdminContext";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {


    const { setLoginState, setAdminName, setAdminEmail } = useAdminContext();

    const onLogout = () => {

        toast.success("Admin Logout Successfully");
        setAdminEmail("");
        setAdminName("");
        setLoginState(false);
        localStorage.setItem("ADMIN_TOKEN", "");
        localStorage.setItem("ADMINNAME", "");
        localStorage.setItem("ADMINEMAIL", "");

    }


    return (
        <Wrapper>
            
            <h1>Trendloom Admin</h1>
            <button className="logout__button" onClick={onLogout}>
                Logout
            </button>
        </Wrapper>
    );
};


const Wrapper = styled.div`

display: flex;
    justify-content: space-between;
    align-items: center;
    width: 96%;
    margin: 1rem 2%;
    padding: 0.5rem 1rem;
    text-align: center;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    .logout__button {
    background-color: #1F2A40;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

.logout__button:hover {
    background-color: #0e1522;
}

`;

export default Navbar;
