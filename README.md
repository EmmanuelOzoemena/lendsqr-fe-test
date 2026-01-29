# Lendsqr Dashboard - User Management Module

A high-fidelity, professional User Management Dashboard built with **React**, **TypeScript**, and **SCSS**. This project was developed as a technical assessment for the Lendsqr front-end engineering position, focusing on clean code, responsiveness, and state management.

## Live Demo

**View Project:** [Lendsqr-FE-Test | Emmanuel Ozoemena](https://emmanuel-ozoemena-lendsqr-fe-test.vercel.app/)

## 🛠 Features

- **User Overview**: Paginated table displaying 500+ users with status indicators.
- **Dynamic Routing**: Individual user detail pages using `react-router-dom` with deep-linking support.
- **Comprehensive Profile View**: Detailed breakdown of user data including Personal Information, Education, and Socials.
- **Mobile-First Responsiveness**:
  - Toggleable sidebar for mobile devices.
  - Horizontally scrollable tab navigation.
  - Adaptive Grid system (5-column to 1-column layout).
- **Advanced Filtering**: Multi-criteria filter modal for searching the dataset.
- **Strict Type Safety**: 100% TypeScript coverage with custom interfaces, ensuring no `any` types in the production build.

## Tech Stack

- **Framework**: [React](https://reactjs.org/) (Vite)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed interfaces)
- **Styling**: [SCSS](https://sass-lang.com/) (BEM Methodology & Sass Modules API)
- **Icons**: Custom SVGs
- **Deployment**: [Vercel](https://vercel.com/)

## Project Structure

src/
├── assets/ # Images, Logos, and Icons
├── components/ # Reusable UI components (Sidebar, Header, InfoGrid)
├── layouts/ # Dashboard layout and navigation structure
├── pages/ # View components (Users, UserDetails)
├── styles/ # Global styles, variables, and component-specific SCSS
├── types/ # Centralized TypeScript type definitions
└── data/ # Mock JSON dataset (500 users)

## Technical Implementation Details

### 1. Data Management & Type Safety

Implemented a robust **User** interface to handle complex user objects. By moving away from `any` types, the application benefits from compile-time validation and improved developer experience through IDE autocompletion.

### 2. Modern Styling Architecture

Switched from legacy `@import` to the modern **Sass Modules (`@use`)** system. This prevents style bleeding and ensures that variables (breakpoints, colors) are explicitly scoped and easily maintainable.

### 3. Responsive Grid System

Used CSS Grid and Flexbox to recreate the Lendsqr UI. Specialized logic was added to handle "the squeeze" on mobile, ensuring long strings (like emails) use `word-break` and navigation tabs remain accessible via horizontal touch scrolling.

### 4. Production Optimization

Configured `vercel.json` with rewrite rules to support Single Page Application (SPA) routing, ensuring that page refreshes on dynamic routes (e.g., `/user-details/1`) do not result in 404 errors.

## Getting Started

1. **Clone the repository**:
   git clone [https://github.com/EmmanuelOzoemena/lendsqr-fe-test](https://github.com/EmmanuelOzoemena/lendsqr-fe-test)

2. **Install dependencies**:
   npm install

3. **Run the development server**:
   npm run dev

4. **Build for production**:
   npm run build

## Author

Ozoemena Emmanuel Chukwuebuka

**LinkedIn:** [LinkedIn](https://www.linkedin.com/in/emmanuelozo/)

Thank you for reviewing my submission!
