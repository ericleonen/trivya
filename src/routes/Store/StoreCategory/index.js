import StoreBanner from './StoreBanner';
import StoreItem from './StoreItem';

import './StoreCategory.css';

const StoreCategory = ({ categoryName }) => {
    return (
        <div className="StoreCategory">
            <StoreBanner>{categoryName}</StoreBanner>
            <div className="store-item-list">
                <StoreItem />
                <StoreItem />
            </div>
        </div>
    );
};

export default StoreCategory;