import axios from 'axios';
import type { AppState, AppDispatch } from 'app/providers/store';
import { getArticle } from './get-article';

import { articleMock } from 'shared/config/tests/mocks/entities';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('test pages/article/get-article', () => {
  let dispatch: AppDispatch;
  let getState: () => AppState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should return article', async () => {
    mockedAxios.get.mockResolvedValue({ data: articleMock });

    const action = getArticle('1');
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toBeCalledTimes(2);
    expect(response.meta.requestStatus).toBe('fulfilled');
    expect(response.payload).toEqual(articleMock);
  });

  it('should return error', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Not found'));

    const action = getArticle('');
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toBeCalledTimes(2);
    expect(response.meta.requestStatus).toBe('rejected');
    expect(response.payload).toEqual('Not found');
  });
});
