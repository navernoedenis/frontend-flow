import axios from 'axios';
import type { AppState, AppDispatch } from '@/app/providers/store';
import { articleMock } from '@/entities/article';
import { articlesPageStateMock } from '../../model/mocks';

import { getArticles } from './get-articles';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('test pages/articles/get-articles', () => {
  let dispatch: AppDispatch;
  let getState: () => AppState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn().mockReturnValue({ articles: articlesPageStateMock });
  });

  it('should return articles', async () => {
    mockedAxios.get.mockResolvedValue({ data: [articleMock] });

    const action = getArticles();
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toBeCalledTimes(2);
    expect(response.meta.requestStatus).toBe('fulfilled');
    expect(response.payload).toEqual([articleMock]);
  });

  it('should return error', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Not found'));

    const action = getArticles();
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(dispatch).toBeCalledTimes(2);
    expect(response.meta.requestStatus).toBe('rejected');
    expect(response.payload).toEqual('Not found');
  });
});
