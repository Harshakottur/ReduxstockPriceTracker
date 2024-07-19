# Redux Stock Price Tracker

## Description

This project is a frontend application that fetches the most recent 20 real-time data entries from a MongoDB database for a particular stock or cryptocurrency and displays it in a dynamic table. The table updates in real-time according to new data. It also includes a modal/popup that allows users to change the stock or crypto being displayed.

## Technologies Used

- **Next.js** and **Express(backend)**
- **TypeScript**
- **Redux**

## Features

- Fetch and display real-time data entries in a dynamic table.
- Real-time updates of table values.
- Modal/popup for changing the stock or cryptocurrency.
- Redux for state management, with state stored in localStorage.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harshakottur/ReduxstockPriceTracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ReduxStockPriceTracker
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:3001` to see the application in action.

## Project Structure

- `.env.local`: Environment variables add PORT=3001.
- `.gitignore`: Git ignore file.
- `debug.log`: Log file for debugging.
- `LICENSE`: License information.
- `next-env.d.ts`: TypeScript environment declaration.
- `package-lock.json` and `package.json`: Dependency management files.
- `tsconfig.json`: TypeScript configuration file.
- `src/`: Source directory containing:
  - `components/`: React components.
  - `pages/`: Next.js pages.
  - `store/`: Redux store configuration.
  - `styles/`: CSS styles.
  - `utils/`: Utility functions.
