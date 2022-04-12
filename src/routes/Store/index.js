import TopBar from '../../commons/TopBar';
import StoreCategory from './StoreCategory';

import './Store.css';

const Store = () => {
    return (
        <div className="Store">
            <TopBar text="Store" showBackArrow showCoins/>
            <StoreCategory categoryName="Themes"/>
            <StoreCategory categoryName="Sounds"/>
            <StoreCategory categoryName="Accessories"/>
        </div>
    );
};

export default Store;