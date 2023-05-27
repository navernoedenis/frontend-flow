import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/providers';

import type { ArticleTag } from '../model/types';
import ArticleSelectTag from './article-select-tag';

describe('test features/article-select-tag', () => {
  let onSelectTag = jest.fn();

  afterEach(() => {
    onSelectTag = jest.fn();
  });

  test('be in the document', async () => {
    renderWithAll(<ArticleSelectTag tag="all" onSelectTag={onSelectTag} />);
    expect(screen.getByTestId('article-select-tag')).toBeInTheDocument();
  });

  test('must be 4 buttons', async () => {
    renderWithAll(<ArticleSelectTag tag="all" onSelectTag={onSelectTag} />);
    const buttons = screen.getAllByTestId('article-select-tag-button');
    expect(buttons.length).toBe(4);
  });

  test('onSelectTag is called', async () => {
    renderWithAll(<ArticleSelectTag onSelectTag={onSelectTag} tag="all" />);
    const [all, business, programming, science] = screen.getAllByTestId(
      'article-select-tag-button',
    );

    fireEvent.click(science);
    expect(onSelectTag).toBeCalledTimes(1);
  });

  test('programming-button is chosen', async () => {
    let tag: ArticleTag = 'all';

    renderWithAll(
      <ArticleSelectTag
        onSelectTag={(selectedTag) => (tag = selectedTag)}
        tag={tag}
      />,
    );
    const [all, business, programming, science] = screen.getAllByTestId(
      'article-select-tag-button',
    );

    fireEvent.click(programming);
    expect(tag).toBe('programming');
  });
});
