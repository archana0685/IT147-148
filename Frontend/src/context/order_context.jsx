import { createContext, useState, useContext, useEffect } from "react";
import AuthHeader from "../Helpers/AuthHeader";
import axios from "axios";
import { useLoginContext } from "./login_context";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {

    const [orders, setOrders] = useState([]);

    const {isLogin} = useLoginContext();
    
    useEffect(() => {

        const getData = async () => {
    
          try {
    
            const headers = AuthHeader();
    
            const response = await axios.get(import.meta.env.VITE_url + "/order/fetchOrders", { headers });
    
            setOrders(response.data);
    
            console.log(response.data);
    
          } catch (error) {
            console.log(error);
          }
    
        }
    
        getData();
    
      }, [isLogin])

    return (
        <>
            <OrderContext.Provider value={{orders, setOrders}}>
                {children}
            </OrderContext.Provider>
        </>
    )
};

const useOrderContext = () => {
    return useContext(OrderContext);
}

export { OrderProvider, useOrderContext };