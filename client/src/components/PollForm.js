// client/src/components/PollForm.js
import React, { useState } from 'react';
import { createPoll } from '../api/polls';

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

export default function PollForm({ onCreated }) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([
    { id: makeId(), text: '' },
    { id: makeId(), text: '' }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const updateOptionText = (id, value) => {
    setOptions(prev => prev.map(o => (o.id === id ? { ...o, text: value } : o)));
  };

  const addOption = () => {
    setOptions(prev => [...prev, { id: makeId(), text: '' }]);
  };

  const removeOption = (id) => {
    if (options.length <= 2) return; // require at least 2 options
    setOptions(prev => prev.filter(o => o.id !== id));
  };

  const validate = () => {
    if (!question.trim()) {
      setError('Question is required.');
      return false;
    }
    const filled = options.map(o => o.text.trim()).filter(Boolean);
    if (filled.length < 2) {
      setError('Please provide at least two non-empty options.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!validate()) return;
    setLoading(true);

    const poll = {
      question: question.trim(),
      options: options.map(o => ({ id: o.id, text: o.text.trim(), votes: 0 })),
      createdAt: new Date().toISOString()
    };

    try {
      const created = await createPoll(poll);
      setSuccess('Poll created successfully!');
      setQuestion('');
      setOptions([{ id: makeId(), text: '' }, { id: makeId(), text: '' }]);
      if (onCreated) onCreated(created);
    } catch (err) {
      console.error(err);
      setError('Failed to create poll. Check server and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 700 }}>
      <h2>Create a new poll</h2>

      <label style={{ display: 'block', margin: '8px 0' }}>
        <div>Question</div>
        <input
          aria-label="question"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="e.g. What is your favorite language?"
          style={{ width: '100%', padding: 8 }}
        />
      </label>

      <div style={{ marginTop: 12 }}>
        <div style={{ marginBottom: 6 }}>Options</div>
        {options.map((opt, idx) => (
          <div key={opt.id} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            <input
              placeholder={`Option ${idx + 1}`}
              value={opt.text}
              onChange={e => updateOptionText(opt.id, e.target.value)}
              style={{ flex: 1, padding: 8 }}
            />
            <button
              type="button"
              onClick={() => removeOption(opt.id)}
              disabled={options.length <= 2}
              title="Remove option"
            >
              −
            </button>
          </div>
        ))}
        <button type="button" onClick={addOption} style={{ marginTop: 6 }}>
          + Add option
        </button>
      </div>

      {error && <div role="alert" style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      {success && <div role="status" style={{ color: 'green', marginTop: 10 }}>{success}</div>}

      <div style={{ marginTop: 12 }}>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating…' : 'Create poll'}
        </button>
      </div>
    </form>
  );
}

