import TopBar from '../../commons/TopBar';
import StoreCategory from './StoreCategory';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/authentication';
import { useState, useEffect } from 'react';
import { userListener } from '../../firebase/user';
import AccessoryShelf from '../../commons/AccessoryShelf';

import './Store.css';

const Store = () => {
    const [user, loading, error] = useAuthState(auth);

    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (user) {
            const unsubscribe = userListener(user.uid, setUserData)();
            return unsubscribe;
        }
    }, [user, setUserData]);

    return (
        <div className="Store view">
            <TopBar text="Store" showBackArrow showCoins/>
            {
                Object.keys(userData).length > 0 && 
                Object.keys(userData.store)
                .sort()
                .map((categoryName) => {
                    const category = userData.store[categoryName];
                    return <StoreCategory 
                                key={categoryName}
                                categoryName={categoryName} 
                                color={category.color} 
                                items={category.items} 
                                budget={userData.coins}
                           />
                })
            }
            <AccessoryShelf />
        </div>
    );
};

export default Store;