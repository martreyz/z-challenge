# **Mobile Store (z-challenge)**

----------
## Overview

This project is a smartphone store built with **Next.js 15** and **React 19**, following **hexagonal architecture** principles. The goal is to create a modular and scalable application that separates concerns across different layers, making it maintainable and testable as well as keeping good practices and accessibility.

----------
## Tech Stack

- **Frontend Framework:** Next.js 15

- **UI Library:** React 19

- **Backend Server:** Express.js (only for local mock server)

- **Hosting & Deployment:** Vercel

- **State Management:** React Context and Hooks

- **Styling:** CSS

----------

## Project Structure

-----------------

```
.

└── 📁code

├── 📁public/assets # Static assets

├── 📁src

│ ├── 📁app # Next.js routing and API

│ ├── 📁domain # Core business logic and entities

│ ├── 📁infra # API integration and infrastructure

│ ├── 📁styles # CSS Modules and global styles

│ ├── 📁test # Test utilities and constants

│ ├── 📁ui # UI components, contexts, and hooks

├── eslint.config.mjs

├── express.js # Local mock server

├── jest.config.js

├── jest.setup.js

├── jsconfig.json

├── next.config.mjs

├── package.json

└── README.md

```

--------

## Features

- Fetch and display a list of smartphones from an API.

- Modular and layered code following hexagonal principles.

- Optimized for performance using Next.js features like **Server Components**.

- Scalable design with clear separation of concerns.

- Search smartphones by **name** and **brand**.

- View smartphone **details**, select **storage** and **color** options.

- Add and manage items in a **shopping cart**.

--------
## Setup & Installation

### Prerequisites

- **Node.js** (Recommended: LTS 18.x)

- **npm** or **yarn**

### Installation Steps

```

# Clone the repository

git clone git@github.com:.git

cd z-challenge/code

# Install dependencies

npm install # or yarn install

# Start the development server

npm run dev # Runs both Next.js and Express mock server

```

--------
## API Integration

- The product list is fetched from an external API.

- Data fetching is abstracted in the **infra** layer to maintain separation of concerns.

- Express.js is used only as a local mock server for API testing.

--------
## Deployment

- The project is deployed on **Vercel**, taking advantage of its seamless Next.js support.

--------
## Testing

- Unit tests are implemented with **Jest** and **React Testing Library**.

- Integration tests focus on API calls and UI rendering.

- Uses `jest-fetch-mock` for mocking API calls.

--------
## Future Improvements

- Improve and optimize **CSS**.

- Add **SASS** as a preprocessor for better maintainability and modularization.

- Add **Cypress** for end-to-end testing.

