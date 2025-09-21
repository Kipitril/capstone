// client/src/api/polls.js
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export async function createPoll(poll) {
  // poll expected shape: { question: string, options: [{ id, text, votes }], createdAt }
  const res = await axios.post(`${API_BASE}/polls`, poll);
  return res.data;
}

export async function getPolls() {
  const res = await axios.get(`${API_BASE}/polls`);
  return res.data;
}

export async function getPollById(id) {
  const res = await axios.get(`${API_BASE}/polls/${id}`);
  return res.data;
}

