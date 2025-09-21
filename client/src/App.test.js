// client/src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Voting System \(Capstone\)/i);
  expect(titleElement).toBeInTheDocument();
});

