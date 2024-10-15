---
sidebar_position: 1
---

# API category

# Introduction to APIs

APIs (Application Programming Interfaces) allow different software applications to communicate with each other. This documentation provides an overview of the APIs available in our platform, including how to authenticate, access endpoints, and use the specifications.

## Why Use Our APIs?

- **Integration**: Seamlessly integrate our services into your applications.
- **Automation**: Automate processes using our APIs to enhance productivity.
- **Customization**: Customize functionalities based on your unique needs.


# Authentication API

The Authentication API allows you to securely authenticate users and manage access tokens.

## Authentication Flow

1. **Login**: Users provide their credentials to log in.
2. **Token Generation**: Upon successful login, an access token is generated.
3. **Access Resource**: Use the access token to authenticate subsequent API requests.

## API Endpoints

### Login

- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
- **Response**:
    ```json
    {
      "access_token": "string",
      "expires_in": 3600
    }
    ```

### Logout

- **Endpoint**: `POST /api/auth/logout`
- **Headers**: `Authorization: Bearer {access_token}`
- **Response**:
    ```json
    {
      "message": "Successfully logged out."
    }
    ```

### Token Refresh

- **Endpoint**: `POST /api/auth/refresh`
- **Request Body**:
    ```json
    {
      "refresh_token": "string"
    }
    ```
- **Response**:
    ```json
    {
      "access_token": "string",
      "expires_in": 3600
    }
    ```

# API Endpoints

This section lists all the available API endpoints.

## User Management

### Get User Details

- **Endpoint**: `GET /api/users/{id}`
- **Description**: Retrieve user details by user ID.
- **Response**:
    ```json
    {
      "id": "string",
      "username": "string",
      "email": "string",
      "created_at": "timestamp"
    }
    ```

### Update User

- **Endpoint**: `PUT /api/users/{id}`
- **Request Body**:
    ```json
    {
      "username": "string",
      "email": "string"
    }
    ```
- **Response**:
    ```json
    {
      "message": "User updated successfully."
    }
    ```

## Product Management

### List Products

- **Endpoint**: `GET /api/products`
- **Response**:
    ```json
    [
      {
        "id": "string",
        "name": "string",
        "price": "number"
      }
    ]
    ```

### Create Product

- **Endpoint**: `POST /api/products`
- **Request Body**:
    ```json
    {
      "name": "string",
      "price": "number"
    }
    ```
- **Response**:
    ```json
    {
      "message": "Product created successfully.",
      "product_id": "string"
    }
    ```

## Error Handling

All API responses include standard HTTP status codes. Error responses will contain a message and a code for reference.

- **Example Error Response**:
    ```json
    {
      "error": {
        "code": "INVALID_CREDENTIALS",
        "message": "The provided credentials are invalid."
      }
    }
    ```




