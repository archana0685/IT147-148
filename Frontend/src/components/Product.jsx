import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import { RotatingLines } from 'react-loader-spinner';

const Product = (curEle) => {

    const { pId, name, image, price, category, product_sizes } = curEle;


    if (image.length === 0) {
        return (
            <>
                <NavLink data-aos="zoom-in-up" to={`/singleproduct/${pId}`}>
                    <div className="card">
                        <figure style={{ height: "15rem" }}>
                            <RotatingLines
                                visible={true}
                                height="80"
                                width="80"
                                color="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                ariaLabel="rotating-lines-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </figure>   

                        <div className="card-data">
                            <div className="card-data-flex">
                                <h3>{name}</h3>
                                <p className="card-data--price">{<FormatPrice price={product_sizes[0].price} />}</p>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </>
        )
    }


    let imageurl = image.filter((ele) => {
        return ele.imgView === "front"
    })

    if(imageurl.length === 0)
    {
        imageurl = image;
    }

    return (
        <>
            <NavLink data-aos="zoom-in-up" to={`/singleproduct/${pId}`}>
                <div className="card">
                    <figure>
                        <img src={imageurl[0].imgUrl} alt={name} />
                        {/* <figcaption className='caption'>{category}</figcaption> */}
                    </figure>

                    <div className="card-data">
                        <div className="card-data-flex">
                            <h3>{name}</h3>
                            <p className="card-data--price">{<FormatPrice price={product_sizes[0].price} />}</p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )


}

export default Product;
