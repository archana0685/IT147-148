import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";


const ProductContext = createContext();

const API = import.meta.env.VITE_url + "/product/getProduct";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading: true,
    singleProduct: {},
};

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProduct = async (url) => {

        dispatch({ type: "SET_LOADING" });
        try {

            const res = await axios.get(url);
            const products = await res.data;

            console.log(products);
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };


    //single product

    const getSingleProduct =(id) => {


        dispatch({ type: "SET_SINGLE_LOADING" });


        dispatch({ type: "SET_SINGLE_PRODUCT", payload: id });
        

        // dispatch({type : "SET_SINGLE_ERROR"});

    }


    useEffect(() => {
        getProduct(API);
    }, []);

    return (
        <>
            <ProductContext.Provider value={{ ...state, getSingleProduct, getProduct }}>
                {children}
            </ProductContext.Provider>
        </>
    )
};

//custom hook
const useProductContext = () => {
    return useContext(ProductContext);
}

export { ProductProvider, useProductContext };