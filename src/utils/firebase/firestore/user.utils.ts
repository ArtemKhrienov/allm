import { User } from "firebase/auth";
import {
  getFirestore,
  QueryDocumentSnapshot,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

export type TAdditionalInfo = {
  displayName?: string;
};

export type TUserData = {
  displayName: string;
  email: string;
  createdAt: Date;
};

const database = getFirestore();

export const createUserDocFromAuth = async (
  userAuth: User,
  additionalInfo = {} as TAdditionalInfo
): Promise<void | QueryDocumentSnapshot<TUserData>> => {
  const userDocRef = doc(database, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.error("createUserDocFromAuth::can't create new user", error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<TUserData>;
};
