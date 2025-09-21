// client/src/components/PollList.js
import React from 'react';
import axios from 'axios';

function PollList({ polls = [], onVote }) {
  const handleVote = async (pollId, optionIndex) => {
    const poll = polls.find((p) => p.id === pollId);

    if (!poll) return;

    // Increment votes for the chosen option
    const updatedPoll = {
      ...poll,
      options: poll.options.map((opt, idx) =>
        idx === optionIndex ? { ...opt, votes: (opt.votes || 0) + 1 } : opt
      )
    };

    // Send update to API (json-server)
    await axios.put(`http://localhost:4000/polls/${pollId}`, updatedPoll);

    // Refresh list in parent
    if (onVote) onVote();
  };

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
                  <li key={index}>
                    {option.text} — {option.votes || 0} votes
                    <button
                      style={{ marginLeft: '8px' }}
                      onClick={() => handleVote(poll.id, index)}
                    >
                      Vote
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PollList;

