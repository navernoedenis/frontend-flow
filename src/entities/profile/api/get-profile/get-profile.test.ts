import axios from 'axios';
import { getProfile } from './get-profile';
import { Country } from 'shared/constants/country';

import type { AppState, AppDispatch } from 'app/providers/store';
import type { Profile } from '../../model/types';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

const profile: Profile = {
  age: 100,
  avatar: '',
  country: Country.FRANCE,
  position: 'developer',
  name: 'Zemmour',
};

describe('test entities/profile/get-profile', () => {
  let dispatch: AppDispatch;
  let getState: () => AppState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should be: success', async () => {
    mockedAxios.get.mockResolvedValue({ data: profile });
    const action = getProfile();
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe('fulfilled');
    expect(response.payload).toEqual(profile);
  });

  it('should be: failure', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Invalid token'));
    const action = getProfile();
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe('rejected');
    expect(response.payload).toEqual('Invalid token');
  });
});
