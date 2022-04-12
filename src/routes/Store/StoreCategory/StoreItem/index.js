import './StoreItem.css';

const StoreItem = () => {
    return (
        <div className="StoreItem">
            <img className="store-item-img" />
            <p className="store-item-name">Item</p>
            <p className="store-item-price">50</p>
        </div>
    );
};

export default StoreItem;