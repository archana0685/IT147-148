import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import styled from "styled-components";
import { useProductContext } from "../context/ProductContext";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { ThreeCircles } from "react-loader-spinner";
import UpdateProduct from "../components/UpdateProduct";

const Products = () => {
  // update Problem use state variables
  const [updateProblemtrigger, setUpdateProblemTrigger] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(null);

  const { getProduct, products, isLoading, singleProduct , getSingleProduct } = useProductContext();


  useEffect(() => {
    getProduct();

    window.scrollTo({
      top: 0,
    });

  }, []);

  //  Deleting Problem
  const deleteProduct = (id) => {

  };

  // table header data
  const tableHeaders = [
    "Product Id",
    "Product Name",
    "Gender",
    "Description",
    "Colour",
    "Sizes",
    "Prices",
    "Stocks",
    "Images",
    "Action",
  ];

  // Handling view more button
  const [visible, setVisible] = useState(10);
  const [show, setShow] = useState(true);
  const length = products.length;

  const showMoreItems = () => {
    if (visible < length) {
      setVisible((prevValue) => prevValue + 10);
    } else {
      setShow(false);
    }
  };

  // Handling Searchbar events
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    
    setSearchTerm(() => event.target.value.toString());

    let search = event.target.value.toString();

    const results = products.filter(
      (item) => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.pId.toString().toLowerCase().includes(search.toLowerCase()) ||
          item.gender.toLowerCase().includes(search.toLowerCase()) ||
          item.color.toLowerCase().includes(search.toLowerCase())
        )
      }
    );

    setSearchResults(results);
  };


  if (isLoading) {

    window.scrollTo({
      top: 0,
    });

    return (
      <>
          <div style={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color=""
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
      </>
    )
  }



  return (
    <Wrapper>


      <div className="mini_navbar__container">
        
        <div className="d-flex">

        
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearch}
            style={{width : "16rem", margin : "0 1rem"}}
          />
          <button className="btn btn-outline-success" type="button">
            Search
          </button>
          </div>
      </div>

      <div className="list__container">
        <table className="table table-striped custom-table">
          <thead>
            <tr style={{textAlign : "center"}}>
              {tableHeaders.map((header, index) => (
                <th key={index} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(searchTerm.length !== 0 ? searchResults : products)
              .slice(0, visible)
              .map((Product, index) => {

                let imageurl = Product.image.filter((ele) => {
                  return ele.imgView === "front";
                })

                return (
                  <>
                    <tr key={index} style={{textAlign : "center"}}>
                      <td>{Product.pId}</td>
                      <td>{Product.name}</td>
                      <td>{Product.gender}</td>
                      <td style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} data-tooltip-id={index+1}>{Product.description}

                        <ReactTooltip
                          id={index+1}
                          effect="solid"
                          style={{textWrap : "wrap"}}
                        >
                            <p style={{width : "20rem"}}>{Product.description}</p>
                        </ReactTooltip>

                      </td>
                      <td>{Product.color}</td>
                      <td>
                        {
                          Product.product_sizes.map((sizes, index) => {

                            return (<tr key={index}>
                              <td>{sizes.psize}</td>
                            </tr>)
                          })
                        }
                      </td>
                      <td>
                        {
                          Product.product_sizes.map((sizes, index) => {

                            return (<tr key={index}>
                              <td>&#x20b9; {sizes.price/100} </td>
                            </tr>)
                          })
                        }
                      </td>
                      <td>
                        {
                          Product.product_sizes.map((sizes, index) => {

                            return (<tr key={index}>
                              <td>{sizes.pstock}</td>
                            </tr>)
                          })
                        }
                      </td>

                      <td>
                        <img data-tooltip-id={index+10} src={imageurl[0].imgUrl} alt={Product.name} style={{width : "5.5rem"}} />


                        <ReactTooltip
                          id={index+10}
                          effect="solid"
                          style={{textWrap : "wrap"}}
                        >
                          {
                            Product.image.map((ele, ind) => {
                                return (                              
                                    <img key={ind+100} src={ele.imgUrl} alt={Product.name} style={{width : "5.5rem", padding : "0.5rem"}}/>   
                                )
                            })
                          }
                        </ReactTooltip>
                      </td>


                      <td style={{ letterSpacing: "0.7rem" }}>
                        <AiFillDelete
                          onClick={() => deleteProduct(problem.problemId)}
                        />
                        &nbsp;&nbsp;
                        <FaEdit
                          onClick={() => {
                            getSingleProduct(Product.pId);
                            setUpdateProduct(index);
                          }}
                        />
                      </td>
                    </tr>
                    <div
                      className="showPhotos"
                      style={{
                        display: updateProduct === index ? "block" : "none",
                      }}
                    >
                      <button
                        onClick={() => {
                          setUpdateProduct(null);
                        }}
                        style={{
                          padding: "0.7rem 1.2rem",
                          borderRadius: "10px",
                          color: "white",
                          backgroundColor: "#512DC8",
                        }}
                      >
                        Close
                      </button>
                      {/* <ProblemUpdate data={problem} /> */}
                      <UpdateProduct key={Math.random()}/>
                    </div>
                  </>
                );
              })}
          </tbody>
        </table>

        <div
          className="view_more__button"
          style={{
            display: show && products.length > 10 ? "block" : "none",
          }}
        >
          <button onClick={showMoreItems}>View More</button>
        </div>
      </div>
    </Wrapper>
  );
};



const Wrapper = styled.div`

width: 100%;

.main__container {
    width: 100%;
    min-height: 100%;
}

.mini_navbar__container {
    width: 100%;
    margin: 1rem 2%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1rem;
}

.mini_navbar__container form {
    width: fit-content;
    height: 2rem;
}

.list__container {
    width: 100%;
    overflow-x: scroll;
}



.custom-table tr {
    display: flex;
}

.custom-table td,
.custom-table th {
    width: 126px;
    display: block;
    padding : 0.3rem;
}

.form-group td, .form-group th {
    width: 17%;
    display: block;
    padding : 0;
}



.view_more__button {
    width: 100%;
    text-align: center;
}

.view_more__button button {
    background-color: transparent;
    padding: 0.5rem 2rem;
    color: #000;
    font-size: larger;
    border: 1px solid #000;
    border-radius: 46px;
}

.image__container img {
    width: 10rem;
}


`;

export default Products;
