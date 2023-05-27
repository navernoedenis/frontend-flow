import { render, screen } from '@testing-library/react';
import RatingCard from './rating-card';

describe('test entities/rating-card', () => {
  it('be in the document', () => {
    render(<RatingCard title="" stars={5} rating={0} />);
    expect(screen.getByTestId('rating-card')).toBeInTheDocument();
  });

  it('show title', () => {
    render(<RatingCard title="hello" stars={5} rating={0} />);
    const title = screen.getByTestId('rating-card-title');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('hello');
  });
});
