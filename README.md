# Code Splitting in React with Vite and TypeScript

This project demonstrates how to implement **Code Splitting** in a React application using **Vite** with **TypeScript**. Code splitting is a powerful technique that allows us to split our codebase into smaller chunks, loading only what's needed and optimizing the performance of the application, especially for large-scale apps.

## Features

- **Vite** for fast bundling and hot reloading
- **React** with code splitting to improve app performance
- **TypeScript** for type-safe development
- Lazy loading of components using `React.lazy` and `Suspense`
- Optimized bundling for improved load times

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool optimized for modern web development.
- **TypeScript**: Superset of JavaScript for type-safe development.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/code-splitting-vite-react-ts.git
   cd code-splitting-vite-react-ts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server with Vite, run:

```bash
npm run dev
```

This will open the application on `http://localhost:5173`.


## Project Structure

```plaintext
.
├── public                # Static assets served by Vite
├── src
│   ├── components        # React components
│   │   ├── NavBar.tsx    # Navigation bar component
│   │   ├── NavBar.css    # Navigation bar styles
│   ├── pages             # React pages
│   │   ├── Home.tsx      # Example page
│   │   ├── About.tsx     # Example page loaded lazily
│   │   └── FAQs.tsx      # Example page loaded lazily
│   │   └── Profile.tsx   # Example page loaded lazily
│   │   └── Login.tsx     # Example page
│   ├── App.tsx           # Main app component, implementing Suspense
│   ├── main.tsx          # Entry point with ReactDOM.render
│   └── index.css         # Main CSS file, imported by components as needed
├── .gitignore            # Files and directories to ignore in Git
├── index.html            # The main HTML file served by Vite, linking to the JavaScript bundle.
├── vite.config.js        # Vite configuration for the project
├── package-lock.json     # Lock file for installed dependencies
├── package.json          # Project dependencies and scripts
└── README.md             # Documentation for the project
└── tsconfig.json         # TypeScript configuration
```

## Code Splitting Implementation

This project uses **React.lazy** to load components lazily. Here’s a brief overview of the implementation:

1. **Lazy Loading Components**: In `App.tsx`, components like `About` and `Contact` are imported using `React.lazy`.

    ```typescript
    import React, { Suspense } from 'react';

    const Home = React.lazy(() => import('./components/Home'));
    const About = React.lazy(() => import('./components/About'));
    const Contact = React.lazy(() => import('./components/Contact'));
    ```

2. **Suspense for Fallback**: A fallback component is displayed while the lazy-loaded components are fetched.

    ```typescript
    function App() {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
          <About />
          <Contact />
        </Suspense>
      );
    }
    ```

3. **Dynamic Imports with TypeScript**: Using TypeScript with `React.lazy` allows for typed lazy-loading, which can enhance readability and catch potential issues early.

## Why Code Splitting?

Code splitting is essential for large applications. It enables:

- **Improved Load Time**: Only the necessary parts of the app are loaded initially.
- **On-demand Loading**: Additional parts of the app are loaded as users navigate, reducing the bundle size and improving performance.
- **Enhanced User Experience**: With less initial load time, users can start interacting with the app faster.

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build locally.

## License

This project is licensed under the MIT License.
