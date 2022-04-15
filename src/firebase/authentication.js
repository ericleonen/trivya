import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
  } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'
import { app, db } from '.';
import { getUserData } from './user';

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;

        if (await getUserData(user.uid) == null) {
            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                name: user.displayName,
                authProvider: 'google',
                email: user.email,
                trophies: 0,
                coins: 0,
                highScore: 0
            });
        }
    }
    catch (err) {
        console.error(err);
    }
};

export const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
        console.error(err);
    }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        if (await getUserData(user.uid) == null) {
            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                name,
                authProvider: 'local',
                email,
                trophies: 0,
                coins: 0,
                highScore: 0
            });
        }
    }
    catch (err) {
        console.error(err);
    }
};

export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    }
    catch (err) {
        console.error(err);
    }
};

export const logout = () => {
    signOut(auth);
}