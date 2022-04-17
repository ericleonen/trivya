import { doc, getDoc, increment, updateDoc } from "@firebase/firestore";
import { db } from ".";

const generateItem = (price) => {
    return {
        price,
        purchased: false,
        selected: false
    }
};

export const store = {
    'Accessories': {
        color: '#5BBFDF',
        items: {
            'Rock': generateItem(25),
            'Ducky': generateItem(50),
            'Teddy Bear': generateItem(100)
        }
    },
    'Avatars': {
        color: '#A020F0',
        items: {
            'Happy': generateItem(25),
            'Batman': generateItem(50),
            'Einstein': generateItem(100)
        }
    }
};

export const getItemImg = (itemName) => {
    if (itemName) {
        itemName = itemName.replace(/\s/g, '');
        itemName = itemName.substring(0, 1).toLowerCase() + itemName.substring(1);
        return itemName + '.png';   
    }
};

export const buyItem = async (uid, category, itemName, price) => {
    const userRef = doc(db, 'users', uid);

    await updateDoc(userRef, {
        [`store.${category}.items.${itemName}.purchased`]: true,
        coins: increment(-price)
    });
};

export const toggleSelectItem = async (uid, category, selectedItemName) => {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data();

    const newItems = {};
    Object.keys(userData.store[category].items).forEach((itemName) => {
        newItems[itemName] = userData.store[category].items[itemName];
        newItems[itemName].selected = (itemName === selectedItemName);
    });

    await updateDoc(userRef, {
        [`store.${category}.items`]: newItems,
        [`inventory.${category}`]: selectedItemName
    });
}