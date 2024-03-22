import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products : [],
    all_products : [],
    grid_view : true,
    sorting_value : "lowest",
    filters : {
        text : "",
        category : "all",
        company : "all",
        color : "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
}


const API = import.meta.env.VITE_url + "/product/getProduct";

const FilterProvider = ({children}) => {

    const { products, getProduct} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    //set the gridview
    const setGridView = () => {
        return dispatch({type : "SET_GRIDVIEW"})
    }

    //set the listview
    const setListView = () => {
        return dispatch({type : "SET_LISTVIEW"})
    }

    //sorting function
    const sorting = (event) => {

        let userValue = event.target.value;
        dispatch({type : "GET_SORT_VALUE", payload : userValue});
    };

    //update filter value
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type : "UPDATE_FILTERS_VALUE", payload : {name, value}})

    }

    //to clear the filter
    const clearFilters = () => {
        dispatch({type : "CLEAR_FILTERS"});
        dispatch({type : "LOAD_FILTER_PRODUCTS", payload : products});
    }


    useEffect(() => {
        dispatch({type : "FILTER_PRODUCTS"});
        dispatch({type : "SORTING_PRODUCTS"});
    },[products,state.sorting_value, state.filters]);


    useEffect(() => {

        dispatch({type : "LOAD_FILTER_PRODUCTS", payload : products});
        
    },[products]);

    return (<FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue,clearFilters}}>
        {children}
    </FilterContext.Provider>
    
    );

}

export const useFilterContext = () => {
    return useContext(FilterContext);
}

export {FilterProvider};