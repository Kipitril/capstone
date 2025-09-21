// client/src/components/PollList.test.js
import { render, screen } from '@testing-library/react';
import PollList from './PollList';

test('renders a list of polls', () => {
  const mockPolls = [
    { id: 1, question: 'Favorite color?', options: ['Red', 'Blue'] },
    { id: 2, question: 'Best language?', options: ['Python', 'JavaScript'] }
  ];

  render(<PollList polls={mockPolls} />);

  // Check if poll questions appear
  expect(screen.getByText(/Favorite color/i)).toBeInTheDocument();
  expect(screen.getByText(/Best language/i)).toBeInTheDocument();
});

