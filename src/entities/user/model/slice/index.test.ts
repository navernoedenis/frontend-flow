import type { AnyAction } from '@reduxjs/toolkit';

import { userReducer, initialState } from '../slice';
import { userMock } from '@/entities/user';

import { UserState } from '../types';
import { httpSignIn } from '../../api/sign-in/sign-in';

describe('test feature/auth/reducer', () => {
  it('should add to state: isLoading', () => {
    const expectedState: UserState = {
      auth: null,
      error: '',
      isLoading: true,
    };

    const action: AnyAction = {
      type: httpSignIn.pending.type,
    };

    const userState = userReducer(initialState, action);
    expect(userState).toEqual(expectedState);
  });

  it('should add to state: me', () => {
    const expectedState: UserState = {
      auth: userMock,
      error: '',
      isLoading: false,
    };

    const action: AnyAction = {
      type: httpSignIn.fulfilled.type,
      payload: userMock,
    };

    const userState = userReducer(initialState, action);
    expect(userState).toEqual(expectedState);
  });

  it('should add to state: error', () => {
    const error = 'Bad password';

    const expectedState: UserState = {
      auth: null,
      error,
      isLoading: false,
    };

    const action: AnyAction = {
      type: httpSignIn.rejected.type,
      payload: error,
    };

    const userState = userReducer(initialState, action);
    expect(userState).toEqual(expectedState);
  });
});
