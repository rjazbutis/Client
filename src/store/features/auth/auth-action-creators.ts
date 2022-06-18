import { Dispatch } from 'redux';
import { Crudentials } from '../../../types';
import { AppAction } from '../../redux-types';
import {
  AuthSuccessAction,
  AuthFailureAction,
  AuthLoadingAction,
  AuthLogoutAction,
  AuthClearErrorAction,
  AuthActionType,
} from './auth-types';
import AuthService, { AuthResponseBody } from '../../../services/auth-service';
import {
  createNavigationSetRedirectAction,
  navigationClearRedirectAction,
} from '../navigation/navigation-action-creators';

const authLoadingAction: AuthLoadingAction = {
  type: AuthActionType.AUTH_LOADING,
};

export const authClearErrorAction: AuthClearErrorAction = {
  type: AuthActionType.AUTH_CLEAR_ERROR,
};

export const authLogoutAction: AuthLogoutAction = {
  type: AuthActionType.AUTH_LOGOUT,
};

const createAuthSuccessAction = (authReponseBody: AuthResponseBody): AuthSuccessAction => ({
  type: AuthActionType.AUTH_SUCCESS,
  payload: authReponseBody,
});

const createAuthFailureAction = (error: string): AuthFailureAction => ({
  type: AuthActionType.AUTH_FAILURE,
  payload: { error },
});

const authenticate = async (
  dispatch: Dispatch<AppAction>,
  authCallback: () => Promise<AuthResponseBody>,
  redirect: string,
) => {
  dispatch(authLoadingAction);
  try {
    const authResponseBody = await authCallback();
    const authSuccessAction = createAuthSuccessAction(authResponseBody);
    const navigationSetRedirectAction = createNavigationSetRedirectAction(redirect);

    dispatch(navigationSetRedirectAction);
    dispatch(authSuccessAction);
    dispatch(navigationClearRedirectAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createAuthFailureAction(errMsg);
    dispatch(authFailureAction);
  }
};

export const createAuthenticateActionThunk = (token: string, redirect: string) => async (
  dispatch: Dispatch<AppAction>,
): Promise<void> => {
  await authenticate(dispatch, async () => AuthService.authenticate(token), redirect);
};

export const createLoginActionThunk = (
  crudentials: Crudentials,
  redirect: string,
) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await authenticate(dispatch, async () => AuthService.login(crudentials), redirect);
};

export const createRegisterActionThunk = (
  crudentials: Crudentials,
  redirect: string,
) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await authenticate(dispatch, async () => AuthService.register(crudentials), redirect);
};
