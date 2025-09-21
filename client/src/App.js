// client/src/App.js
import React from 'react';
import './App.css';  // ✅ Import styles
import PollForm from './components/PollForm';
import PollList from './components/PollList';

function App() {
  return (
    <div className="container">
      <h1>Voting System (Capstone)</h1>
      <PollForm />
      <PollList />
    </div>
  );
}

export default App;

