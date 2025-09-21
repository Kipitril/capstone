// client/src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import PollForm from './components/PollForm';
import PollList from './components/PollList';
import axios from 'axios';

function App() {
  const [polls, setPolls] = useState([]);

  const fetchPolls = async () => {
    const response = await axios.get('http://localhost:4000/polls');
    setPolls(response.data);
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  return (
    <div className="container">
      <h1>Voting System (Capstone)</h1>
      <PollForm onPollCreated={fetchPolls} />
      <PollList polls={polls} onVote={fetchPolls} />
    </div>
  );
}

export default App;

