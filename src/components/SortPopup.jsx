import React from 'react';
import PropTypes from 'prop-types';

const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const sortRef = React.useRef();
    const activeLabel = items.find(obj => obj.type === activeSortType).name;

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    }

    const onSelectItem = (index) => {
        if (onClickSortType) {
            onClickSortType(index);
        }
        setVisiblePopup(false);
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);
    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <b>Сортировка по: </b>
                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>
            { visiblePopup &&
                <div className="sort__popup">
                    <ul>
                        {items &&
                            items.map((obj, index) => (
                                <li className={activeSortType === obj.type ? 'active' : ''}
                                    onClick={() => onSelectItem(obj)}
                                    key={`${obj.name}_${index}`}>{obj.name}</li>
                            ))}
                    </ul>
                </div>
            }
        </div>
    )
});

SortPopup.propTypes = { 
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeSortType: PropTypes.string.isRequired,
    onClickSortType: PropTypes.func.isRequired,
}

SortPopup.defaultProps = { 
    items: [],
}

export default SortPopup

