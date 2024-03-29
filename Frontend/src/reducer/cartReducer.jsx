const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, price1, stock, size, product, cartpid } = action.payload;
  
      // tackle the existing product
  
      let img = product.image.filter((ele) => {
        return ele.imgView === "front";
      })

      let existingProduct = state.cart.find(
        (curItem) => curItem.id === id && curItem.size === size
      );
  
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id) {
            let newAmount = curElem.amount + amount;
  
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            } 
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id,
          cartpid : cartpid,
          name: product.name,
          color,
          amount,
          size : size,
          image: img[0].imgUrl,
          price: price1,
          max: stock,
        };
  
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    }
  
    // to set the increment and decrement
    if (action.type === "SET_DECREMENT") {

      console.log(state.cart);
      let {id,size} = action.payload;
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id && curElem.size === size) {
          let decAmount = curElem.amount - 1;
  
          if (decAmount <= 1) {
            decAmount = 1;
          }
  
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }
  
    if (action.type === "SET_INCREMENT") {

      let {id,size} = action.payload;
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id && curElem.size === size) {
          let incAmount = curElem.amount + 1;
  
          if (incAmount >= curElem.max) {
            incAmount = curElem.max;
          }
  
          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }
  
    if (action.type === "REMOVE_ITEM") {

      let {id , size} = action.payload;

      let updatedCart = state.cart.filter(
        (curItem) => 
        {
          if(curItem.id !== id)
          {
              return curItem;
          }
          else if(curItem.id === id && curItem.size !== size)
          {
              return curItem;
          }
        }
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
  
    // to empty or to clear to cart
    if (action.type === "CLEAR_CART") {
      return {
        ...state,
        cart: [],
      };
    }
  
    // if (action.type === "CART_TOTAL_ITEM") {
    //   let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
    //     let { amount } = curElem;
  
    //     initialVal = initialVal + amount;
    //     return initialVal;
    //   }, 0);
  
    //   return {
    //     ...state,
    //     total_item: updatedItemVal,
    //   };
    // }
  
    // if (action.type === "CART_TOTAL_PRICE") {
    //   let total_price = state.cart.reduce((initialVal, curElem) => {
    //     let { price, amount } = curElem;
  
    //     initialVal = initialVal + price * amount;
  
    //     return initialVal;
    //   }, 0);
  
    //   return {
    //     ...state,
    //     total_price,
    //   };
    // }
  
    if (action.type === "CART_ITEM_PRICE_TOTAL") {
      
        let { total_item, total_price } = state.cart.reduce(
        (accum, curElem) => {
          let { price, amount } = curElem;
  
          accum.total_item += amount;
          accum.total_price += price * amount;
  
          return accum;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );
     
        return {
            ...state,
            total_item,
            total_price,
        };
                
    }
  
    return state;
  };
  
  export default cartReducer;
  
  