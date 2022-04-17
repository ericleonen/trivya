import StoreBanner from './StoreBanner';
import StoreItem from './StoreItem';

import './StoreCategory.css';

const StoreCategory = ({ categoryName, color, items, budget }) => {
    return (
        <div className="StoreCategory">
            <StoreBanner color={color}>{categoryName}</StoreBanner>
            <div className="store-item-list">
                { Object.keys(items)
                    .sort((a, b) => items[a].price - items[b].price)
                    .map((itemName, i) => {
                        return <StoreItem 
                                    key={'store_item_' + i}
                                    itemName={itemName} 
                                    price={items[itemName].price} 
                                    canBuy={budget >= items[itemName].price}
                                    isPurchased={items[itemName].purchased}
                                    isSelected={items[itemName].selected} 
                                    category={categoryName}
                            />
                    }) }
            </div>
        </div>
    );
};

export default StoreCategory;