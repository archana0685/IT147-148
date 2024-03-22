import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TbLayoutSidebarLeftExpandFilled, TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { GrAdd } from "react-icons/gr";
import styled from "styled-components";
import { RxDashboard } from "react-icons/rx";
import { useAdminContext } from "../context/AdminContext";


const Sidebar = () => {

  const {isActive , setIsActive} = useAdminContext();
  const [selected, setSelected] = useState("dashboard");


  let location = useLocation();
  useEffect(()=>{

  
    let path = location.pathname.substring(1);

    if(location.pathname === "/")
    {
      setSelected("dashboard");
    }    
    else
    {
      setSelected(path);
    }

  },[]);




  return (
    <>
      {isActive ? (

        <Wrapper>
            <div className="sidebar">
              <div className="top__section">
                <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "1.7rem" }}>
                  Trendloom
                </Link>
                <div className="bar__icon">
                  <TbLayoutSidebarRightExpandFilled
                    onClick={() => setIsActive(!isActive)}
                    style={{
                      width : "2rem",
                      cursor: "pointer",
                      color: "white",
                    }}
                  />
                </div>
              </div>

              <div className="sidebar_link__container">
                <div className="sidebar__topic_box">
                  <p className="sidebar_topic_title">Dashboard</p>
                  <div className="sidebar_links">
                    <NavLink to={"/"} className={selected==="dashboard" ? "selected_link" : "nonselectd_link"}  onClick={() => {setSelected("dashboard")}}>
                    <RxDashboard style={{fontSize : '1.4rem', marginRight : '0.6rem'}}/>
                      Dashboard
                    </NavLink>
                  </div>
                </div>

                <div className="sidebar__topic_box">
                  <p className="sidebar_topic_title">Products</p>
                  <div className="sidebar_links">
                    <NavLink to={"/products"} className={selected==="products" ? "selected_link" : "nonselectd_link"} onClick={() => {setSelected("products")}}>
                      <AiOutlineUnorderedList style={{fontSize : '1.4rem'}}/>
                      &nbsp;&nbsp; Products
                    </NavLink>
                    <NavLink to={"/addproduct"} className={selected==="addproduct" ? "selected_link" : "nonselectd_link"} onClick={() => {setSelected("addproducts")}}>
                      <GrAdd style={{fontSize : '1.4rem'}}/>
                      &nbsp;&nbsp; Add Products
                    </NavLink>
                  </div>
                </div>

                <div className="sidebar__topic_box">
                  <p className="sidebar_topic_title">Orders</p>
                  <div className="sidebar_links">
                    <NavLink to={"/orders"} className={selected==="orders" ? "selected_link" : "nonselectd_link"}  onClick={() => {setSelected("orders")}}>
                      <AiOutlineUnorderedList style={{fontSize : '1.4rem'}}/>
                      &nbsp;&nbsp; Orders
                    </NavLink>
                  </div>
                </div>

              
              </div>
            </div>
        </Wrapper>
      ) : (


        <Wrapper style={{
            width: "5%",
            minWidth: "unset",
          }}>

        
          <div className="top__section-closed">

          <div
            className="bar__icon"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TbLayoutSidebarLeftExpandFilled
              onClick={() => setIsActive(!isActive)}
              style={{
                width : "2rem",
                cursor: "pointer",
                color: "white",
              }}
            />
          </div>

        </div>
        </Wrapper>
      
        
      )}

      
    </>
  );
};


const Wrapper = styled.div`


    width: 18%;
    min-width: 15rem;
    background-color: #1d1e20;
    height: 233vh;
    position : fixed;

.sidebar {
    margin: 0 1rem 10rem 0;
}

.top__section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    gap: 1.2rem;
}
.top__section-closed{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}
.bar__icon {
    width: 100%;
    display: flex;
    justify-content: center;
    justify-content: flex-end;
    padding: 1rem 0;
}
.bar__icon svg{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
}

.sidebar__topic_box {
    padding: 0.5rem 1rem;
}

.sidebar_topic_title {
    color: gray;
    font-weight: 600;
    line-height: 2rem;
}

.sidebar_links {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    row-gap: 5px;
}

.selected_link{
    color: black;
    background-color: aliceblue;
    border-radius: 5px;  
    padding: 0.5rem;
    text-transform: none;
    text-decoration: none;   
}

.nonselectd_link{
    color: white;
    padding: 0.5rem;
    text-transform: none;
    text-decoration: none;
}

.nonselectd_link:hover{
  color: black;
    background-color: aliceblue;
    border-radius: 5px;
}

`;

export default Sidebar;
