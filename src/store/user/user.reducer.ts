import { AnyAction } from 'redux';

import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signOutFailed,
  googleSignInStart,
  checkUserSession,
} from './user.action';

export type TUserState = {
  readonly currentUser: TUserState | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const USER_INITIAL_STATE: TUserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {
  if (googleSignInStart.match(action) || checkUserSession.match(action))
    return { ...state, isLoading: true };

  if (signInSuccess.match(action))
    return {
      ...state,
      currentUser: action.payload,
      isLoading: false,
      error: null,
    };

  if (signInFailed.match(action))
    return { ...state, error: action.payload, isLoading: false };

  if (signOutSuccess.match(action))
    return { ...state, currentUser: null, error: null };

  if (signOutFailed.match(action)) return { ...state, error: action.payload };

  return state;
};
