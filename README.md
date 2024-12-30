# **Project Management API**  
A Node.js application that provides a platform for user authentication, project management, and contact form submissions.

---

## **Table of Contents**  
- [Installation](#installation)  
- [Usage](#usage)  
- [Features](#features)  
- [API Routes](#api-routes)  
- [Database Schema](#database-schema)  
  

---

## **Installation**

1. **Clone the repository:**  

  
   git clone https://github.com/abhijeet1312/projectapi.git  
   cd Assignment-JMD
2. **Install dependencies:**
   ```bash
     npm install

## Usage
 1. To start this project on your local computer run the following command on your terminal after moving to the root directory:
    ```bash
    npm start

3. **Environment Variables**
Before running the application, you need to set up the necessary environment variables for it to function correctly. Below are the following  variable:


- **PG_USER**: PostgreSQL username.
- **PG_HOST**: PostgreSQL host (e.g., localhost or a remote database host).
- **PG_DATABASE**: PostgreSQL database name.
- **PG_PASSWORD**: PostgreSQL user's password.
- **PG_PORT**: The port on which PostgreSQL is running (default: 5432).
- **JWT_SECRET**: The secret key used for JWT authentication.
- **PORT**: The port on which the server will run.

## **Features**
- **User Managemment:** Users can register, log in, and securely access their dashboard.
- **Project Managemment**:Users can create, view, and delete their projects.
- **Contact Form:** Users can submit inquiries via a contact form.
- **Secure Authentication:** JWT authentication for secure access.
- **PostgreSQL:** for robust data management.

## API Routes  

### User Endpoints  
- **POST** `"/signup"`:Route to register a new user.
- **POST** `"/login"`: Route to log in a user and receive a JWT.  

### Project Endpoints  
- **GET** `"/projects"`:Fetch all projects for the logged-in user.
- **POST** `"/add-project"`: Add a new project.
- **GET**" `/projects/:id"`: Get details of a specific project.
- **POST**" `/projects/:id/delete"`: Delete a specific project.

### Project Endpoints  
- **POST**" `contact"`: Submit a contact form inquiry.

## **Database Schema**
   ### Users Schema , Project Schema and Contact Schema are mentioned below
 ```bash
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE
);

CREATE TABLE contact_form (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    message TEXT
);







