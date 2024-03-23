import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
// import ProblemUpdate from "../forms/updateForms/ProblemUpdate";
// import { BASE_URL, requestOption } from "../../utils";
import styled from "styled-components";
import { useOrderContext } from "../context/OrderContext";


const Orders = () => {
 
  const {Orders} = useOrderContext();
  const [updateProblemtrigger, setUpdateProblemTrigger] = useState(null);
  const [updateProblem, setUpdateProblem] = useState(null);

  console.log(Orders);

  // Getting Problem details
  const [ProblemData, setProblemData] = useState([]);

  const getProduct = () => {
    
  };

  useEffect(() => {
    getProduct();
  }, []);

  //  Deleting Problem
  const deleteProduct = (id) => {
    
  };

  // table header data
  const tableHeaders = [
    "Order Id",
    "Person Name",
    "No. of Items",
    "Address",
    "Total Amount",
    "Order Date",
    "Status",
  ];

  // Handling view more button
  const [visible, setVisible] = useState(10);
  const [show, setShow] = useState(true);
  const length = ProblemData.length;

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
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const results = ProblemData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.difficultyLevel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tagList.some((tag) =>
          tag.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    setSearchResults(results);
  };
  return (
    <Wrapper>

    
      <div className="mini_navbar__container">
        <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
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
            {(searchTerm.length !== 0 ? searchResults : Orders)
              ?.slice(0, visible)
              ?.map((Order, index) => {
                return (
                  <>
                    <tr key={index} style={{textAlign : "center"}}>
                      <td>{Order.id}</td>
                      <td>{Order.customer.name}</td>
                      <td>{Order.totalItem}</td>
                      <td>{Order.addr}</td>
                      <td>&#x20b9; {Order.totalAmount/100}</td>
                      <td>
                        {Order.date.substring(0,10)}
                      </td>

                      <td>{Order.status}</td>
                    </tr>
                    <div
                      className="showPhotos"
                      style={{
                        display: updateProblem === index ? "block" : "none",
                      }}
                    >
                      <button
                        onClick={() => {
                          setUpdateProblem(null);
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
                    </div>
                  </>
                );
              })}
          </tbody>
        </table>

        <div
          className="view_more__button"
          style={{
            display: show && ProblemData.length > 10 ? "block" : "none",
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
margin-left : 2rem;

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
    width: 10.5rem;
    display: block;
    padding: 1rem;
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

export default Orders;
