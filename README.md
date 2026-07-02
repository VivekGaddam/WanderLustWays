# WanderLustWays

A travel booking website UI — hotel bookings, tour packages, tourist destination search, and a chat assistant — built as a React front-end prototype, with an early-stage Express/PostgreSQL backend and dataset scaffolded in for future integration.

**Live:** deployed via Firebase Hosting (`wanderlust-ways` project)

## Current state

This is a **frontend-first prototype**: the UI, routing, and forms are built out, but they aren't yet wired to a real backend. Worth knowing going in:
- The hotel booking form, login/signup forms, and destination search all handle their own state and log to the console on submit — none currently call an API.
- The chatbot page simulates a canned bot reply on a timer rather than calling a real chat service.
- The tourist-package search returns hardcoded results for two sample destinations (Paris, Tokyo).
- `backend/main.js` currently only imports Express and `pg` — the API server itself hasn't been implemented yet.
- A dataset (`Top Indian Places to Visit.csv`, zone/state/city/rating/entrance fee data for major Indian attractions) is bundled in the frontend assets but isn't loaded or used anywhere yet — likely intended to back the destinations/search feature.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home / hero landing page |
| `/hotels` | Hotel booking form (check-in/out, guests, room type) |
| `/travels` | Travel package browsing |
| `/touristdestinations` | Search tourist packages by destination |
| `/login` / `/signup` | Auth pages (phone number + OTP style login) |
| `/chatbot` | Travel assistant chat UI |

## Tech stack

**Frontend**
- React 18 + Vite
- React Router v6
- `react-chatbot-kit` (chatbot UI, not yet wired to a backend/LLM)
- Plain CSS per-page

**Backend (in progress)**
- Node.js + Express
- PostgreSQL (`pg`)

**Hosting**
- Firebase Hosting, with GitHub Actions workflows for merge and PR preview deploys (`.github/workflows/`)

## Project structure

```
WanderLustWays/
├── backend/
│   ├── main.js              # Express + pg imports (server not yet implemented)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/            # Home, Hotels, Travels, Tourist, Login, Signup, Chatbot
│   │   ├── components/       # Navbar
│   │   └── assets/            # images + Top Indian Places to Visit.csv (unused so far)
│   └── package.json
├── firebase.json / .firebaserc
└── .github/workflows/         # Firebase Hosting deploy workflows
```

## Getting started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on Vite's default dev server (`http://localhost:5173`).

### Backend

```bash
cd backend
npm install
node main.js
```

> Note: `main.js` doesn't start a server yet — this is a placeholder until the API routes and PostgreSQL connection are built out.

## Roadmap

- [ ] Build out the Express API (auth, hotel/travel bookings, destinations) and connect to PostgreSQL
- [ ] Wire the frontend forms to real API calls instead of `console.log`
- [ ] Load and use the Indian tourist destinations dataset to power search/results
- [ ] Replace the simulated chatbot response with a real backend or LLM integration

## Author

[Vivek Gaddam](https://github.com/VivekGaddam)
