# Bianca Portfolio

This is a React portfolio project built with Vite and Tailwind CSS.

## Project Setup

### Install dependencies

```bash
npm install
```

### Running the Mock API Server

This project uses `json-server` to serve mock data from `src/data/db.json` at `http://localhost:3000`.

To start the mock API server, run:

```bash
npm run json-server
```

This will start the API server watching `src/data/db.json` on port 3000.

### Running the Frontend Development Server

In another terminal, start the React development server:

```bash
npm run dev
```

This will start the Vite dev server, usually at `http://localhost:5173`.

### Accessing the App

Open your browser and navigate to the address shown by Vite (default `http://localhost:5173`).

The frontend will fetch data from the mock API server at `http://localhost:3000`.

---

## Build for Production

To build the app for production deployment:

```bash
npm run build
```

You can preview the production build locally with:

```bash
npm run preview
```

---

## Notes

- Make sure `json-server` is running before starting the frontend to avoid data fetching errors.
- The mock data is located in `src/data/db.json` and serves as the main data source for the portfolio.
