import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver
} from 'firebase/auth';
import {
  getFirestore,
  QueryDocumentSnapshot,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

import { getEnvVariable } from '../application.helpers';

export type TAdditionalInfo = {
  displayName?: string;
}

export type TUserData = {
  displayName: string;
  email: string;
  createdAt: Date;
}

initializeApp({
  apiKey: getEnvVariable('REACT_APP_FIREBASE_API_KEY'),
  authDomain: getEnvVariable('REACT_APP_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnvVariable('REACT_APP_FIREBASE_PROJECT_ID'),
  storageBucket: getEnvVariable('REACT_APP_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnvVariable('REACT_APP_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnvVariable('REACT_APP_FIREBASE_APP_ID'),
  measurementId: getEnvVariable('REACT_APP_FIREBASE_MEASUREMENT_ID')
});

const googleAuthProvider = new GoogleAuthProvider();
const database = getFirestore();

googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
}

export const createUserDocFromAuth = async (
  userAuth: User,
  additionalInfo = {} as TAdditionalInfo
): Promise<void | QueryDocumentSnapshot<TUserData>> => {
  const userDocRef = doc(database, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.error('createUserDocFromAuth::can\'t create new user', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<TUserData>;
}