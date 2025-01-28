
# Music Player App

A music player application built with Node.js, React.js, and MongoDB. The app allows users to play music and like songs. Admin users can upload music, lyrics, and create playlists.

## Features

- **User Authentication**: Users can register, log in, and reset their passwords.
- **Music Playback**: Users can play songs and like songs.
- **Admin Features**: Admins can upload songs, manage playlists, and more.
- **Playlist Management**: Users can create, update, and delete playlists.
- **Song Management**: Users can upload and manage songs.

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, JWT Authentication
- **Frontend**: React.js, Material UI, React Hook Form, Skeleton Loading
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **State Management**: React Context API

## API Endpoints

### API DOCUMENTATION

- `GET /docs`: You can access swagger documentation.

### User Endpoints

- `POST /users/login`: Login a user and receive a JWT token.
- `POST /users/forget-password`: Request a password reset code.
- `POST /users/reset-password`: Reset the user's password using a code.
- `GET /users`: Retrieve all users.
- `POST /users`: Create a new user.
- `GET /users/{id}`: Get a specific user by ID.
- `PUT /users/{id}`: Update a user by ID.
- `PATCH /users/{id}`: Partially update a user by ID.
- `DELETE /users/{id}`: Delete a user by ID.

### Song Endpoints

- `GET /songs`: Retrieve all songs.
- `POST /songs`: Upload a new song.
- `GET /songs/{id}`: Get a specific song by ID.
- `PUT /songs/{id}`: Update a song by ID.
- `PATCH /songs/{id}`: Partially update a song by ID.
- `DELETE /songs/{id}`: Delete a song by ID.

### Playlist Endpoints

- `GET /playlist`: Retrieve all playlists.
- `POST /playlist`: Upload a new playlist.
- `GET /playlist/{id}`: Get a specific playlist by ID.
- `PUT /playlist/{id}`: Update a playlist by ID.
- `PATCH /playlist/{id}`: Partially update a playlist by ID.
- `DELETE /playlist/{id}`: Delete a playlist by ID.

### Playlist-Song Endpoints

- `GET /playlist-song`: Retrieve all playlist-song entries.
- `POST /playlist-song`: Add a new song to a playlist.
- `GET /playlist-song/{id}`: Get a playlist-song entry by ID.
- `PUT /playlist-song/{id}`: Update a playlist-song entry by ID.
- `PATCH /playlist-song/{id}`: Partially update a playlist-song entry by ID.
- `DELETE /playlist-song/{id}`: Delete a playlist-song entry by ID.

### Like-Song Endpoints

- `GET /like-song`: Retrieve all liked songs.
- `POST /like-song`: Like a new song.
- `GET /like-song/{id}`: Get a liked song by ID.
- `PUT /like-song/{id}`: Update a liked song by ID.
- `DELETE /like-song/{id}`: Remove a song from liked list.

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/music-player.git
   cd music-player
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file and add necessary variables (e.g., database URL, JWT secret).

4. Run the server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the React app:
   ```bash
   npm start
   ```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the open-source libraries used in this project.
- Material UI for the UI components.
- React Hook Form for handling forms.
