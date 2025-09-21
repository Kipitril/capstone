// client/src/components/PollForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import PollForm from './PollForm';

test('renders poll form fields', () => {
  render(<PollForm />);

  // Check for "Question" input
  const questionInput = screen.getByPlaceholderText(/What is your favorite language/i);
  expect(questionInput).toBeInTheDocument();

  // Check "Create poll" button
  const button = screen.getByText(/Create poll/i);
  expect(button).toBeInTheDocument();
});

test('allows typing a question', () => {
  render(<PollForm />);
  const questionInput = screen.getByPlaceholderText(/What is your favorite language/i);
  fireEvent.change(questionInput, { target: { value: 'Best programming language?' } });
  expect(questionInput.value).toBe('Best programming language?');
});

