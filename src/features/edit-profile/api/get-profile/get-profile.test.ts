import axios from 'axios';
import type { AppState, AppDispatch } from '@/app/providers/store';

import { profileMock } from '@/entities/profile';
import { getProfile } from './get-profile';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('test entities/profile/get-profile', () => {
  let dispatch: AppDispatch;
  let getState: () => AppState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('success', async () => {
    mockedAxios.get.mockResolvedValue({ data: profileMock });
    const action = getProfile('1');
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe('fulfilled');
    expect(response.payload).toEqual(profileMock);
  });

  it('failure', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Invalid token'));
    const action = getProfile('1');
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe('rejected');
    expect(response.payload).toEqual('Invalid token');
  });
});
