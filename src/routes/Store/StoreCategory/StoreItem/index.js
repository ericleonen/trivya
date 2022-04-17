import Container from '../../../../commons/Container';
import { buyItem, getItemImg, toggleSelectItem } from '../../../../firebase/store';
import Button from '../../../../commons/Button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase/authentication';

import './StoreItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const StoreItem = ({ itemName, price, canBuy, category, isPurchased, isSelected }) => {
    const [user, loading, error] = useAuthState(auth);

    const makePurchase = () => {
        buyItem(user.uid, category, itemName, price);
    };

    const toggleSelection = () => {
        toggleSelectItem(user.uid, category, itemName);
    }

    return (
        <div className="StoreItem">
            <Container color={isSelected ? "#92D35B" : "#E0E0E0"} height="145px" width="135px" centerContent>
                <p className="text store-item-name">{itemName}</p>
                <img className="store-item-img" src={`/storeAssets/${category}/` + getItemImg(itemName)} />
            </Container>
            { isPurchased ?
                <Button
                    color={isSelected ? "#92D35B" : "darkorange"}
                    func={toggleSelection}
                    darkText={isSelected}
                >
                    { isSelected ? 'Selected' : 'Select' }
                </Button>
                :
                <Button 
                    color={canBuy ? "#92D35B" : "gray"}
                    disabled={!canBuy}
                    func={makePurchase}
                >
                    <div className="store-item-coins-container">
                        <FontAwesomeIcon icon={faCoins} className="coins-icon icon icon-border"/>
                        <p className="store-item-price text">{price}</p>
                    </div>
                </Button>
            }
        </div>
    );
};

export default StoreItem;