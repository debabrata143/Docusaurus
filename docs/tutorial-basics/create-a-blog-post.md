---
sidebar_position: 3
---

# API specifications


This section provides detailed specifications for the available APIs, including their endpoints, request methods, parameters, and expected responses.

## User Management API

### Endpoint: `/api/v1/users`

- **Method**: `GET`
- **Description**: Retrieve a list of users.

#### Request Parameters

| Parameter   | Type     | Required | Description                      |
|-------------|----------|----------|----------------------------------|
| `limit`     | `number` | No       | Number of users to return (default: 10). |
| `offset`    | `number` | No       | Offset for pagination (default: 0).      |

#### Response

```json
{
  "users": [
    {
      "id": "123",
      "username": "john_doe",
      "email": "john@example.com"
    },
    ...
  ],
  "total": 100
}
 ```

 #### Request Body

```json
{
  "name": "string",
  "description": "string",
  "price": "number",
  "category": "string"
}

 ```

  #### Response

```json
{
  "id": "product_id",
  "message": "Product created successfully"
}

 ```

 
  #### Order Management API

```json
{
  "orders": [
    {
      "id": "order_id",
      "status": "pending",
      "total": 29.99
    },
    {
      "id": "order_id_2",
      "status": "completed",
      "total": 49.99
    }
  ]
}


 ```



