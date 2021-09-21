import React from 'react'
import { Categories, SortPopup, ItemBlock, LoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchItems } from '../redux/actions/items'

const categoryNames = ['Новые', 'Б/У'];
const sortItems = [
    { name: 'умолчанию', type:'default', order: 'asc' }, 
    { name:'цене', type:'price', order: 'asc' }, 
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ items }) => items.items);
    const isLoaded = useSelector(({ items }) => items.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
        dispatch(fetchItems(sortBy, category));
      }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddItemToCart = (obj) => {
        dispatch({
            type: 'ADD_ITEM_CART',
            payload: obj,
        })
    }

    return (
        <div className="container">
            <div className="filter-block">
                <Categories 
                    activeCategory={ category }
                    onClickCategory={ onSelectCategory }
                    items={ categoryNames } 
                />
                <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все</h2>
            <div className="content_items">
                { isLoaded 
                    ? items.map((obj) => (
                        <ItemBlock 
                            onClickAddItem={handleAddItemToCart} 
                            key={obj.id} 
                            isLoading={true} 
                            {...obj}
                        />
                    )) 
                : Array(10).fill(0)
                .map((_, index) => <LoadingBlock key={index}/>)}
            </div>
        </div>
    )
}

export default Home
