# Setting Up a Monorepo with React (Vite) and Express (Node.js)

## Project Structure

The project structure will be as follows:

monorepo/
├── client/
├── server/
│ ├── node_modules/
│ ├── .env
│ ├── .gitignore
│ ├── package.json
│ └── server.js
├── .gitignore
└── package.json


## Steps

### 1. Initialize the Monorepo

1. Create the root directory for your monorepo:
    ```bash
    mkdir monorepo
    cd monorepo
    ```

2. Initialize a new npm project:
    ```bash
    npm init -y
    ```

3. Create the `client` and `server` directories:
    ```bash
    mkdir client server
    ```

### 2. Setup the Client (React with Vite)

1. Navigate to the `client` directory:
    ```bash
    cd client
    ```

2. Initialize a Vite project:
    ```bash
    npm create vite@latest
    ```

3. Follow the prompts to set up a new Vite project with React. React/Javascript

4. Install dependencies:
    ```bash
    npm install
    ```

5. Navigate back to the root directory:
    ```bash
    cd ..
    ```

### 3. Setup the Server (Express)

1. Navigate to the `server` directory:
    ```bash
    cd server
    ```

2. Initialize a new npm project:
    ```bash
    npm init -y
    ```

3. Install required dependencies:
    ```bash
    npm install express cors dotenv pg
    ```

4. Create a `.gitignore` file and `.env`
    ```bash
    touch .gitignore .env
    ```

5. cd back up to the root of the mono-repo
    ```bash
    cd ..
    ```
6. OPen it up in vscode:

    ```bash
    code .
    ```
6.5. Add connection strings to your .env file

```bash
DATABASE_URL='foobar'
```

6.5.2. Add node_modules and .env to your gitignore so they're not pushed to github.

```bash
// .gitignore
node_modules
.env
```

6. Create a `server.js` file and set up the basic Express server:
    ```js
    // server.js
    import express from 'express';
    import cors from 'cors';
    import dotenv from 'dotenv';
    import pg from 'pg';

    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    const db = new pg.Pool({
        connectionString: process.env.DATABASE_URL
    });

    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Hello, world!');
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    ```

### 5. Final Steps

1. To run the client:
    ```bash
    cd client
    npm run dev
    ```

2. To run the server:
    ```bash
    cd server
    node server.js
    ```

