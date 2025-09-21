import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export async function getPolls() {
  const res = await axios.get(`${API_BASE}/polls`);
  return res.data;
}

export async function createPoll(poll) {
  const res = await axios.post(`${API_BASE}/polls`, poll);
  return res.data;
}

export async function voteOnPoll(pollId, optionIndex) {
  const res = await axios.get(`${API_BASE}/polls/${pollId}`);
  const poll = res.data;
  poll.options[optionIndex].votes += 1;
  await axios.put(`${API_BASE}/polls/${pollId}`, poll);
  return poll;
}

