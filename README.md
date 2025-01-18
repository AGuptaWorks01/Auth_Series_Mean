# Auth Series with Angular and Node.js, MongoDB

This project implements a user authentication system using Angular on the frontend and Node.js (Express) on the backend. It includes features like user registration, login, password reset, and email verification.

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [How to Run the Project](#how-to-run-the-project)
- [Features](#features)
- [Important Notes](#important-notes)

---

<details>
  <summary><strong>Overview</strong></summary>
  This project is an authentication system built with Node.js and Angular, featuring login, registration, password reset, and email verification.
</details>

<details>
  <summary><strong>Tech Stack</strong></summary>
  - **Backend**: Node.js, Express, MongoDB  
  - **Frontend**: Angular, HTML, CSS  
  - **Authentication**: JWT (JSON Web Token)
</details>

<details>
  <summary><strong>Backend Setup</strong></summary>
  1. Clone the repository: `git clone <repo_url>`
  2. Navigate to the backend folder: `cd backend`
  3. Install dependencies: `npm install`
  4. Set up environment variables as mentioned in the "Environment Variables" section.
</details>

<details>
  <summary><strong>Frontend Setup</strong></summary>
  1. Navigate to the frontend folder: `cd frontend`
  2. Install dependencies: `npm install`
  3. Serve the application: `ng serve`
</details>

<details>
  <summary><strong>Environment Variables</strong></summary>
  - `JWT_SECRETKEY` - Secret key for JWT authentication
  - `DB_URI` - MongoDB connection string
  - `EMAIL_USER` - Email address used for sending emails
  - `EMAIL_PASS` - Email password for the above account
</details>

<details>
  <summary><strong>How to Run the Project</strong></summary>
  1. Ensure that MongoDB is running and your environment variables are configured.
  2. Start the backend server: `npm start` or `nodemon server.js`
  3. In a separate terminal, navigate to the frontend and run `ng serve`
</details>

<details>
  <summary><strong>Features</strong></summary>
  - User Registration & Login
  - Password Reset via email
  - Email Verification and Security
</details>

<details>
  <summary><strong>Important Notes</strong></summary>
  - The JWT token is stored in a cookie for authentication purposes.
  - Make sure to configure the correct environment variables before running the project.
</details>

---

### Backend Setup

1. **Install Dependencies**  
   Make sure you have Node.js installed. Then, navigate to the backend directory and install the required dependencies:
   ```bash
   npm install
Environment Variables
Create a .env file in the root of your backend project and configure the following environment variables:

bash
Copy
MONGODB_URI=mongodb+srv://<your_mongo_connection_string>
JWT_SECRETKEY=your_secret_key_for_jwt
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
LIVE_URL=http://your_application_url (for generating reset password links)
Starting the Backend Server
After installing the dependencies and setting up the environment variables, run the backend server:

bash
Copy
npm run dev
This will start the server using nodemon, which will automatically restart when there are code changes.

API Endpoints

POST /register: Registers a new user.
POST /login: Logs in the user (returns a JWT token and sets it in the cookie).
POST /send-email: Sends a reset password link to the user's email.
POST /reset-password: Resets the password using the provided token.
GET /home: Protected route to access the home page (requires JWT authentication).
Frontend Setup
Install Dependencies
Navigate to the frontend directory and install the required dependencies:

bash
Copy
npm install
Configuration
Ensure you have the Angular environment set up for the application. Update the API URLs in your api.urls.ts file for making HTTP requests.

Running the Frontend
After installing the dependencies, you can run the frontend using the Angular CLI:

bash
Copy
ng serve
This will start the Angular development server on http://localhost:4200.

Angular Routes

/login: Login page.
/register: Registration page.
/forget-password: Page to request a password reset link.
/reset/:token: Page to reset the password using the provided token.
/home: Protected home page (can only be accessed after logging in).
Auth Guard

The Auth Guard is used to protect routes like /home, ensuring that users who are not logged in cannot access it.
How to Run the Project
Run the Backend Server: Follow the steps in the Backend Setup section.
Run the Frontend Application: Follow the steps in the Frontend Setup section.
Once both servers are running, you can open the frontend application in your browser at http://localhost:4200.
Tech Stack
Backend
Node.js and Express.js for server-side development.
MongoDB with Mongoose for database management (used for storing user data and roles).
JWT (JSON Web Token) for authentication.
bcryptjs for password hashing.
cookie-parser for parsing cookies.
nodemailer for sending email (used for password reset functionality).
dotenv for environment variable management.
CORS for enabling cross-origin resource sharing.
Morgan for HTTP request logging.
Frontend
Angular for building the front-end of the application.
Reactive Forms for handling login and registration forms.
Angular Router for navigating between pages.
Angular Auth Guard for protecting routes that require authentication.
