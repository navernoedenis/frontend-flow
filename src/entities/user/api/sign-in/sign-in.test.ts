import axios from 'axios';
import { httpSignIn } from './sign-in';

import type { AppDispatch, AppState } from '@/app/providers/store';
import { userMock } from '@/entities/user';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('test feature/auth/sign-in', () => {
  let dispatch: AppDispatch;
  let getState: () => AppState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should be: success', async () => {
    mockedAxios.post.mockResolvedValue({ data: userMock });

    const action = httpSignIn({ name: 'denis', password: '12345' });
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe('fulfilled');
    expect(response.payload).toEqual(userMock);
  });

  it('should be: error', async () => {
    mockedAxios.post.mockRejectedValue(new Error('User not found'));

    const action = httpSignIn({ name: 'test', password: '1234' });
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toBeCalledTimes(2);
    expect(response.meta.requestStatus).toBe('rejected');
    expect(response.payload).toBe('User not found');
  });
});
