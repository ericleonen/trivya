import { doc, 
         onSnapshot, 
         updateDoc, 
         increment, 
         query, 
         collection, 
         where,
         orderBy,
         getDocs,
         getDoc
        } from 'firebase/firestore'
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
};

export const getUsersRanked = async () => {
    const usersQ = query(
                        collection(db, 'users'), 
                        where('trophies', '>', 0), 
                        orderBy('trophies', 'desc')
                    );

    const usersSnap = await getDocs(usersQ);
    const usersRanked = [];
    usersSnap.forEach((doc) => {
        usersRanked.push(doc.data());
    });

    return usersRanked;
};

export const getUserData = async (uid) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    }
    else {
        return null;
    }
}; 

export const updateHighScore = async (uid, score) => {
    const userRef = doc(db, 'users', uid);

    await updateDoc(userRef, {
        highScore: score
    });
}