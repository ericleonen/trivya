import { doc, onSnapshot, updateDoc, increment } from 'firebase/firestore'
import { db } from '.';

export const rewardUser = async (uid) => {
    console.log('e');
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
        coins: increment(1),
        trophies: increment(1),
    });
};

export const userListener = (uid, setUserData) => {
    return () => {
        const unsubscribe = onSnapshot(doc(db, 'users', uid), (snap) => {
            setUserData(snap.data());
        });

        return unsubscribe;
    }
}