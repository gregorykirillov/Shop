/* eslint-disable default-case */
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalSum = (obj) => {
    let sum = 0;
    Object.keys(obj).map((key) => {
        let price = obj[key][0]['price'];
        sum += price;
    })
    return sum;
};

const cart = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ITEM_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] 
                ? [action.payload] 
                : [ ...state.items[action.payload.id], action.payload ]
            }
            
            return {
                ...state,
                items: newItems,
                totalPrice: getTotalSum(newItems),
                totalCount: [].concat.apply([], Object.values(newItems)).length,
            };
        }

        case 'CLEAR_CART': {
            return {
                totalPrice: 0,
                totalCount: 0,
                items: {}
            }
        }

        case 'REMOVE_ITEM': {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload][0].price;

            delete newItems[action.payload];
            
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - 1,
            }
        }
    }
    return state;
}

export default cart;