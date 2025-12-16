# Project Overview

`agdb` is a React application bootstrapped with Vite and TypeScript. It leverages TailwindCSS for styling and `axios` for API interactions (though currently commented out, there's a clear intention to fetch data from the TMDB API). The project appears to be a foundation for a movie database application.

**Key Technologies:**

*   **Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** TailwindCSS
*   **HTTP Client:** Axios (planned/partially implemented)
*   **Linting:** ESLint
*   **Fast Refresh:** SWC

# Building and Running

## Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run:

*   **`npm run dev`**
    Starts the development server. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

*   **`npm run build`**
    Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

*   **`npm run lint`**
    Runs ESLint to check for code quality and style issues.

*   **`npm run preview`**
    Serves the `dist` folder locally for a production preview.

# Development Conventions

*   **Language:** All application logic and components are written in TypeScript (`.ts` and `.tsx` files) for type safety.
*   **Component Structure:** React components are defined in `.tsx` files.
*   **Styling:** TailwindCSS is used for utility-first styling.
*   **Linting:** ESLint is configured to enforce code quality and consistency, including type-aware rules for TypeScript.
*   **Fast Refresh:** The development server utilizes SWC for fast refresh during development, as configured in `vite.config.ts`.
*   **Environment Variables:** The commented-out code in `App.tsx` indicates the use of `import.meta.env.VITE_TMDB_API_KEY`, suggesting that environment variables are managed through Vite's `import.meta.env` for API keys and other configurations.