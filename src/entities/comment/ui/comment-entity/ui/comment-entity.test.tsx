import { screen } from '@testing-library/react';
import { commentMock } from '@/shared/config/jest/mocks/entities';
import { renderWithAll } from '@/shared/config/jest/providers';
import { routes } from '@/shared/constants/routes';

import CommentEntity from './comment-entity';

describe('test entities/comment', () => {
  it('be in the document', () => {
    renderWithAll(<CommentEntity comment={commentMock} />);
    expect(screen.getByTestId('comment-entity')).toBeInTheDocument();
  });

  it('correct user-profile link href', () => {
    renderWithAll(<CommentEntity comment={commentMock} />);
    const { id: userId } = commentMock.user;
    const link = screen.getByTestId('comment-entity-link');
    expect(link).toHaveAttribute('href', routes.profile(userId));
  });
});
