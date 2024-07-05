# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# CRUD Application

This is a simple CRUD application built with React and Axios for the frontend and Node.js for the backend. The application allows users to search, add, edit, and delete records.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- Search records
- Add new records
- Edit existing records
- Delete records

## Technologies Used
### Frontend
- React
- Axios

### Backend
- Node.js
- Express

## Installation

### Prerequisites
- Node.js (v12+)
- npm or yarn

### Steps
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies for both the frontend and backend.
4. Start the backend server.
5. Start the frontend development server.

## Usage
1. Open your browser and navigate to the frontend URL.
2. Use the interface to search, add, edit, and delete records.

## API Endpoints
### GET /records
- Description: Retrieves all records.
- Response: JSON array of records.

### POST /records
- Description: Adds a new record.
- Request: JSON object with record details.
- Response: JSON object of the created record.

### PUT /records/:id
- Description: Updates an existing record.
- Request: JSON object with updated record details.
- Response: JSON object of the updated record.

### DELETE /records/:id
- Description: Deletes a record.
- Response: Status message.

## Contributing
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License.

