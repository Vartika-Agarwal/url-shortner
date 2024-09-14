# URL Shortener

A URL Shortener application built using Node.js, Express, and MongoDB that allows users to shorten long URLs, track click analytics, and redirect shortened URLs to their original destination.

## Features

- **Shorten URLs:** Generate shortened URLs for any given long URL.
- **Analytics Tracking:** View the number of clicks and the visit history for each shortened URL.
- **Redirection:** Redirect users from a shortened URL to the original URL.
- **Persistent Data Storage:** Store URLs and their click history in a MongoDB database.
## Usage

- **Shorten a URL:**  
  Submit a long URL using the input form on the home page (`/`). A shortened URL will be generated and displayed.

- **Redirect using the shortened URL:**  
  Access the shortened URL (e.g., `http://localhost:7001/url/:shortid`) to be redirected to the original URL.

- **View URL Analytics:**  
  Navigate to `/url/analytics/:shortid` to view analytics for a specific shortened URL, including the number of clicks and the visit history.
## File Structure

- **controllers/url.js:** Contains the core functionality for shortening URLs, handling redirections, and managing analytics.
- **models/url.js:** Defines the Mongoose schema for storing URLs and their visit history.
- **routes/**: Manages API routes for URL-related operations.
- **views/**: Holds EJS templates for rendering HTML pages.
- **public/**: Contains static files like images and CSS.

## Technologies Used

- **Node.js** and **Express.js**: Frameworks for building the server-side application.
- **MongoDB**: Database used for storing URLs and tracking analytics.
- **EJS**: Templating engine for generating HTML pages.
- **CSS**: Used for styling the front-end of the application.
## Acknowledgments

- Inspired by various URL shortening services like Bit.ly and TinyURL.


