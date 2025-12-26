# API Endpoints

## Base URL: http://localhost:5000/api

Method      Endpoint        Description         Protected
POST        /auth/register  Register new user       No
POST        /auth/login     Login user              No
GET         /auth/meGet     current user            Yes

## Request/Response Examples

### (1) Register User:
json
#### Request
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

#### Success Response (201)
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f5a9b1c2d3e4f5a6b7c8d9",
    "email": "john@example.com",
    "name": "John Doe"
  }
}

#### Error Responses

##### User already exists (400)
{
  "success": false,
  "message": "User already exists with this email"
}

##### Server error (500)
{
  "success": false,
  "message": "Server error"
}

### (2) Login User :
json
####  Request
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}

#### Success Response (200)
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f5a9b1c2d3e4f5a6b7c8d9",
    "email": "john@example.com",
    "name": "John Doe"
  }
}

#### Error Responses

##### Missing fields (400)

{
  "success": false,
  "message": "Please provide email and password"
}


##### Invalid credentials (401)

{
  "success": false,
  "message": "Invalid credentials"
}

### (3) Get Current Logged-in User :

#### Request
POST /api/auth/me

Returns the currently authenticated user's details.
Authentication Required.

Headers : Authorization: Bearer <JWT_TOKEN>

#### Success Response (200)
{
  "success": true,
  "user": {
    "id": "64f1c9b0a2e...",
    "email": "john@example.com",
    "name": "John Doe",
    "createdAt": "2024-01-10T10:15:30.000Z"
  }
}

#### Error Responses

##### No token provided (401)
{
  "success": false,
  "message": "Not authorized, no token provided"
}

##### Invalid or expired token (401)
{
  "success": false,
  "message": "Not authorized, token invalid or expired"
}

##### User not found (404)

{
  "success": false,
  "message": "User not found"
}


### (4) Health Check API :

GET /api/health

Checks if the server is running.

#### Success Response (200)
{
  "success": true,
  "message": "Server is running"
}
