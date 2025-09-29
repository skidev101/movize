# Movize: Cinematic Explorer 🎬

## Overview
Movize is a dynamic and responsive web application designed for discovering and exploring movies. It features a robust Node.js and Express.js backend that serves movie data from external APIs, coupled with a modern React.js frontend built with Vite for a fast and engaging user experience. This project demonstrates full-stack development expertise, API integration, and efficient state management.

## Features
*   🍿 **Browse Popular & Trending Movies**: Easily discover what's currently popular and highly anticipated.
*   🔍 **Advanced Movie Search**: Search for any movie by title with pagination for extensive results.
*   📄 **Detailed Movie Information**: Access comprehensive details including overview, release date, ratings, genres, and production companies.
*   ⚡ **Optimized Performance**: Built with React + Vite for a blazing-fast development and production experience.
*   📱 **Fully Responsive Design**: Enjoy a seamless experience across all devices, from mobile to desktop.
*   🔐 **Secure API Integration**: Handles API keys and access tokens securely on the backend.

## Technologies Used

| Category   | Technology                                                                                                                                                                                                                               | Description                                                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| **Frontend** | [React.js](https://react.dev/)                                                                                                                                                                                                           | JavaScript library for building dynamic user interfaces.                                                |
|            | [Vite](https://vitejs.dev/)                                                                                                                                                                                                              | Next-generation frontend tooling for a fast development experience.                                     |
|            | [React Router DOM](https://reactrouter.com/en/main)                                                                                                                                                                                      | Declarative routing for React applications.                                                             |
|            | [ESLint](https://eslint.org/)                                                                                                                                                                                                            | Pluggable JavaScript linter for identifying and reporting on patterns found in ECMAScript/JavaScript code. |
| **Backend**  | [Node.js](https://nodejs.org/en)                                                                                                                                                                                                         | JavaScript runtime for server-side logic.                                                               |
|            | [Express.js](https://expressjs.com/)                                                                                                                                                                                                     | Fast, unopinionated, minimalist web framework for Node.js.                                              |
|            | [CORS](https://github.com/expressjs/cors)                                                                                                                                                                                                | Node.js middleware for enabling Cross-Origin Resource Sharing.                                          |
|            | [Dotenv](https://www.npmjs.com/package/dotenv)                                                                                                                                                                                           | Loads environment variables from a `.env` file.                                                         |
|            | [Nodemon](https://nodemon.io/)                                                                                                                                                                                                           | Utility that monitors for changes in your Node.js application and automatically restarts the server.    |
| **APIs**     | [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)                                                                                                                                                          | Comprehensive movie, TV show, and actor information.                                                    |
|            | [OpenSubtitles API](https://www.opensubtitles.org/addons/api)                                                                                                                                                                            | (Implemented in backend, but not currently routed) For searching movie subtitles.                         |
| **Deployment** | [Vercel](https://vercel.com/)                                                                                                                                                                                                            | Platform for frontend frameworks and static sites, providing global CDN, serverless functions, and CI/CD. |

## Live Demo
Experience Movize live: [Visit the app here](https://movize.vercel.app/)

## Getting Started

Follow these steps to set up the Movize project locally.

### Prerequisites
Before you begin, ensure you have the following installed:
*   ✅ Node.js (v18.x or later)
*   ✅ npm (v8.x or later) or Yarn

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/skidev101/movize.git
    cd movize
    ```

2.  **Backend Setup**:
    Navigate to the `backend` directory, install dependencies, and start the development server.
    ```bash
    cd backend
    npm install
    npm run dev
    ```

3.  **Frontend Setup**:
    In a new terminal, navigate to the `frontend` directory, install dependencies, and start the development server.
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

The frontend application will typically be accessible at `http://localhost:5173`. The backend API will be running on `http://localhost:3000`.

### Environment Variables
Both the frontend and backend require environment variables for configuration and API access. Create a `.env` file in the `backend` directory and populate it with the following:

```ini
PORT=3000
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_ACCESS_TOKEN=your_tmdb_access_token_here
OPEN_SUB_API_KEY=your_opensubtitles_api_key_here
```
**Examples:**
*   `TMDB_API_KEY`: `e1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6` (obtained from TMDb API dashboard)
*   `TMDB_ACCESS_TOKEN`: `eyJhbGciOiJIUzI1NiJ9.some_jwt_token_here.some_signature` (obtained from TMDb API dashboard)
*   `OPEN_SUB_API_KEY`: `your_unique_api_key` (obtained from OpenSubtitles API dashboard)

## API Documentation

### Overview
The Movize Backend API is built with Node.js and Express.js, designed to proxy requests to the TMDb API for movie-related data. It provides structured endpoints for fetching popular, now playing, and upcoming movies, as well as searching for movies and retrieving detailed movie information. An additional controller for OpenSubtitles API integration is present but not actively routed.

### Features
-   Secure handling of external API keys.
-   Proxying requests to TMDb for various movie data.
-   Controlled access with CORS configuration.
-   Modular route and controller structure for maintainability.

### Base URL
The deployed API base URL is `https://movize-backend2.vercel.app`.
For local development, the base URL is `http://localhost:3000`.

### Endpoints

#### GET /popular
Retrieves a list of popular movies from TMDb.

**Request**:
No request body required.

**Response**:
```json
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/path/to/backdrop.jpg",
      "genre_ids": [28, 12],
      "id": 573437,
      "original_language": "en",
      "original_title": "Movie Title",
      "overview": "A brief overview of the popular movie.",
      "popularity": 123.456,
      "poster_path": "/path/to/poster.jpg",
      "release_date": "2023-10-26",
      "title": "Movie Title",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 1234
    }
  ],
  "total_pages": 500,
  "total_results": 10000
}
```

**Errors**:
-   `500 Internal Server Error`: An unexpected error occurred on the server or issues with external API.

#### GET /nowPlaying
Retrieves a list of movies currently playing in theaters from TMDb.

**Request**:
No request body required.

**Response**:
```json
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/path/to/backdrop.jpg",
      "genre_ids": [28, 12],
      "id": 693134,
      "original_language": "en",
      "original_title": "Now Playing Movie",
      "overview": "A brief overview of the movie currently in theaters.",
      "popularity": 200.123,
      "poster_path": "/path/to/poster.jpg",
      "release_date": "2023-11-01",
      "title": "Now Playing Movie",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 800
    }
  ],
  "total_pages": 100,
  "total_results": 2000
}
```

**Errors**:
-   `500 Internal Server Error`: An unexpected error occurred on the server or issues with external API.

#### GET /upcoming
Retrieves a list of upcoming movies from TMDb.

**Request**:
No request body required.

**Response**:
```json
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/path/to/backdrop.jpg",
      "genre_ids": [14, 28],
      "id": 987654,
      "original_language": "en",
      "original_title": "Upcoming Movie",
      "overview": "A brief overview of an anticipated movie.",
      "popularity": 150.00,
      "poster_path": "/path/to/poster.jpg",
      "release_date": "2024-03-15",
      "title": "Upcoming Movie",
      "video": false,
      "vote_average": 8.0,
      "vote_count": 500
    }
  ],
  "total_pages": 70,
  "total_results": 1500
}
```

**Errors**:
-   `500 Internal Server Error`: An unexpected error occurred on the server or issues with external API.

#### POST /search
Searches for movies based on a query string.

**Request**:
```json
{
  "searchQuery": "Batman",
  "page": 1
}
```
**Payload structure with required fields**:
-   `searchQuery` (string, required): The movie title to search for.
-   `page` (number, optional): The page number of results to retrieve (defaults to 1).

**Response**:
```json
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/path/to/backdrop.jpg",
      "genre_ids": [28, 80],
      "id": 12345,
      "original_language": "en",
      "original_title": "The Dark Knight",
      "overview": "When the menace known as the Joker wreaks havoc...",
      "popularity": 300.789,
      "poster_path": "/path/to/poster.jpg",
      "release_date": "2008-07-16",
      "title": "The Dark Knight",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 25000
    }
  ],
  "total_pages": 20,
  "total_results": 400
}
```

**Errors**:
-   `400 Bad Request`: `{"message": "Empty body"}` if `searchQuery` is missing.
-   `500 Internal Server Error`: An unexpected error occurred on the server, issues with external API, or no internet connection.

#### POST /movie
Retrieves detailed information for a specific movie by its ID.

**Request**:
```json
{
  "movieId": 12345
}
```
**Payload structure with required fields**:
-   `movieId` (number, required): The unique identifier of the movie.

**Response**:
```json
{
  "adult": false,
  "backdrop_path": "/path/to/backdrop.jpg",
  "belongs_to_collection": null,
  "budget": 185000000,
  "genres": [
    { "id": 28, "name": "Action" },
    { "id": 80, "name": "Crime" }
  ],
  "homepage": "http://www.thedarkknight.com",
  "id": 12345,
  "imdb_id": "tt0468569",
  "original_language": "en",
  "original_title": "The Dark Knight",
  "overview": "When the menace known as the Joker wreaks havoc...",
  "popularity": 300.789,
  "poster_path": "/path/to/poster.jpg",
  "production_companies": [
    {
      "id": 923,
      "logo_path": "/path/to/logo.png",
      "name": "Legendary Pictures",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    { "iso_3166_1": "GB", "name": "United Kingdom" },
    { "iso_3166_1": "US", "name": "United States of America" }
  ],
  "release_date": "2008-07-16",
  "revenue": 1004558444,
  "runtime": 152,
  "spoken_languages": [
    { "english_name": "English", "iso_639_1": "en", "name": "English" }
  ],
  "status": "Released",
  "tagline": "Why so serious?",
  "title": "The Dark Knight",
  "video": false,
  "vote_average": 8.5,
  "vote_count": 25000
}
```

**Errors**:
-   `400 Bad Request`: `{"message": "Movie ID is required"}` if `movieId` is missing.
-   `500 Internal Server Error`: An unexpected error occurred on the server.

#### POST /subtitleSearch (Not currently routed)
*Note: This endpoint is implemented in the `subtitleSearchController.js` but is not exposed through any route in `server.js` or `routes/movie.js`. It demonstrates capability for OpenSubtitles API integration.*

Searches for subtitles using an IMDb ID.

**Request**:
```json
{
  "imdbId": "tt0468569"
}
```
**Payload structure with required fields**:
-   `imdbId` (string, required): The IMDb ID of the movie (e.g., "tt0468569").

**Response**:
```json
{
  "data": [
    {
      "attributes": {
        "files": [
          { "file_id": 12345, "cd_number": 1, "file_name": "subtitle.srt" }
        ],
        "language": "en",
        "movie_name": "The Dark Knight",
        "release": "The Dark Knight (2008) 1080p BluRay x264-WiKi",
        "url": "https://www.opensubtitles.org/download/..."
      },
      "id": "abc-123",
      "type": "subtitle"
    }
  ],
  "total_pages": 1,
  "total_count": 1
}
```

**Errors**:
-   `400 Bad Request`: `Empty body` if `imdbId` is missing.
-   `500 Internal Server Error`: An unexpected error occurred on the server or no internet connection.

## Usage
Once the backend and frontend servers are running:
*   Open your browser and navigate to `http://localhost:5173`.
*   The homepage displays popular, now playing, and upcoming movies.
*   Use the search bar on the homepage or navigate to `/search` to find movies by title.
*   Click on any movie card to view its detailed information.
*   The search page includes pagination to browse through extensive results.

## Contributing
We welcome contributions to Movize! To contribute, please follow these steps:

1.  🍴 **Fork the Repository**: Start by forking this project to your GitHub account.
2.  🌿 **Create a New Branch**: Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3.  ✨ **Implement Your Changes**: Write clean, maintainable code following the existing style.
4.  🧪 **Test Your Changes**: Ensure your contributions are thoroughly tested and do not introduce regressions.
5.  ⬆️ **Commit and Push**: Commit your changes with a clear message and push to your forked repository.
    ```bash
    git commit -m "feat: Add new awesome feature"
    git push origin feature/your-feature-name
    ```
6.  ➡️ **Open a Pull Request**: Submit a pull request to the `main` branch of this repository, describing your changes in detail.

## License
This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

## Author Info
Developed with passion by:

*   **Ethan**
    *   LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
    *   Portfolio: [yourwebsite.com](https://yourwebsite.com)
    *   Twitter: [@yourhandle](https://twitter.com/yourhandle)

## Badges
[![Vercel Deployment Status](https://vercelbadge.vercel.app/api/skidev101/movize)](https://movize.vercel.app/)
[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)](https://vitejs.dev/)
[![The Movie Database API](https://img.shields.io/badge/API-TMDb-orange?logo=themoviedb)](https://www.themoviedb.org/documentation/api)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)