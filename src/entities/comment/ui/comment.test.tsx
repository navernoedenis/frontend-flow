import { screen } from '@testing-library/react';
import { commentMock } from 'shared/config/tests/mocks/entities';
import { renderWithAll } from 'shared/config/tests/wrappers';

import CommentEntity from './comment';

describe('test entities/comment', () => {
  it('should be in the document', () => {
    renderWithAll(<CommentEntity comment={commentMock} />);
    expect(screen.getByTestId('comment-entity')).toBeInTheDocument();
  });
});
