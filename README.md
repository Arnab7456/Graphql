# GraphQL 

This project demonstrates how to use GraphQL to fetch data from two different REST APIs, merge the results, and expose a unified API for frontend consumption.

## Features
- Fetches data from two separate APIs.
- Merges the responses into a single structured output.
- Exposes a GraphQL endpoint for frontend requests.

## Tech Stack
- Node.js
- Express.js
- Apollo Server (GraphQL)
- Axios (for fetching external APIs)

## Installation
1. Clone the repository:
```sh
  https://github.com/Arnab7456/Graphql.git
   cd Graphql
   ```

2. Install dependencies:
   ```sh
   yarn
   ```

3. Start the server:
   ```sh
   yarn index.js
   ```

4. Access GraphQL Playground at:
   ```
   http://localhost:3000/graphql
   ```

## Example Query
```graphql
query GetAllTodos{
  getTodo {
    title
    completed
    user {
      name
      email
      phone
    }
  }
}
```


## API Sources
- `https://jsonplaceholder.typicode.com/todos/`
- `https://jsonplaceholder.typicode.com/users`

## License
MIT

