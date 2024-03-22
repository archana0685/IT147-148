import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";
import axios from "axios";
import AuthHeader from "../Helpers/AuthHeader";
import { useLoginContext } from "./login_context";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("akshayCart");
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
 
const initialState = {
  cart: [],
  // cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {isLogin} = useLoginContext();

  const addToCart = (id, color, amount, price1, stock ,size, product, cartpId) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, price1, stock, size, product, cartpId } });

  };

  // increment and decrement the product
 
  const setDecrease = (id,size) => {
    dispatch({ type: "SET_DECREMENT", payload: {id,size} });
  };

  const setIncrement = (id,size) => {
    dispatch({ type: "SET_INCREMENT", payload: {id,size} });
  };

  // to remove the individual item from cart
  const removeItem = (id,size) => {
    dispatch({ type: "REMOVE_ITEM", payload: {id,size} });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  
  useEffect(() => {
    
    
    const getCartData = async () => {
      
      const token = (localStorage.getItem('ACCESS_TOKEN'));
      
      if(token)
      {

      const headers = AuthHeader();

      const cartresponse = await axios.get(import.meta.env.VITE_url + "/cart/viewCart", { headers });
      
      const data = cartresponse.data;

      console.log(data);

      data.map((curEle) => {
          
          const size_obj = curEle.product[0].product_sizes.filter((ele) => {
              return ele.pSize === curEle.size;
          })

          addToCart(curEle.product[0].pId, curEle.product[0].color, curEle.quty, size_obj[0].price, size_obj[0].pStock, curEle.size, curEle.product[0], curEle.id);
      })
    }

    }

    getCartData();



  },[])

  


  // to add the data in localStorage
  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem("akshayCart", JSON.stringify(state.cart));
    
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrement,}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };