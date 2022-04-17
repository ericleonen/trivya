import { useState, useEffect } from 'react';
import { userListener } from '../../firebase/user';
import { getItemImg } from '../../firebase/store';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/authentication';

import './AccessoryShelf.css';

const AccessoryShelf = () => {
    const [userData, setUserData] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            const unsubscribe = userListener(user.uid, setUserData)();
            return () => {
                unsubscribe();
                setUserData({});
            };
        }
    }, [setUserData, user]);

    return (Object.keys(userData).length > 0 && userData.inventory.Accessories !== 'none') && (
        <div className="AccessoryShelf">
            <img 
                src={`/storeAssets/Accessories/` + getItemImg(userData?.inventory.Accessories)} 
                className="accessory-img" 
            />
            <img 
                src={`/storeAssets/Accessories/stool.png`} 
                className="stool-img" 
            />
        </div>
    );
};

export default AccessoryShelf;