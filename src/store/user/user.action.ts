import {USER_ACTION_TYPES} from './user.types';
import {TUserData} from '../../utils/firebase/firebase.utils';
import {createAction, TAction, TActionWithPayload, withMatcher} from '../../utils/reducer/reducer.utils';

export type CheckUserSession = TAction<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type SetCurrentUser = TActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, TUserData>;
export type GoogleSignInStart = TAction<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type SignInSuccess = TActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, TUserData>;
export type SignInFailed = TActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;
export type SignOutStart = TAction<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = TAction<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailed = TActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export const checkUserSession = withMatcher((): CheckUserSession =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const setCurrentUser = withMatcher((
  user: TUserData
): SetCurrentUser =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

export const googleSignInStart = withMatcher((): GoogleSignInStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const signInSuccess = withMatcher((
  user: TUserData & { id: string }
): SignInSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = withMatcher((
  error: Error
): SignInFailed =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signOutStart = withMatcher((): SignOutStart =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher((): SignOutSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((
  error: Error
): SignOutFailed =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));
