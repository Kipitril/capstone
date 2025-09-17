🗳️ Voting System – Capstone Project
🔖 Project Title & Description

Voting System Web App

This project is a lightweight online voting system designed to allow users to securely cast and view votes in real-time. It will provide:

User authentication (to ensure one vote per person).

A simple dashboard to create and manage polls.

Real-time vote tallying and results visualization.

Audience:

Students and clubs running quick elections.

Small organizations or teams that need an easy polling platform.

Why It Matters:
Voting is a cornerstone of decision-making. By creating an accessible and transparent voting tool, this project demonstrates how digital systems can simplify group choices while reinforcing fairness and trust.

🛠️ Tech Stack

Languages & Frameworks

Frontend: React + TailwindCSS (for a clean and responsive UI)

Backend: Node.js with Express (for routing and APIs)

Database: PostgreSQL (for structured poll and user data)

Authentication: JWT-based authentication

Tools & Libraries

Prisma ORM (schema management for PostgreSQL)

Chart.js or Recharts (for visualizing voting results)

Docker (optional, for containerized deployment)

🧠 AI Integration Strategy
🔧 Code Generation

Use AI (e.g., Cursor IDE, Copilot, or CLI agents) to scaffold core features:

Express routes for poll creation, voting, and results retrieval.

React components for poll form, vote submission, and results charts.

Prisma models for users, polls, and votes.

Prompts like:

“Generate an Express route for submitting a vote to a poll by ID with validation against double-voting.”

“Create a React component that renders a bar chart from a votes dataset using Recharts.”

🧪 Testing

AI-assisted test generation:

Unit tests for poll creation and voting logic.

Integration tests to ensure end-to-end flow (e.g., login → create poll → vote → view results).

Example prompt:

“Generate Jest tests for the vote submission endpoint, including edge cases (duplicate vote, invalid poll ID).”

📚 Documentation

AI-generated docstrings and inline comments for clarity.

README content and usage examples will be co-authored with AI to ensure consistency.

AI will also generate API documentation from the Express routes.

📡 Context-Aware Techniques

Provide AI with:

Database schema (Prisma schema.prisma) → to auto-generate DB queries.

OpenAPI spec (generated from Express routes) → to scaffold API client functions.

/usr/bin/bash: line 1: wq: command not found
