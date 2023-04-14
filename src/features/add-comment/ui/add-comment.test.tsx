import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from 'shared/config/tests/rtl';
import AddComment from './add-comment';

describe('test features/add-comment', () => {
  test('should be in the document', () => {
    renderWithAll(<AddComment onSendComment={() => {}} />);
    expect(screen.getByTestId('add-comment')).toBeInTheDocument();
  });

  test('should transfer data to callback', () => {
    const sendCommenMock = jest.fn();
    renderWithAll(<AddComment onSendComment={sendCommenMock} />);

    const input = screen.getByTestId('add-comment-input');
    const form = screen.getByTestId('add-comment');

    fireEvent.change(input, { target: { value: 'hello world!' } });
    fireEvent.submit(form);

    expect(sendCommenMock).toHaveBeenCalledWith('hello world!');
  });
});
