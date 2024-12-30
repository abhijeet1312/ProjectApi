# **Project Management API**

## **Table of Contents**
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
- [Running the APIs](#running-the-apis)
  - [Available Endpoints](#available-endpoints)
- [Contact](#contact)

---

## **Project Overview**
The Project Management API provides functionalities for user authentication, project management, and a contact form submission system. It is built using a modular and scalable architecture with a focus on security and performance.

---

## **Technologies Used**
- **Backend Framework**: Node.js (Express.js)
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **Template Engine**: EJS
- **Environment Configuration**: dotenv
- **Deployed On**: Vercel
- **Tools**: Postman (for API testing), pgAdmin (for database management)

---

## **Features**
1. **User Authentication**:
   - Signup and login with hashed passwords.
   - Secure authentication using JWT.

2. **Project Management**:
   - Create, read, and delete user-specific projects.

3. **Contact Form**:
   - Submit user inquiries via a contact form.

4. **Scalable and Modular**:
   - MVC (Model-View-Controller) architecture.

---

## **Setup Instructions**

### **Prerequisites**
- Install **Node.js** (version 16 or later).
- Install **PostgreSQL** and ensure it is running.
- Install **pgAdmin** for managing your database (optional).

---

### **Environment Variables**
Create a `.env` file in the project root and configure it as follows:
```env
# Database Configuration
PG_USER="your_db_username"
PG_HOST="your_db_host"
PG_DATABASE="your_db_name"
PG_PASSWORD="your_db_password"
PG_PORT=5432

# App Configuration
PORT=3000
JWT_SECRET="your_jwt_secret"



# Session Secret
SESSION_SECRET="your_session_secret"
