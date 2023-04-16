# **Youtube Subscriber Backend Node Application**

This is a backend Node.js application that provides API endpoints to retrieve information about subscribers of a YouTube channel. The API provides three endpoints to get subscriber information based on different criteria.

## API Endpoints

**GET api/subscriber**

Returns an array of objects containing details of all subscribers.

Response:

Status Code: 200 OK

    "status": "success",
    "data": [
        {
            "_id": "642019fab4a6abf22558b2c2",
            "name": "John Doe",
            "subscribedChannel": "PewDiePie",
            "subscribedDate": "2023-03-26T10:10:02.580Z",
            "__v": 0
        },
        {
            "_id": "642019fab4a6abf22558b2q1",
            "name": "Jane Smith",
            "subscribedChannel": "MrBeast",
            "subscribedDate": "2023-03-26T10:10:02.581Z",
            "__v": 0
        },
    ]

**GET api/subscriber/name**

Returns an array of objects containing only the name and subscriberChannel fields of all subscribers.

Response:

Status Code: 200 OK

    "status": "success",
    "data": {
        "_id": "642019fab4a6abf22558b2c2",
        "name": "John Doe",
        "subscribedChannel": "PewDiePie",
        "subscribedDate": "2023-03-26T10:10:02.580Z",
        "__v": 0
    }

**Error Responses:**

If there is an error processing a request, the server will return an appropriate error response with the appropriate status code and error message.

Response:

Status Code: 404 Not Found

    {
    "status": "fail",
    "message": "Subscriber not found"
    }

## Environment Variables

The application accepts the following environment variables:

#### `NODE_ENV`

Specifies the environment in which the application is running. Accepts development or production values.

#### `PORT`

Specifies the port on which the application listens for incoming requests.

#### `DATABASE`

Specifies the MongoDB connection string.

## Error Handling

The application implements global error handling. In development environment, errors are logged to the console with detailed stack traces, while in production environment, errors are logged to a file.

## NPM Scripts

The following NPM scripts are available:

```bash
  npm run test
```

Starts the application in development environment. It loads environment variables from a .env file using the dotenv package.

```bash
  npm run start:prod
```

Starts the application in production environment. It requires environment variables to be set manually or via a .env file in the production.
