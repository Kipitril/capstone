// client/src/components/PollForm.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PollForm from './PollForm';
import * as api from '../api/polls';

jest.mock('../api/polls');

test('creates a poll when form is valid', async () => {
  api.createPoll.mockResolvedValue({ id: 1, question: 'Q', options: [] });

  render(<PollForm />);
  const questionInput = screen.getByLabelText(/question/i);
  fireEvent.change(questionInput, { target: { value: 'Favorite color?' } });

  const optionInputs = screen.getAllByPlaceholderText(/option/i);
  fireEvent.change(optionInputs[0], { target: { value: 'Red' } });
  fireEvent.change(optionInputs[1], { target: { value: 'Blue' } });

  fireEvent.click(screen.getByRole('button', { name: /create poll/i }));

  await waitFor(() => expect(api.createPoll).toHaveBeenCalledTimes(1));
});

