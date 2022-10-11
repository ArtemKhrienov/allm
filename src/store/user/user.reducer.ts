import { AnyAction } from 'redux';

import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signOutFailed
} from './user.action';

export type TUserState = {
  readonly currentUser: TUserState | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

const USER_INITIAL_STATE: TUserState = {
  currentUser: null,
  isLoading: false,
  error: null
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: AnyAction
) => {
  if (signInSuccess.match(action))
    return { ...state, currentUser: action.payload };

  if (signOutSuccess.match(action))
    return { ...state, currentUser: null };

  if (signInFailed.match(action) || signOutFailed.match(action))
    return { ...state, error: action.payload };

  return state;
}