# HourMaker Frontend

This directory contains the frontend application for HourMaker, built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **State/Data Fetching:** [React Query v5](https://tanstack.com/query/latest)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Backend as a Service:** [Firebase](https://firebase.google.com/)

## 📁 Project Structure

The `src/` directory is organized as follows:

- `assets/` - Static assets like images and global CSS (`index.css`, `App.css`).
- `components/` - Reusable UI components.
  - `ui/` - Base UI elements (buttons, inputs, etc., likely from a library like shadcn/ui).
  - `layout/` - Layout components like Navbar and Footer.
  - `AIChatbot/` & `chatbot/` - Chatbot-related components.
- `config/` - Configuration files (e.g., Firebase config).
- `data/` - Static data files or mock data.
- `hooks/` - Custom React hooks.
- `lib/` - Utility functions and libraries.
- `pages/` - Top-level page components matching the routes (Home, Pricing, Company, Features, etc.).
- `services/` - External service integrations and API calls.
  - `EmailService/` - Service for handling email-related actions.
- `App.jsx` - Main application component where routing and global providers are defined.
- `main.jsx` - Application entry point.
- `sitemap.js` - Dynamic sitemap generator.

## 🚦 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in the development mode using Vite.
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`
Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`
Locally preview the production build.

### `npm run lint`
Runs ESLint to catch syntax and style errors in the codebase.

## 🌐 Routing

The application features the following main routes:
- `/` - Home Page
- `/pricing` - Pricing Page
- `/company` - Company Page
- `/features` & `/features/:slug` - Feature Overview and Details
- `/documentation` - Documentation
- `/resources` - Resources
- `/careers` - Careers
- `/blog/:slug` - Blog Posts
- Legal pages (`/privacy-policy`, `/terms`)
