export const addItemToCart = (itemObj) => ({
    type: 'ADD_ITEM_CART',
    payload: itemObj,
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id,
})