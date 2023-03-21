import axios from 'axios';
import type { AppState, AppDispatch } from 'app/providers/store';

import { profileMock } from 'shared/config/tests/mocks/entities';
import { updateProfile } from './update-profile';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('test entities/profile/update-profile', () => {
  let dispatch: AppDispatch;
  let getState: () => AppState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should be: success', async () => {
    mockedAxios.put.mockResolvedValue({ data: profileMock });
    const action = updateProfile(profileMock);
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.put).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe('fulfilled');
    expect(response.payload).toEqual(profileMock);
  });

  it('should be: failure', async () => {
    mockedAxios.put.mockRejectedValue(new Error('Invalid token'));
    const action = updateProfile(profileMock);
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.put).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe('rejected');
    expect(response.payload).toEqual('Invalid token');
  });
});
