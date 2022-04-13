import Container from '../../../../commons/Container';

import './StoreItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const StoreItem = () => {
    return (
        <div className="StoreItem">
            <Container color="#E0E0E0" height="155px" width="125px">
                <p className="text store-item-name">Item</p>
                <img className="store-item-img" src="https://pngimg.com/uploads/teddy_bear/teddy_bear_PNG94.png"/>
                <div className="store-item-coins-container">
                    <FontAwesomeIcon icon={faCoins} className="coins-icon icon icon-border"/>
                    <p className="store-item-price text">50</p>
                </div>
            </Container>
        </div>
    );
};

export default StoreItem;