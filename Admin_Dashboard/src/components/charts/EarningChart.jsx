import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ApexCharts from 'apexcharts';
import randomColor from 'randomcolor';
import { useOrderContext } from '../../context/OrderContext';


const EarningChart = () => {
  const chartRef = useRef(null);

  const {Orders} = useOrderContext();

  const monthsShort = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  console.log(Orders);
  
  const currentMonthIndex = new Date().getMonth();  
  const monthsWithValues = monthsShort.map((month, index) => ({ name: month, value: 0 }));
   

  useEffect(() => {

    Orders?.map((order) => {
        let date = new Date(order?.date).getMonth();
        monthsWithValues[date].value = monthsWithValues[date].value + (order.totalAmount/100);
      })
    
      const rotatedMonths = [...monthsWithValues.slice(currentMonthIndex + 1), ...monthsWithValues.slice(0, currentMonthIndex + 1)];


    const options = {
        chart: {
            height: "100%",
            maxWidth: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
              enabled: false,
            },
            toolbar: {
              show: true,
            },
          },
          tooltip: {
            enabled: true,
            x: {
              show: false,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              opacityFrom: 0.65,
              opacityTo: 0,
              shade: "#1C64F2",
              gradientToColors: ["#1C64F2"],
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 3.5,
          },
          grid: {
            show: true,
            strokeDashArray: 8,
            padding: {
              left: 5,
              right: 5,
              top: 0
            },
          },
          series: [
            {
              name: "total earning (in \u20B9)",
              data: rotatedMonths?.map((object) => {return object.value}),
              color: randomColor(),
            },
          ],
          xaxis: {
            categories: rotatedMonths?.map((object) => {return object.name}),
            labels: {
              show: true,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: true,
          },    
    };

    if (chartRef.current && typeof ApexCharts !== 'undefined' && Orders.length > 0) {
      const chart = new ApexCharts(chartRef.current, options);
      
      chart.render();
    
    }
  }, [Orders]);

  return (
    <ChartContainer>
      <Title>Earning Revenue</Title>
      <ChartArea ref={chartRef} id="area-chart"></ChartArea>
      
    </ChartContainer>
  );
};


const ChartContainer = styled.div`
  margin-top : 3rem;
  width : 60%;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding : 1rem;

  @media (max-width: 1150px) {
    width : 90%;
  }
`;

const ChartArea = styled.div`
  height: 100%;
  max-width: 100%;
`;

const Title = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: #666;
`;

export default EarningChart;