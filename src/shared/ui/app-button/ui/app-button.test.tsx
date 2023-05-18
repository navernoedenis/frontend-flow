import { fireEvent, screen, render } from '@testing-library/react';
import AppButton from './app-button';

describe('test shared/app-button', () => {
  it('be in the document', () => {
    render(<AppButton />);
    expect(screen.getByTestId('app-button')).toBeInTheDocument();
  });

  it('has classname: large', () => {
    render(<AppButton size="large" />);
    expect(screen.getByTestId('app-button')).toHaveClass('large');
  });

  it('onclick works', () => {
    const onClick = jest.fn();
    render(<AppButton onClick={onClick} />);
    fireEvent.click(screen.getByTestId('app-button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('show children text', () => {
    const text = 'test button text...';
    render(<AppButton children={text} />);
    expect(screen.getByTestId('app-button')).toHaveTextContent(text);
  });

  it('show spinner on loading', () => {
    render(<AppButton isLoading />);
    expect(screen.getByTestId('app-button-spinner')).toBeInTheDocument();
  });

  it('hide spinner if not loading', () => {
    render(<AppButton />);
    expect(screen.queryByTestId('app-button-spinner')).not.toBeInTheDocument();
  });
});
