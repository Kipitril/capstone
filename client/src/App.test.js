import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Voting System title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Voting System/i);
  expect(titleElement).toBeInTheDocument();
});

