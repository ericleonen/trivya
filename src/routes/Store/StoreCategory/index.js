import StoreBanner from './StoreBanner';
import StoreItem from './StoreItem';

import './StoreCategory.css';

const StoreCategory = ({ categoryName, color }) => {
    return (
        <div className="StoreCategory">
            <StoreBanner color={color}>{categoryName}</StoreBanner>
            <div className="store-item-list">
                <StoreItem />
                <StoreItem />
            </div>
        </div>
    );
};

export default StoreCategory;