import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { ThreeCircles } from "react-loader-spinner";
import AuthHeader from "../Helper/AuthHeader";

const AddProduct = () => {

  const [loader, setLoader] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState("");
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const [color, setColor] = useState("");

  const [storeImages, setStoreImages] = useState([]);
  const [images, setImages] = useState([]);
  const [view, setView] = useState("");
  const [file, setFile] = useState();


  useEffect(() => {

    window.scrollTo({
      top: 0,
    });

  }, [])


  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      cursor: "pointer",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      cursor: "pointer",
    }),
    option: (provided) => ({
      ...provided,
      cursor: "pointer",
    }),
  };



  const savesize = (e) => {

    e.preventDefault();

    let flag = 0;
    sizes.map((ele) => {
      if (ele.psize === size.toUpperCase()) {
        flag = 1;
      }
    })


    if (size === "" || stock === undefined || price === undefined || price * 1 === 0 || flag === 1) {
      toast.error("Please check size data and uploaded sizes")
      return;
    }

    setSizes([...sizes, {
      psize: size.toUpperCase(),
      pstock: stock * 1,
      price: price * 100,
    }])

    setSize("");
    setStock(0);
    setPrice(0);
  }

  const deletesize = (si, st, pri) => {

    let s = sizes.filter((ele) => {
      return (ele.psize !== si && ele.pstock !== st && ele.price !== pri);
    })

    setSizes(s);
  }


  const saveimage = (e) => {
    e.preventDefault();

    let flag = 0;
    images.map((ele) => {

      if (ele.imgView === view) {
        flag = 1;
      }
    })

    if (view === "" || file === undefined || flag === 1) {
      toast.error("Please check image data and uploaded images");
      return;
    }

    setImages([...images, { imgUrl: file, imgView: view }])
    setStoreImages([...storeImages, { imgUrl: file, imgView: view }])

    setFile();
    setView("");
  }


  const addproduct = async (event) => {

    event.preventDefault();

    if (sizes.length === 0) {
      toast.error("Please Enter atleast one Size");
      return;
    }

    if (images.length === 0) {
      toast.error("Please Enter atleast one Image");
      return;
    }

    if (name === "") {
      toast.error("Please Enter Product Name");
      return;
    }

    if (description === "") {
      toast.error("Please Enter Product Description");
      return;
    }

    if (color === "") {
      toast.error("Please Enter Product color");
      return;
    }

    if (selectedGender === "") {
      toast.error("Please Select Gender");
      return;
    }

    setLoader(true);



    for (let ele in images) {
      const data = new FormData();
      data.append("file", images[ele].imgUrl)
      data.append("upload_preset", "trendloom");
      data.append("cloud_name", "dznzhsib8");


      try {

        const res = await axios.post("https://api.cloudinary.com/v1_1/dznzhsib8/image/upload", data);

        storeImages[ele].imgUrl = res.data.url;
      }
      catch (error) {
        console.log(error);
      }
    }

    console.log(storeImages);

    const obj = {
      image: storeImages,
      product_sizes: sizes,
      description: description,
      name: name,
      color: color,
      category: category,
      gender: selectedGender
    }

    const headers = AuthHeader();

    try {
      const response = axios.post(import.meta.env.VITE_url + "/admin/product/addProduct", obj, { headers });

      const data = await response.data;

      console.log(data);
    }
    catch (error) {
      console.log(error);
    }

    setLoader(false);

  };



  if (loader) {

    window.scrollTo({
      top: 0,
    });

    return (
      <>
          <div style={{ height: "60vh", display: "flex", flexDirection : "column" ,alignItems: "center", justifyContent: "center" }}>

            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color=""
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />

            <p style={{fontSize : "1.5rem"}}>Uploading Data.........</p>
          </div>
      </>
    )
  }


  return (
    <Wrapper>


      <div className="container">
        <div className="form">
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:Bounce
          />
          <h1>Add Product</h1>
          <div className="form-group">
            <label htmlFor="title">Product Name *</label>
            <input
              className="form-control"
              type="text"
              name="title"
              id="title"
              value={name}
              placeholder="Enter Product Name"
              required
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <input
              className="form-control"
              type="text"
              name="category"
              id="category"
              value={category}
              placeholder="Enter Product Category"
              required
              autoComplete="off"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              id="description"
              value={description}
              placeholder="Enter Product Description"
              required
              style={{ resize: "vertical", minHeight: "100px" }}
              onChange={(e) => { setDescription(e.target.value) }}
            />
          </div>


          <div className="form-group">
            <label htmlFor="colour">Colour *</label>
            <input
              className="form-control"
              type="text"
              name="colour"
              id="colour"
              value={color}
              placeholder="Enter Product Colour"
              required
              autoComplete="off"
              onChange={(e) => { setColor(e.target.value) }}
            />
          </div>

          <div className="form-group">

            <p style={{ marginBottom: "0.5rem" }}>Gender *</p>
            <input type="radio" value={"male"} id="male" checked={selectedGender === "male"} onChange={() => setSelectedGender("male")} name="gender" />
            <label htmlFor="male" style={{ marginLeft: "0.6rem" }}>male</label>

            <input type="radio" value={"female"} id="female" checked={selectedGender === "female"} onChange={() => setSelectedGender("female")} style={{ marginLeft: "3rem" }} name="gender" />
            <label htmlFor="female" style={{ marginLeft: "0.6rem" }}>female</label>

          </div>

          <br />


          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ margin: 0 }}>Sizes : </p>
            <table style={{ marginBottom: "1rem", backgroundColor: "whitesmoke", alignItems: "center" }}>

              <thead>


                <tr style={{ gap: '2rem' }}>
                  <th >Size</th>
                  <th>Stock</th>
                  <th>Price</th>
                </tr>
              </thead>


              <tbody>

                {
                  sizes &&
                  sizes.map((ele, index) => {

                    return (
                      <tr key={index} style={{ gap: '2rem' }}>
                        <td>{ele.psize}</td>
                        <td>{ele.pstock}</td>
                        <td>{ele.price / 100}</td>
                        <td style={{ alignItems: "center" }}>
                          <FaEdit style={{ cursor: "pointer" }} onClick={(e) => {

                            e.preventDefault();

                            let x = sizes.filter((elem) => {

                              return (elem.psize !== ele.psize);
                            })

                            setSizes(x);

                            setSize(ele.psize);
                            setStock(ele.pstock);
                            setPrice(ele.price / 100);
                          }} />
                        </td>

                        <td>
                          <AiFillDelete style={{ cursor: "pointer" }} onClick={(e) => {
                            e.preventDefault();
                            deletesize(ele.psize, ele.pstock, ele.price)
                          }} />
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>

            </table>

          </div>


          <div style={{ display: "flex", gap: "0.9rem" }}>

            <div className="form-group">
              <label htmlFor="size">Size *</label>
              <input

                className="form-control"
                type="text"
                name="size"
                id="size"
                value={size}
                placeholder="Enter size"
                required
                autoComplete="off"
                onChange={(e) => { setSize(e.target.value) }}
                style={{
                  textTransform: "uppercase",
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Stock">Stock *</label>
              <input
                className="form-control"
                type="number"
                name="Stock"
                id="Stock"
                value={stock}
                placeholder="Enter Stock"
                required
                autoComplete="off"
                onChange={(e) => { setStock(e.target.value) }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Price">Price *</label>
              <input
                className="form-control"
                type="number"
                name="Price"
                id="Price"
                value={price}
                placeholder="Enter Price"
                required
                autoComplete="off"
                onChange={(e) => { setPrice(e.target.value) }}
              />
            </div>

          </div>

          <button className="submit-btn" style={{ width: "7rem", fontWeight: "normal", marginBottom: "0.7rem" }} onClick={savesize}>
            Add Size
          </button>

          <div className="form-group">

            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ margin: 0 }}>Product Images : </p>
              <table style={{ marginBottom: "1rem", backgroundColor: "whitesmoke", alignItems: "center" }}>

                <thead>



                  <tr style={{ gap: '2rem', margin: "0 1rem" }}>
                    <th style={{ padding: "0 0.5rem" }}>Images :</th>




                    {images &&
                      images.map((ele, index) => {
                        return (

                          <td key={index}>

                            <div style={{ display: "flex", flexDirection: "column" }}>

                              <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>

                                <td><FaEdit style={{ cursor: "pointer" }} onClick={(e) => {
                                  e.preventDefault();

                                  let p = images.filter((Elem) => {
                                    return (Elem.imgView !== ele.imgView);
                                  })

                                  setFile(ele.imgUrl);
                                  setView(ele.imgView);
                                  setImages(p);
                                  setStoreImages(p);

                                }} /></td>
                                <td><AiFillDelete style={{ cursor: "pointer" }} onClick={(e) => {
                                  e.preventDefault();

                                  let p = images.filter((Elem) => {
                                    return (Elem.imgView !== ele.imgView);
                                  })

                                  setImages(p);
                                  setStoreImages(p);

                                }} /></td>
                              </div>


                              <img src={URL.createObjectURL(ele.imgUrl)} alt="" style={{ width: "5rem", padding: "1rem 0" }} />

                            </div>

                          </td>

                        )
                      })
                    }

                  </tr>
                </thead>


                <tbody>

                  <tr style={{ gap: '2rem', margin: "0 1rem" }}>
                    <th style={{ padding: "0 0.5rem" }}>Views :</th>

                    {images &&
                      images.map((ele, index) => {
                        return (

                          <td key={index} style={{ textAlign: "center" }}>
                            <td style={{ textAlign: "center" }}>{ele.imgView}</td>
                          </td>

                        )
                      })
                    }
                  </tr>
                </tbody>

              </table>

            </div>


          </div>

          <div className="form-group">

            <label htmlFor="view">Product Image View *</label>
            <input
              className="form-control"
              type="text"
              name="view"
              id="view"
              value={view}
              placeholder="Enter Product Image View"
              required
              autoComplete="off"
              onChange={(e) => {
                setView(e.target.value)
              }}
            />


            <span>Uploaded Image  : </span>
            {
              file ? <span style={{ marginLeft: "1rem" }}>{file.name}</span> : (<span style={{ marginLeft: "1rem" }}>No file uploaded</span>)
            }

            <br />
            <br />
            <label htmlFor="Images">Upload Images * : </label>
            <input
              className="form-control"
              style={{
                padding: '0.4rem',
                display: "none",
              }}
              type="file"
              id="Images"
              name="Images"
              placeholder="Select Image"
              required
              autoComplete="off"
              accept="image/*"
              onChange={(e) => {
                setFile(e.target.files[0])
              }}
            ></input>


            <img src="images/imageupload.jpg" alt="" style={{ width: "6rem", cursor: "pointer", opacity: "0.9", marginBottom: "1rem", marginLeft: "2rem" }} onClick={() => {
              document.getElementById('Images').click()
            }} />

          </div>


          <button className="submit-btn" style={{ width: "7rem", fontWeight: "normal", marginBottom: "2rem" }} onClick={saveimage}>
            Add Image
          </button>

          <button className="submit-btn" type="button" onClick={addproduct} style={{width : "13rem"}}>
            Add Product
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

    min-height: auto;
    width: 100%;
    background-color: #eee;
    display: flex;

input::placeholder{
  text-transform: none;
}

.container {
    margin: auto;
    padding: 5rem 0;
    width: auto;
    max-width: 90%;
}

.container .form {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.container .form h1 {
    text-align: center;
    margin-bottom: 24px;
    color: #222;
}

.container .form .form-control {
    width: 100%;
    height: 40px;
    background: white;
    border-radius: 4px;
    border: 1px solid silver;
    margin: 10px 0 18px 0;
    padding: 0 10px;
}

.container .form .submit-btn {
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 1rem;
    font-weight: bold;
    border: none;
    outline: none;
    background: #222;
    cursor: pointer;
    text-transform: uppercase;
    color: white;
    border-radius: 4px;
    transition: .3s;
}

.container .form .submit-btn:hover {
    opacity: .7;
}

.time-container {
    display: flex;
}

.from-time,
.to-time {
    width: 50%;
    padding: 0.5rem;
}


`


export default AddProduct;
