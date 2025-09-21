import React from 'react';
import PollForm from './components/PollForm';
import PollList from './components/PollList';

function App() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>Voting System (Capstone)</h1>
      <PollForm />
      <PollList />
    </div>
  );
}

export default App;

