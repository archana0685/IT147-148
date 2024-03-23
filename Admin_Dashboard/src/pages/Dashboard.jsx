import React, { useEffect, useState } from "react";
import { useAdminContext } from "../context/AdminContext";
import styled from "styled-components";
import EarningChart from "../components/charts/EarningChart";
import CategoryChart from "../components/charts/CategoryChart";
import { useProductContext } from "../context/ProductContext";
import { useOrderContext } from "../context/OrderContext";
import RecentOrders from "../components/RecentOrders";


const Dashboard = () => {
 
  const { loginState } = useAdminContext();
  const { products} = useProductContext();
  const { Orders } = useOrderContext();

  return loginState ? (
    
    <Wrapper>
  
      <div className="data_labels">
        <div className="data__container">
          <p>No of Users</p>
          <h1>6</h1>
        </div>
        <div className="data__container">
          <p>No of Products</p>
          <h1>{products?.length}</h1>
        </div>
        <div className="data__container">
          <p>No of Orders</p>
          <h1>{Orders?.length}</h1>
        </div>

      </div>


        <div className="chart_container">

        <EarningChart />

        <CategoryChart/>
        </div>

        <RecentOrders/>

    </Wrapper>

    

  ) : null;
};


const Wrapper = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

    width: 98%;
    margin-left: 2.5rem;

.data_labels {
    display: flex;
    justify-content: space-between;
}



.data__container {
    background-color: #ffffff;
    border-radius: 0.8rem;
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;
    flex-basis: 30%;
    margin-right: 1.6rem;
    transition: all 0.3s ease;
}

.data__container:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
}

.data__container p {
    color: #aaa;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
}

.data__container h1 {
    color: #333;
    margin-top: 0;
    font-family: 'Kanit', sans-serif;
}

.chart_container{
  display: flex;
  flex-direction : column; 
}

@media (min-width : 1150px) {
  .chart_container{
    flex-direction : row;
    gap : 4rem;
  }
  }

`;

export default Dashboard;
