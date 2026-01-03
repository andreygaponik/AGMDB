# Project Overview

This is a movie/streaming hub Single Page Application (SPA) built with React, Redux Toolkit, and Firebase. The project follows the Feature-Sliced Design (FSD) architecture, which organizes code by business-level features rather than technical layers. The application provides user authentication (registration, login, logout) and allows users to browse movies and TV shows.

**Key Technologies:**

*   **Frontend:** React 19, TypeScript, Redux Toolkit, RTK Query, React Router v6, Tailwind CSS
*   **Backend:** Firebase (Authentication)
*   **Build Tool:** Vite

# Building and Running

*   **Install dependencies:**
    ```bash
    npm install
    ```
*   **Run the development server:**
    ```bash
    npm run dev
    ```
*   **Build for production:**
    ```bash
    npm run build
    ```
*   **Lint the code:**
    ```bash
    npm run lint
    ```
*   **Preview the production build:**
    ```bash
    npm run preview
    ```

# Development Conventions

*   **Architecture:** The project strictly follows the Feature-Sliced Design (FSD) methodology. This means that new features should be organized into their own "slices" and that the `components` directory is intentionally absent.
*   **Styling:** UI components are styled using Tailwind CSS.
*   **State Management:** Global application state is managed by Redux Toolkit, and asynchronous operations (API calls) are handled by RTK Query.
*   **Authentication:** The authentication flow is managed through Firebase, with the user's authentication state mirrored in the Redux store.
*   **Routing:** Client-side routing is handled by React Router v6. Navigation logic is primarily located within the `pages` layer of the FSD architecture.
