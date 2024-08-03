

## Description
Twitter Clone is a social media application that replicates the core features of Twitter, allowing users to post tweets, follow other users, and interact with tweets through likes and comments.

## Features
- User authentication and authorization
- Tweet creation, deletion, and display
- Like and comment on tweets
- Follow and unfollow users
- Real-time updates

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (version 18.x.x or later)
- MongoDB (version 5.x.x or later)

## Installation

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/twitter-clone.git
    cd twitter-clone/backend
    ```
2. Install backend dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the backend directory and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```
4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```
2. Install frontend dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the frontend directory and add your environment variables:
    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```
4. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage
1. Open your browser and navigate to http://localhost:3000.
2. Register a new account or log in with an existing account.
3. Start posting tweets and interacting with other users.

## API Endpoints

### Auth
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user

### Tweets
- `GET /api/tweets`: Get all tweets
- `POST /api/tweets`: Create a new tweet
- `DELETE /api/tweets/:id`: Delete a tweet

### Users
- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get a specific user
- `POST /api/users/follow/:id`: Follow a user
- `POST /api/users/unfollow/:id`: Unfollow a user

## Technologies Used
- **Frontend**: React, React Router, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, bcrypt, JWT, Nodemon
- **Security**: Helmet, CORS
- **Logging**: Morgan
- **File Upload**: Multer

## Contributing
Contributions are always welcome! Please follow these steps:
1. Fork the project repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
This project is licensed under the ISC License.

## Contact
Author: Aakash

Email: your-email@example.com
