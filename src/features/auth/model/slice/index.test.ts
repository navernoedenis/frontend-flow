import type { AnyAction } from '@reduxjs/toolkit';

import { authReducer, initialState } from '.';
import { userMock } from 'shared/config/tests/mocks/entities';

import { AuthState } from '../types';
import { signIn } from '../../api/sign-in/sign-in';

describe('test feature/auth/reducer', () => {
  it('should add to state: isLoading', () => {
    const expectedState: AuthState = {
      error: '',
      isLoading: true,
      me: null,
    };

    const action: AnyAction = {
      type: signIn.pending.type,
    };

    const authState = authReducer(initialState, action);
    expect(authState).toEqual(expectedState);
  });

  it('should add to state: me', () => {
    const expectedState: AuthState = {
      error: '',
      isLoading: false,
      me: userMock,
    };

    const action: AnyAction = {
      type: signIn.fulfilled.type,
      payload: userMock,
    };

    const authState = authReducer(initialState, action);
    expect(authState).toEqual(expectedState);
  });

  it('should add to state: error', () => {
    const error = 'Bad password';

    const expectedState: AuthState = {
      error,
      isLoading: false,
      me: null,
    };

    const action: AnyAction = {
      type: signIn.rejected.type,
      payload: error,
    };

    const authState = authReducer(initialState, action);
    expect(authState).toEqual(expectedState);
  });
});
