import TopBar from '../../commons/TopBar';
import StoreCategory from './StoreCategory';

import './Store.css';

const Store = () => {
    return (
        <div className="Store view">
            <TopBar text="Store" showBackArrow showCoins/>
            <StoreCategory categoryName="Themes" color="#5BBFDF" />
            <StoreCategory categoryName="Sounds" color="#DF5BCA" />
            <StoreCategory categoryName="Accessories" color="#EBB668" />
        </div>
    );
};

export default Store;