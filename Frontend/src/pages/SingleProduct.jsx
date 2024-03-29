import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { useProductContext } from "../context/productcontext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import { Container } from "../styles/Container";
import FormatPrice from "../Helpers/FormatPrice"
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "../components/Star";
import AddToCart from "../components/AddToCart";


const API = import.meta.env.VITE_url+"/product/getProduct";

const SingleProduct = () => {

  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();
  
  const [price1, setPrice1] = useState(100);

    useEffect(() => {

      window.scrollTo({
        top: 0,
      });
     
      getSingleProduct(id);
    },[]);

  const { pId, name, price,company, description, category, reviews, stars, image, product_sizes } = singleProduct;

// console.log(description);

  let Stock  = 0;

  if(product_sizes !== undefined)
  {
    Stock = product_sizes[0].pstock;
  }

  let prices = parseFloat(price);


  if (isSingleLoading) {
    return <div className="page_loading">Loading....</div>
  }

  return (
    <>

      <Wrapper>
        {/* <PageNavigation title={name} /> */}
        <Container className="container">
          <div className="grid grid-two-column">

            <div className="product_images">
              <MyImage key={Math.random()} imgs={image}/>
            </div>

            <div className="product-data">
              <h2>{name}</h2>
              <Star stars={4} reviews={45} />

              <p className="product-data-price">
                MRP :
                <del>
                  <FormatPrice price={price1+25000} />
                </del>
              </p>

              <p className="product-data-price product-data-real-price">
                Deal of the Day : <FormatPrice price={price1} />
              </p>

              <p>{description}</p>

              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>7 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Delivered </p>
                </div>


              </div>

              <div className="product-data-info">
                <p>Availabel :<span> {Stock > 0 ? "In Stock" : "Not Available"}</span></p>

                <p>
                  ID : <span> {pId} </span>
                </p>
                <p>
                  Brand :<span> {company} </span>
                </p>
              </div> 

              <hr/>

              {Stock > 0 && <AddToCart product={{singleProduct,setPrice1,price1}} />}
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;


      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
          margin-left : 1rem; 
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
