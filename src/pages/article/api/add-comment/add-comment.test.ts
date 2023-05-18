import axios from 'axios';
import type { AppState, AppDispatch } from 'app/providers/store';
import { commentMock, userMock } from 'shared/config/tests/mocks/entities';
import { addComment } from './add-comment';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('test pages/article/add-comment', () => {
  let dispatch: AppDispatch;
  let getState: () => AppState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn().mockReturnValue({ auth: { me: userMock } });
  });

  it('return new comment', async () => {
    mockedAxios.post.mockResolvedValue({ data: commentMock });
    mockedAxios.get.mockResolvedValue({ data: commentMock });

    const action = addComment({ articleId: '1', comment: 'hello' });
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toBeCalledTimes(2);
    expect(response.meta.requestStatus).toBe('fulfilled');
    expect(response.payload).toEqual(commentMock);
  });

  it('return error', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Not found'));

    const action = addComment({ articleId: '', comment: '' });
    const response = await action(dispatch, getState, { client: mockedAxios });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toBeCalledTimes(2);
    expect(response.meta.requestStatus).toBe('rejected');
    expect(response.payload).toEqual('Not found');
  });
});
