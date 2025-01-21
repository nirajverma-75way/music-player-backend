
# Social Media API

This is a Social Media API backend project, built with Node.js, Express, and MongoDB. It provides endpoints for managing users, posts, likes, comments, notifications, and more. The API also supports user authentication via JWT (JSON Web Tokens).

## Features

- User Authentication: Login and registration functionality using JWT tokens.
- CRUD Operations for Users, Posts, Likes, Comments, Notifications, Replies.
- Email Notifications: Send email notifications to users for different actions.
- Secure Endpoints: Only authorized users can modify or delete their data.
- Media Uploads: Support for media files (images, videos) uploaded via the API.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Endpoints](#api-endpoints)
4. [Authentication](#authentication)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To get started with the project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/social-media-api.git
cd social-media-api
```

### 2. Install dependencies

Make sure you have Node.js and npm installed on your system. Then, install the required dependencies:

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/social-media-db
MAIL_EMAIL=your-email@gmail.com
MAIL_PASSWORD=your-email-password
JWT_SECRET=your-jwt-secret
```

### 4. Run the application

Start the application with the following command:

```bash
npm start
```

The server will run on `http://localhost:5000`.

## Usage

Once the application is running, you can interact with the API endpoints using tools like [Postman](https://www.postman.com/) or through your frontend application.

### Authentication

To authenticate, you will need to use the following endpoints:

- **Login**: `POST /api/users/login`
- **Register**: `POST /api/users`

You will receive a JWT token upon successful login or registration, which should be included in the `Authorization` header for protected routes.

## API Endpoints

### User Endpoints

- `POST /api/users`: Create a new user.
- `GET /api/users`: Get all users.
- `GET /api/ref-token`: Get Refresh token of user.
- `GET /api/users/:id`: Get a user by ID.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

### Post Endpoints

- `POST /api/posts`: Create a new post.
- `GET /api/posts`: Get all posts.
- `GET /api/posts/:id`: Get a post by ID.
- `PUT /api/posts/:id`: Update a post by ID.
- `DELETE /api/posts/:id`: Delete a post by ID.

### Comment Endpoints

- `POST /api/comments`: Create a new comment on a post.
- `GET /api/comments`: Get all comments.
- `GET /api/comments/:id`: Get a comment by ID.
- `PUT /api/comments/:id`: Update a comment by ID.
- `DELETE /api/comments/:id`: Delete a comment by ID.

### Like Endpoints

- `POST /api/likes`: Like a post.
- `GET /api/likes`: Get all likes.
- `DELETE /api/likes/:id`: Remove a like from a post.

### Notification Endpoints

- `POST /api/notifications`: Create a new notification.
- `GET /api/notifications`: Get all notifications.
- `GET /api/notifications/:id`: Get a notification by ID.
- `PUT /api/notifications/:id`: Update a notification by ID.
- `DELETE /api/notifications/:id`: Delete a notification by ID.

### Replie Endpoints

- `POST /api/replies`: Create a new reply to a comment or post.
- `GET /api/replies`: Get all replies.
- `GET /api/replies/:id`: Get a reply by ID.
- `PUT /api/replies/:id`: Update a reply by ID.
- `DELETE /api/replies/:id`: Delete a reply by ID.

## Authentication

For most routes, you need to include the JWT token in the request header for authentication.

### Login

To log in, send a `POST` request to the `/api/auth/login` endpoint with the following payload:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

The server will return a JSON object with `accessToken` and `refreshToken`.

### Using the Token

Include the `accessToken` in the `Authorization` header for all protected routes.

Example:

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Contributing

We welcome contributions! If you'd like to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.


## Data Flow Diagram

![dfd](https://github.com/user-attachments/assets/99e746d6-c167-428e-8b3f-c9c291a5056f)

