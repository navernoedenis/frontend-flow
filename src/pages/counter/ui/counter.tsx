import { CounterEntity } from 'entities/counter';

function CounterPage() {
  return (
    <div data-testid="counter-page">
      <CounterEntity />
    </div>
  );
}

export default CounterPage;
