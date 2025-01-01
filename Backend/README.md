# Backend API Documentation

## User Routes

### Register User

**Endpoint:** `/user/register`

**Method:** `POST`

**Description:** Registers a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstname": "John"
}
```

**Response:**
- `201 Created` on successful registration with user details and token in cookies.
- `400 Bad Request` if validation fails.
- `500 Internal Server Error` if there is a server error.

### Login User

**Endpoint:** `/user/login`

**Method:** `POST`

**Description:** Logs in an existing user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
- `200 OK` on successful login with a message and token in cookies.
- `400 Bad Request` if email or password is incorrect.
- `500 Internal Server Error` if there is a server error.
