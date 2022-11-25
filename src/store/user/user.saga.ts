import { User } from 'firebase/auth';
import { all, call, put, takeLatest } from 'typed-redux-saga/macro';

import { USER_ACTION_TYPES } from './user.types';
import {
  signInSuccess,
  signInFailed,
  signOutSuccess,
  signOutFailed,
} from './user.action';
import {
  getCurrentUser,
  createUserDocFromAuth,
  signInWithGooglePopup,
  signOutUser,
  TAdditionalInfo,
} from '../../utils/firebase';

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInfo?: TAdditionalInfo
) {
  try {
    const userSnapshot = yield* call(
      createUserDocFromAuth,
      userAuth,
      additionalInfo
    );
    if (userSnapshot)
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onSignOutStart),
  ]);
}
