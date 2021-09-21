import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchItems = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));

  axios.get(
    `http://localhost:3001/items?${category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      dispatch(setItems(data));
    });
}

export const setItems = (items) => ({
  type: 'SET_ITEMS',
  payload: items,
});
