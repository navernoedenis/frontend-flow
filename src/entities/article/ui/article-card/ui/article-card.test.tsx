import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/providers';
import { articleMock } from '@/shared/config/jest/mocks/entities';

import ArticleCard from './article-card';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigate,
}));

describe('test entities/article-card', () => {
  beforeEach(() => {
    window.open = jest.fn();
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
    expect(navigate).toHaveBeenCalledWith(url);
  });

  test('extra function called', () => {
    const func = jest.fn();
    renderWithAll(<ArticleCard article={articleMock} onClick={func} />);
    const card = screen.getByTestId('article-card');
    fireEvent.click(card);
    expect(func).toBeCalled();
  });
});
