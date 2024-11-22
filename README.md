# MERN Project with AWS Deployment

## Project Overview

This project is a **MERN stack** application designed to provide a user management system. It includes features for creating, updating, deleting, and listing users, with a focus on simplicity and ease of use.

---

## Tech Stack

### Frontend

- **React.js** with **Material-UI** for building a modern user interface.

### Backend

- **Node.js** with **Express.js** for server-side logic and API endpoints.

### Database

- **MongoDB** for storing user data.

### State Management

- React hooks: `useState`, `useEffect`.

### API Client

- **Axios** for making HTTP requests.

### Deployment

- **AWS EC2** for the backend (Node.js).
- **AWS S3/CloudFront** for the frontend (React).

---

## Features

### User Management

- **Add New Users:** Easily create new user records.
- **Update Users:** Modify existing user details.
- **Delete Users:** Remove users from the system.
- **List Users:** View a table of users with management options.

### React Components

- **UserForm:** Handles user input for adding and updating users.
- **UserTable:** Displays the user list with options to edit or delete.

---

## Backend API Endpoints

### `GET /api/users`

- Fetch a list of all users.

### `POST /api/createuser`

- Create a new user.

### `POST /api/updateuser`

- Update details of an existing user.

### `DELETE /api/deleteuser`

- Remove a user from the system.

---

## Deployment Instructions

1. **Backend:**

   - Deploy the Node.js backend on AWS EC2.
   - Ensure the EC2 instance has the necessary configurations (Node.js, MongoDB connection, and security group settings).
   - Run the server with `npm start` or a process manager like PM2.

2. **Frontend:**
   - Build the React application using `npm run build`.
   - Upload the build folder to an AWS S3 bucket configured for static hosting.
   - Use AWS CloudFront for content delivery to ensure fast and secure access.

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
