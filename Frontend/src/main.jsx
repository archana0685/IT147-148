import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context"
import { LoginProvider } from "./context/login_context";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AddressProvider } from "./context/address_context";
import { OrderProvider } from "./context/order_context";



const activeLabelStyles = {
  transform: "scale(0.9) translateY(-24px)",
  fontSize: 13,
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
                color: "rgb(0,0,0,1)"
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles,
              color: "rgb(0,0,0,0.5)",
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 4,
              px: 2,
              my: 6,
              transformOrigin: "left top",
              fontSize: 12,
              color: "rgb(0,0,0,0.5)",
              letterSpacing: '0.4px',
            }
          }
        }
      }
    }
  }
});




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <ChakraProvider theme={theme}>
    <AppProvider>
      <LoginProvider>
        <OrderProvider>
          <AddressProvider>
            <FilterProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </FilterProvider>

          </AddressProvider>

        </OrderProvider>
      </LoginProvider>
    </AppProvider>

  </ChakraProvider>

);


reportWebVitals();
