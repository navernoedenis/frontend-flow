import { screen, fireEvent } from '@testing-library/react';
import { renderWithAll } from '@/shared/config/jest/render-with-all';
import AddComment from './add-comment';

describe('test features/add-comment', () => {
  test('be in the document', () => {
    renderWithAll(<AddComment onSendComment={Function} />);
    expect(screen.getByTestId('add-comment')).toBeInTheDocument();
  });

  test('callback called with data', () => {
    const onSendComment = jest.fn();
    renderWithAll(<AddComment onSendComment={onSendComment} />);
    const form = screen.getByTestId('add-comment');
    const input = screen.getByTestId('add-comment-input');

    fireEvent.change(input, { target: { value: 'hello world!' } });
    fireEvent.submit(form);
    expect(onSendComment).toHaveBeenCalledWith('hello world!');
  });

  test('text field: disabled', () => {
    renderWithAll(<AddComment onSendComment={Function} isDisabled />);
    expect(screen.getByTestId('add-comment-input')).toBeDisabled();
  });

  test('text field: not disabled', () => {
    renderWithAll(<AddComment onSendComment={Function} />);
    expect(screen.getByTestId('add-comment-input')).not.toBeDisabled();
  });

  test('buttons: disabled', () => {
    renderWithAll(<AddComment onSendComment={Function} />);
    expect(screen.getByTestId('add-comment-reset-button')).toBeDisabled();
    expect(screen.getByTestId('add-comment-send-button')).toBeDisabled();
  });

  test('buttons: not disabled', () => {
    renderWithAll(<AddComment onSendComment={Function} />);
    const input = screen.getByTestId('add-comment-input');
    fireEvent.change(input, { target: { value: 'helloooooo' } });

    expect(screen.getByTestId('add-comment-reset-button')).not.toBeDisabled();
    expect(screen.getByTestId('add-comment-send-button')).not.toBeDisabled();
  });

  test('buttons are disabled, despite that the text field contains a value', () => {
    renderWithAll(<AddComment onSendComment={Function} isDisabled />);
    const input = screen.getByTestId('add-comment-input');
    fireEvent.change(input, { target: { value: 'helloooooo' } });

    expect(screen.getByTestId('add-comment-reset-button')).toBeDisabled();
    expect(screen.getByTestId('add-comment-send-button')).toBeDisabled();
  });
});
