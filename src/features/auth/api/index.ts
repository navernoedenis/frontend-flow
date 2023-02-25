import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import type { TUser } from 'entities/user';
import type { AuthForm } from '../model/types';

export const signIn = createAsyncThunk<
  TUser,
  AuthForm,
  { rejectValue: string }
>('auth/sign-in', async (form, { rejectWithValue }) => {
  try {
    const response = await axios.post<TUser>(
      'http://localhost:4000/sign-in',
      form,
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data.error as string);
    }
    return rejectWithValue('Unexpected error');
  }
});
