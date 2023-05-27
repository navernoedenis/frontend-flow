import { screen } from '@testing-library/react';
import { commentMock } from '@/shared/config/jest/mocks/entities';
import { renderWithAll } from '@/shared/config/jest/providers';

import CommentList from './comment-list';

describe('test entities/comment-list', () => {
  it('be in the document', () => {
    renderWithAll(<CommentList comments={[commentMock]} />);
    expect(screen.getByTestId('comment-list')).toBeInTheDocument();
  });

  it('show skeletons on loading', () => {
    renderWithAll(<CommentList comments={[]} isLoading />);
    const skeleton = screen.getAllByTestId('comment-skeleton')[0];
    expect(skeleton).toBeInTheDocument();
  });

  test('has classname: extra', () => {
    renderWithAll(<CommentList className="extra" comments={[commentMock]} />);
    expect(screen.getByTestId('comment-list')).toHaveClass('extra');
  });

  it('not be in the document', () => {
    renderWithAll(<CommentList comments={[]} />);
    expect(screen.queryByTestId('comment-list')).not.toBeInTheDocument();
  });
});
