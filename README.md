# Book API

## Prerequisites <img src="pictures/requirement.png" style="vertical-align: middle" width=40px>

Before running this project, make sure you have the following installed:

- Node.js (version 20.10.0)
- Express (version 4.18.2)
- MongoDB (version 6.3.0)

## Installation <img src="pictures/installation.png" style="vertical-align: middle" width=40px>

1. Clone the repository:

   ```bash
   git clone https://github.com/rtkktr/book-api.git

2. Install the dependencies:
    ```bash
    cd book-api
    npm install

3. Configure the environment variables:
    + Add the following variables and provide appropriate values:
    ```plaintext
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/bookstore
4. Start the server:
    ```bash
    npm run devStart

## API Endpoints <img src="pictures/api.png" style="vertical-align: middle" width=40px>
The following endpoints are available:

+ GET /api/books: Get all books.
+ GET /api/books/:id: Get a specific book by ID.
+ POST /api/books: Create a new book.
+ PUT /api/books/:id: Update a book by ID.
+ DELETE /api/books/:id: Delete a book by ID.

## Contributing <img src="pictures/contribution.png" style="vertical-align: middle" width=40px>

Contributions are welcome! If you find any issues or want to add new features, please follow these steps:

1. Fork the repository and create a new branch.
2. Make your changes and test them thoroughly.
3. Submit a pull request describing your changes.

Please ensure that your code follows the project's coding conventions and includes appropriate documentation.