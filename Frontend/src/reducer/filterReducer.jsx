const filterReducer = (state, action) => {

    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.product_sizes[0].price);
            let maxPrice = Math.max(...priceArr);

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice },
            };

        case "SET_GRIDVIEW":
            return {
                ...state,
                grid_view: true,
            };

        case "SET_LISTVIEW":
            return {
                ...state,
                grid_view: false,
            };

        case "GET_SORT_VALUE":
            // let userSortValue = document.getElementById("sort");
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                sorting_value: action.payload,
            };

        case "SORTING_PRODUCTS":
            let newSortDate;
            // let tempSortProduct = [...action.payload];

            const { filter_products } = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                if (state.sorting_value === "lowest") {
                    return a.product_sizes[0].price - b.product_sizes[0].price;
                }

                if (state.sorting_value === "highest") {
                    return b.product_sizes[0].price - a.product_sizes[0].price;
                }

                if (state.sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (state.sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }

            }
            newSortDate = tempSortProduct.sort(sortingProducts);
            return {
                ...state,
                filter_products: newSortDate,
            }

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;

            
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, color, price } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text.toLowerCase());
                })
            }

            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category === category;
                })
            }

            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.company.toLowerCase() === company.toLowerCase();
                })
            }

            if (color !== 'all') {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.color.includes(color);
                })
            }


            if (price === 0) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price == price)
            }
            else {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return (parseInt(curElem.product_sizes[0].price) <= price);
                })
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice : 0,
                    price: 0,
                    minPrice: 0,
                }
            }

        default:
            return state;
    }

}

export default filterReducer;