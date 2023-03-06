import { authReducer, initialState } from '.';
import { AuthState } from '../types';
import { signIn } from '../../api/sign-in/sign-in';

import type { AnyAction } from '@reduxjs/toolkit';
import type { User } from 'entities/user';

const me: User = {
  id: 1,
  name: 'navernoedenis',
  password: 'root',
};

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
      me,
    };

    const action: AnyAction = {
      type: signIn.fulfilled.type,
      payload: me,
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
