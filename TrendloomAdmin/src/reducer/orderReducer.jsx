const OrderReducer = (state, action) => {

    switch(action.type)
    {
        case "SET_LOADING":
            return {
                ...state,
                isLoading : true,
            };

        case "API_ERROR":
            return {
                ...state,       
                isLoading : false,
                isError : true,      
            }

        case "SET_API_DATA":
            return{
                ...state,
                isLoading : false,
                Orders : action.payload,
            };
    }
}

export default OrderReducer