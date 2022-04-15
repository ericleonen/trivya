import { initializeApp } from 'firebase/app';
import { 
  getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJsxRZgbkULS8ysJh9Z7CD7twPsNzr1rM",
  authDomain: "trivya-177cf.firebaseapp.com",
  projectId: "trivya-177cf",
  storageBucket: "trivya-177cf.appspot.com",
  messagingSenderId: "25513986704",
  appId: "1:25513986704:web:0fee046523fdffa395e615"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);