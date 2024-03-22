import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import styled from 'styled-components';
import { useProductContext } from '../../context/ProductContext';
import { useOrderContext } from '../../context/OrderContext';
import randomColor from 'randomcolor';

const CategoryChart = () => {
  const chartRef = useRef(null);

  const {products} = useProductContext();
  const {Orders} = useOrderContext();

  const getProductPrice = (id, size) => {
    let price;

    products?.map((ele) => {
        if(ele.pId === id)
        {
          ele.product_sizes?.map((curele)=>{

            if(curele.pSize === size)
            {
               price = curele.price;
            }
          })      
        }
    })
    return price;
  }

  const getUniqueData = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    })

    return (newVal = [...new Set(newVal)]);
  };

  
  const categoryData = getUniqueData(products, "category");
  const color = categoryData?.map((ele) => {
        return randomColor();
  })

  let totalsale = 0;

  let salecategorywise = categoryData?.map(()=>{ return 0});

  Orders?.map((order) => {
    totalsale += order.totalAmount/100;
    
    order?.orderItems?.map((item) => {

        
        if(item.category !== null)
        {
            let price = getProductPrice(item.pId,item.size)/100;
            let ind = categoryData.indexOf(item.category);

            salecategorywise[ind] = salecategorywise[ind] + (price*item.qyt);
        }
    })
  })

  useEffect(() => {
    const getChartOptions = () => {
      return {
        series: salecategorywise,
        colors: color,
        chart: {
          height: 320,
          width: "100%",
          type: "donut",
          toolbar: {
            show: true,
          },
        },
        stroke: {
          colors: ["transparent"],
          lineCap: "",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                 show: true,
                 fontFamily: "Inter, sans-serif",
                 offsetY: 20,
                },
                total: {
                 showAlways: true,
                 show: true,
                 label: "Total sale",
                 fontFamily: "Inter, sans-serif",
                 formatter: function () {                   
                    return `\u20B9${totalsale}`;
                 },
                },
                value: {
                 show: true,
                 fontFamily: "Inter, sans-serif",
                 offsetY: -20,
                 formatter: function (value) {
                    return value;
                 },
                },
              },
              size: "80%",
            },
          },
        },
        grid: {
          padding: {
            top: -2,
          },
        },
        labels: categoryData,
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom",
          fontFamily: "Inter, sans-serif",
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return `\u20B9${value}`;
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function (value) {
              return value;
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },

      };
    };

    let chart;
    if (chartRef.current) {
      chart = new ApexCharts(chartRef.current, getChartOptions());
      chart.render();
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [categoryData]);

  return (
    <Container>
      <ChartTitle>Sales by Category</ChartTitle>
      <FlexContainer>
        
      </FlexContainer>
      <ChartContainer ref={chartRef} />
      
    </Container>
  );
};



const Container = styled.div`
  width: 30%;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 1rem 1.5rem;
  margin-top : 3rem;

  @media (max-width: 1150px) {
    width : 90%;
    margin-bottom : 3rem;
  }
`;

const ChartContainer = styled.div`
  height: 15rem;
  width: 100%;
`;

const ChartTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.25;
  color: #333;
  margin-bottom: 0.75rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;


export default CategoryChart;