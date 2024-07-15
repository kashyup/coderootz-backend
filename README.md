# Node.js Backend Service

This is a Node.js backend service project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).
- **npm**: npm is the package manager for Node.js. It should be installed with Node.js.
- **MongoDB**: Make sure you have MongoDB installed and running on your machine. You can download it from [MongoDB](https://www.mongodb.com/).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. **Navigate to the project directory**

    ```sh
    cd your-repo-name
    ```

3. **Install dependencies**

    ```sh
    npm install
    ```

### Setting Up Environment Variables

1. **Create a `.env` file in the root directory of your project**

    ```sh
    touch .env
    ```

2. **Add the following environment variables to the `.env` file**

    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your-jwt-secret
    ```

    Replace `your-database-name` and `your-jwt-secret` with your actual MongoDB database name and a secret key for JWT.


Ensure the MongoDB server is running.

Run the seed.js script:  ```sh
    node seed.js
    ```

### Running the Project

1. **Start the server**

    ```sh
    npm start
    ```

    The server should be up and running at [http://localhost:5000](http://localhost:5000).

### Running in Development Mode

1. **Start the server with nodemon**

    ```sh
    npm run dev
    ```

    This will start the server in development mode and automatically restart it on code changes.



