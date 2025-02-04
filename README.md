# **Mobile Store (z-challenge)**

----------
## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Setup & Installation](#setup--installation)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
- [API Integration](#api-integration)
- [Deployment](#deployment)
  - [Preview Deployment](#preview-deployment)
  - [Production Deployment](#production-deployment)
- [Testing](#testing)
- [Future Improvements](#future-improvements)

----------
## Overview

This project is a smartphone store built with **Next.js 15** and **React 19**, following **hexagonal architecture** principles. The goal is to create a modular and scalable application that separates concerns across different layers, making it maintainable and testable as well as keeping good practices and accessibility.

----------
## Tech Stack

- **Frontend Framework:** Next.js 15, React 19

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

This project uses **Vercel** for deployment, which integrates with **GitHub** for continuous deployment. There are two types of deployments:

### Preview Deployment
To deploy a preview version of the project:

1. Push your changes to any branch **other than `main`**.
2. Once the push is made, **Vercel** will automatically create a preview deployment for that branch.
3. You can view the deployment results in the **GitHub Actions** section of the corresponding Pull Request.

Preview deployments are useful for testing changes in isolation before merging them into the `main` branch.

### Production Deployment
To deploy the project to **production**:

1. Push your changes to the `main` branch.
2. **Vercel** will automatically trigger a production deployment.
3. You can view the deployment results in the **GitHub Actions** section of the corresponding Pull Request.

Production deployments are the final, stable version of the project, and they will be accessible publicly via the live [URL](https://z-challenge.vercel.app/).

### GitHub Actions for Deployment
Both preview and production deployments are monitored through **GitHub Actions**. After pushing to a branch, you can check the **Actions** tab in the corresponding Pull Request for detailed deployment logs and status.

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

