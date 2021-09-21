import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '..'
import { useSelector } from 'react-redux';

function ItemBlock({ id, name, imageUrl, price, options, onClickAddItem }) {
    const { items } = useSelector(({ cart }) => cart);
    const [activeButton, setActiveButton] = React.useState(true);

    if (id in items & activeButton)
        setActiveButton(!activeButton);
    
    const onAddItem = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            options
        };
        onClickAddItem(obj);
    };

    return (
        <div className="item_block">
            <img src={imageUrl} alt="" />
            <h4 className="item-block__title">{name}  
                {
                    options.map((options, index) => <span className="item-block__options" key={`${options}_${index}`}>{options}</span>)
                } 
            </h4>
            <div className="item-block__bottom">
                <div className="item-block__price">
                    <div className="item-block__price">{price.toLocaleString()}₽</div>
                </div>
                <Button className={!activeButton ? 'disabled' : ''} onClick={onAddItem} outline>
                    <svg width="12" height="12"
                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#5bb2fb"></path>
                    </svg>
                    <span>Добавить</span>
                </Button>
            </div>
        </div>
    )
}

ItemBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    onClickAddItem: PropTypes.func,
}

ItemBlock.defaultProps = {
    name: '',
    price: '',
    imageUrl: '',
    options: [],
};

export default ItemBlock
