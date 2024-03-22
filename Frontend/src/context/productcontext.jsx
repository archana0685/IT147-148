import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";


const AppContext = createContext();

const API = import.meta.env.VITE_url + "/product/getProduct";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProduct = async (url) => {

        dispatch({ type: "SET_LOADING" });
        try {

            const res = await axios.get(url);
            const products = await res.data;

            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };


    //single product

    const getSingleProduct = async (id) => {

        dispatch({ type: "SET_SINGLE_LOADING" });
        await getProduct(API);


        dispatch({ type: "SET_SINGLE_PRODUCT", payload: id });
        

        // dispatch({type : "SET_SINGLE_ERROR"});

    }


    useEffect(() => {
        getProduct(API);
    }, []);

    return (
        <>
            <AppContext.Provider value={{ ...state, getSingleProduct, getProduct }}>
                {children}
            </AppContext.Provider>
        </>
    )
};

//custom hook
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useProductContext };