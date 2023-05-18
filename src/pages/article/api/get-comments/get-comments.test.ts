import axios from 'axios';
import type { AppState, AppDispatch } from 'app/providers/store';

import { commentMock } from 'shared/config/tests/mocks/entities';
import { getComments } from './get-comments';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('test pages/article/get-comments', () => {
  let dispatch: AppDispatch;
  let getState: () => AppState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('return comments', async () => {
    mockedAxios.get.mockResolvedValue({ data: [commentMock] });
    const action = getComments('1');
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe('fulfilled');
    expect(response.payload).toEqual([commentMock]);
  });

  it('return error', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Something went wrong...'));
    const action = getComments('');
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(response.meta.requestStatus).toBe('rejected');
    expect(response.payload).toEqual('Something went wrong...');
  });
});
