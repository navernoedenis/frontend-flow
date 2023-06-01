import * as router from 'react-router';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/render-with-all';
import { articleMock } from '../../../model/mocks';

import ArticleCard from './article-card';

let mockedCallback = jest.fn();

describe('test entities/article-card', () => {
  beforeEach(() => {
    window.open = jest.fn();
    mockedCallback = jest.fn();
    jest.spyOn(router, 'useNavigate').mockImplementation(() => mockedCallback);
  });

  test('be in the document', () => {
    renderWithAll(<ArticleCard article={articleMock} />);
    expect(screen.getByTestId('article-card')).toBeInTheDocument();
  });

  test('has classname: compact', () => {
    renderWithAll(<ArticleCard article={articleMock} isCompact />);
    expect(screen.getByTestId('article-card')).toHaveClass('compact');
  });

  test('opened in the tab', () => {
    renderWithAll(<ArticleCard article={articleMock} shouldOpenInNewTab />);
    const card = screen.getByTestId('article-card');
    fireEvent.click(card);
    expect(window.open).toHaveBeenCalledTimes(1);
  });

  test('href changed', () => {
    renderWithAll(<ArticleCard article={articleMock} />);
    const card = screen.getByTestId('article-card');
    const url = `/articles/${articleMock.id}`;
    fireEvent.click(card);
    expect(mockedCallback).toHaveBeenCalledWith(url);
  });

  test('extra function called', () => {
    renderWithAll(
      <ArticleCard article={articleMock} onClick={mockedCallback} />,
    );
    const card = screen.getByTestId('article-card');
    fireEvent.click(card);
    expect(mockedCallback).toBeCalled();
  });
});
