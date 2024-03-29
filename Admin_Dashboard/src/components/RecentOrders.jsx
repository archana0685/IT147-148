import React, { Fragment } from "react";
import styled from "styled-components";
import { useProductContext } from "../context/ProductContext";
import { useOrderContext } from "../context/OrderContext";

const RecentOrders = () => {
  const { products } = useProductContext();
  const { Orders } = useOrderContext();

  const getProductPrice = (id, size) => {
    let price;

    products?.map((ele) => {
      if (ele.pid === id) {
        ele.product_sizes?.map((curele) => {
          if (curele.psize === size) {
            price = curele.price;
          }
        });
      }
    });
    return price;
  };

  let topsellingdata = [];

  Orders?.map((order) => {
    order?.orderItems?.map((item) => {
      let price = getProductPrice(item.pid, item.size)/100;
      let index = null;

      topsellingdata.map((data, ind) => {
        if (data.name === item.name) {
          index = ind;
        }
      });

      if (index !== null) {
        topsellingdata[index].sales += price * item.qyt + 50;
        topsellingdata[index].totalorders++;
      } else {
        const obj = {
          name: item.name,
          image: item.image,
          price: price,
          sales: (price * item.qyt) + 50,
          totalorders: 1,
        };

        topsellingdata.push(obj);
      }   
    });
  });

  

  topsellingdata.sort((data1,data2) => {

      if(data1.totalorders < data2.totalorders)
        return 1;
      else if(data1.totalorders > data2.totalorders)
        return -1;
      else{
        if(data1.sales > data2.sales)
        {
          return -1;
        }
        else if(data1.sales < data2.sales)
        {
          return 1;
        }
        else{
          return 0;
        }
      }

  })


  return (
    <Wrapper>
      <h3 className="heading">Top Selling Products</h3>

      <table style={{ textAlign: "center"}}>
        <thead>
          <tr style={{ height: "3rem", color: "rgba(0,0,0,0.4)"}}>
            <th>No</th>
            <th></th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Sale</th>
            <th>Total Orders</th>
          </tr>
        </thead>
        <tbody>

          {
            topsellingdata?.slice(0,3)?.map((data,index) => {
              
              return (
              
                <tr key={index+1}>
                  <td>{index+1}</td>
                  <td style={{paddingLeft : '4rem'}}>
                    <img src={data.image} alt="product image" style={{width : "3rem", borderRadius : '4px'}} />
                  </td>
                  <td>{data.name}</td>
                  <td>&#x20b9;{data.price}</td>
                  <td>&#x20b9;{data.sales}</td>
                  <td>{data.totalorders}</td>
                </tr>
        
              )

            })
          }
          
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 1rem;
  width: 90%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;

  .heading {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.25;
    color: #333;
    margin-bottom: 0.75rem;
  }
`;

export default RecentOrders;
