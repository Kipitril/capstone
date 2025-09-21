// client/src/components/PollList.js
import React from 'react';

function PollList({ polls = [] }) {
  return (
    <div>
      <h2>Available Polls</h2>
      {polls.length === 0 ? (
        <p>No polls available. Create one above!</p>
      ) : (
        <ul>
          {polls.map((poll) => (
            <li key={poll.id}>
              <strong>{poll.question}</strong>
              <ul>
                {poll.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PollList;  // ✅ This fixes your "no export" error

