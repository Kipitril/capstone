import React, { useEffect, useState } from 'react';
import { getPolls, voteOnPoll } from '../api/polls';

export default function PollList() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    getPolls().then(setPolls);
  }, []);

  const handleVote = async (pollId, optionIndex) => {
    await voteOnPoll(pollId, optionIndex);
    setPolls(await getPolls());
  };

  return (
    <div>
      <h2>Available Polls</h2>
      {polls.map((poll) => (
        <div key={poll.id} style={{ marginBottom: '20px' }}>
          <h3>{poll.question}</h3>
          <ul>
            {poll.options.map((opt, idx) => (
              <li key={idx}>
                {opt.text} — {opt.votes} votes
                <button onClick={() => handleVote(poll.id, idx)}>Vote</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

