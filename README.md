## Getting Started

#### Install npm dependencies:

Install dependencies for your [`backend`](./backend). Open a terminal window and install the `backend`'s dependencies

```bash
cd backend
npm install
```

Open a separate terminal window and navigate to your [`frontend`](./frontend) directory and install its dependencies

```bash
cd frontend
npm install
```

### 1. Start the server (backend)

On the same terminal in backend folder, run the following command to start the server:

```bash
npm run start
```

The server is now running at [`http://localhost:4000/`](http://localhost:4000/).

### 2. Start the app (frontend)

On the terminal window used to install frontend npm dependencies, run the following command to start the app:

```bash
npm run start
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

## Using the REST API

You can access the REST API with [`localhost:4000/news`](http://localhost:4000/news).

### `GET`

- `/news`: Fetch all news data
- `/news/:id`: Fetch a single news by its `id`
