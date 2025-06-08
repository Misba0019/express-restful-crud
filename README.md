# express-restful-crud

## Description

A simple Node.js project demonstrating RESTful CRUD operations using Express and EJS. This project manages a list of comments, allowing users to Create, Read, Update, and Delete comments through web forms and HTTP requests. It is designed as a learning resource for understanding RESTful APIs and server-side rendering with Express.

## Features

- RESTful routes for managing comments (Create, Read, Update, Delete)
- Server-side rendering with EJS templates
- Method override to support PUT and DELETE requests from forms
- Example GET and POST request handling with a sample tacos route
- Unique IDs for comments using UUID

## Usage

1. **Clone the repository:**
   ```
   git clone https://github.com/Misba0019/express-restful-crud.git
   cd express-restful-crud
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the server:**
   ```
   node index.js
   ```
   The server will run on [http://localhost:3000](http://localhost:3000).

4. **Access the app:**
   - Visit `/comments` to view and manage comments.
   - Use the included `getpost.html` to test GET and POST requests.

## Required Libraries

- [express](https://www.npmjs.com/package/express) - Web framework for Node.js
- [ejs](https://www.npmjs.com/package/ejs) - Embedded JavaScript templating
- [method-override](https://www.npmjs.com/package/method-override) - Allows use of HTTP verbs like PUT or DELETE in places where the client doesn't support it
- [uuid](https://www.npmjs.com/package/uuid) - For generating unique IDs

## How it Works

- The server uses Express to handle HTTP requests and EJS to render views.
- Comments are stored in an in-memory array, each with a unique ID.
- RESTful routes allow users to:
  - View all comments (`GET /comments`)
  - Add a new comment (`POST /comments`)
  - Edit a comment (`PATCH /comments/:id`)
  - Delete a comment (`DELETE /comments/:id`)
- Method-override enables form submissions to use PUT and DELETE methods.
- The `getpost.html` file demonstrates how GET and POST requests work with form data.

## Credits

- Inspired by Colt Steele's Web Developer Bootcamp - RESTful Routes
- Built with [Express](https://expressjs.com/), [EJS](https://ejs.co/), [method-override](https://www.npmjs.com/package/method-override), and [uuid](https://www.npmjs.com/package/uuid)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.