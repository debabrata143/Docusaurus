---
sidebar_position: 2
---

# API Names

This section lists the available APIs along with their descriptions.

## User Management APIs

- **`GET /api/v1/users`**: Retrieve a list of users.
  
- **`POST /api/v1/users`**: Create a new user.

- **`GET /api/v1/users/:id`**: Retrieve details of a specific user.

- **`PUT /api/v1/users/:id`**: Update a specific user.

- **`DELETE /api/v1/users/:id`**: Delete a specific user.

## Authentication APIs

- **`POST /api/v1/auth/login`**: Authenticate a user and return a token.

- **`POST /api/v1/auth/logout`**: Log out the authenticated user.

- **`POST /api/v1/auth/refresh`**: Refresh the authentication token.

## Product Management APIs

- **`GET /api/v1/products`**: Retrieve a list of products.

- **`POST /api/v1/products`**: Create a new product.

- **`GET /api/v1/products/:id`**: Retrieve details of a specific product.

- **`PUT /api/v1/products/:id`**: Update a specific product.

- **`DELETE /api/v1/products/:id`**: Delete a specific product.

## Order Management APIs

- **`GET /api/v1/orders`**: Retrieve a list of orders for the authenticated user.

- **`POST /api/v1/orders`**: Create a new order.

- **`GET /api/v1/orders/:id`**: Retrieve details of a specific order.

- **`PUT /api/v1/orders/:id`**: Update a specific order.

- **`DELETE /api/v1/orders/:id`**: Cancel a specific order.

---

## Additional Resources

For more details, please refer to the [API Specifications](./api-specifications.md) section.


