import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/orderReducer";
import AuthHeader from "../Helper/AuthHeader";


const OrderContext = createContext();

const API = import.meta.env.VITE_url + "/admin/order/getOrder";

const initialState = {
    isLoading: false,
    isError: false,
    Orders : [],
};

const OrderProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getOrders = async (url) => {

        dispatch({ type: "SET_LOADING" });
        try {

            const headers = AuthHeader();
            const res = await axios.get(url, { headers });
            const orders = await res.data;

            dispatch({ type: "SET_API_DATA", payload: orders });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };


    //single product

    // const getSingleProduct =(id) => {


    //     dispatch({ type: "SET_SINGLE_LOADING" });


    //     dispatch({ type: "SET_SINGLE_PRODUCT", payload: id });
        

    //     dispatch({type : "SET_SINGLE_ERROR"});

    // }


    useEffect(() => {
        getOrders(API);
    }, []);

    return (
        <>
            <OrderContext.Provider value={{ ...state, getOrders }}>
                {children}
            </OrderContext.Provider>
        </>
    )
};

//custom hook
const useOrderContext = () => {
    return useContext(OrderContext);
}

export { OrderProvider, useOrderContext };