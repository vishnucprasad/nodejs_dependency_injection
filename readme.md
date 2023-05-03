# Project: Nodejs Dependency Injection

# 📁 Collection: Auth

## End-point: Register

### Method: POST

> ```
> http://localhost:3000/auth/register
> ```

### Body (**raw**)

```json
{
    "email": "test@test.com",
    "firstName": "Test",
    "lastName": "Name",
    "password": "test@123"
}
```

### Response: 200

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMwNDk1ODIsImV4cCI6MTY4MzA1MDE4Mn0.mmThGXGKYR8rZVWVbTV2vFK6HsLEB25Nx3O_Cg7_OOs",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMwNDk1ODIsImV4cCI6MTY4ODIzMzU4Mn0.WmRMZLrWGNap3c3RWaUCbhDFUmIq-cDg3XYse1R5dyU",
    "user": {
        "email": "test@test.com",
        "firstName": "Test",
        "lastName": "Name",
        "createdAt": 1683049497807,
        "_id": "64514c6e92a981fd805e42f9",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login

### Method: POST

> ```
> http://localhost:3000/auth/login
> ```

### Body (**raw**)

```json
{
    "email": "test@test.com",
    "password": "test@123"
}
```

### Response: 200

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMwNDk2NTUsImV4cCI6MTY4MzA1MDI1NX0.c5t6TF7Oo27HoatsDF6Yqk0Q3gNDI1F2ljBTuS2_CV4",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMwNDk2NTUsImV4cCI6MTY4ODIzMzY1NX0.VE9iviUgP5U3xPVs7F9f7pc6Pl7FaioAJljL0eP_ePg",
    "user": {
        "_id": "64514c6e92a981fd805e42f9",
        "email": "test@test.com",
        "firstName": "Test",
        "lastName": "Name",
        "createdAt": 1683049497807,
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Refresh Acess Token

### Method: POST

> ```
> http://localhost:3000/auth/refresh
> ```

### Body (**raw**)

```json
{
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMxMjg1OTIsImV4cCI6MTY4ODMxMjU5Mn0.5tgFKNT5kNGnfGDeFUICZyHlUBruGvvQzODplLEBCqk"
}
```

### Response: 200

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMxMDEwNjMsImV4cCI6MTY4MzEwMTY2M30.-20e7EusrPVE0nGNSqqdrfDdp3adOvizh6SN4kyzMu8"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Auth

### Method: GET

> ```
> http://localhost:3000/auth
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                        | Type   |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMxMDI1NTksImV4cCI6MTY4MzEwMzE1OX0.5f-eMNtPKBEeZCxK0Md6h1p0J4QAqovJdQSwPwtFV-0 | string |

### Response: 200

```json
{
    "user": {
        "_id": "64514c6e92a981fd805e42f9",
        "email": "test@test.com",
        "firstName": "Test",
        "lastName": "Name",
        "createdAt": 1683049497807,
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Logout

### Method: DELETE

> ```
> http://localhost:3000/auth/logout
> ```

### Body (**raw**)

```json

```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                        | Type   |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMxMDU4MDgsImV4cCI6MTY4MzEwNjQwOH0.oiTPbXMU6hPz4uetjXEyuPTQ4mdAH4ZPBDnO-PEvkh0 | string |

### Response: 200

```json
{
    "status": true
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Todo

## End-point: Create Todo

### Method: POST

> ```
> http://localhost:3000/todo
> ```

### Body (**raw**)

```json
{
    "title": "Test title",
    "description": "Test description for Test title",
    "dueDate": 1688312238983
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                        | Type   |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMxMjk4NDcsImV4cCI6MTY4MzEzMDQ0N30.TZXj8CwGMnhGGUgFyU0pQramOnVwenQ5oMhwT3YvALo | string |

### Response: 200

```json
{
    "todo": {
        "title": "Test title",
        "description": "Test description for Test title",
        "dueDate": 1688312238983,
        "completed": false,
        "createdAt": 1683128667573,
        "updatedAt": 1683128667573,
        "_id": "6452816fae4c37fab0e6ba61",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Todos

### Method: GET

> ```
> http://localhost:3000/todo
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                        | Type   |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMxMjk4NDcsImV4cCI6MTY4MzEzMDQ0N30.TZXj8CwGMnhGGUgFyU0pQramOnVwenQ5oMhwT3YvALo | string |

### Response: 200

```json
{
    "todos": [
        {
            "_id": "6452834d22387e698a5507f6",
            "user": "64514c6e92a981fd805e42f9",
            "title": "Test title",
            "description": "Test description for Test title",
            "dueDate": 1688312238983,
            "completed": false,
            "createdAt": 1683129156740,
            "updatedAt": 1683129156740,
            "__v": 0
        },
        {
            "_id": "6452864a0e169fae6b597cb4",
            "user": "64514c6e92a981fd805e42f9",
            "title": "Test title 2",
            "description": "Test description for Test title 2",
            "dueDate": 1688312238983,
            "completed": false,
            "createdAt": 1683129684474,
            "updatedAt": 1683129684474,
            "__v": 0
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Todo

### Method: GET

> ```
> http://localhost:3000/todo/6452864a0e169fae6b597cb4
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                        | Type   |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMxMzA1MzksImV4cCI6MTY4MzEzMTEzOX0.ZoZKMCDs2QmePoqmerGE0o_59V2e_277NhHjikld2HI | string |

### Response: 200

```json
{
    "todo": {
        "_id": "6452864a0e169fae6b597cb4",
        "user": "64514c6e92a981fd805e42f9",
        "title": "Test title 2",
        "description": "Test description for Test title 2",
        "dueDate": 1688312238983,
        "completed": false,
        "createdAt": 1683129684474,
        "updatedAt": 1683129684474,
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Todo

### Method: PATCH

> ```
> http://localhost:3000/todo/6452864a0e169fae6b597cb4
> ```

### Body (**raw**)

```json
{
    "completed": true
}
```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                        | Type   |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMxMzE0MTIsImV4cCI6MTY4MzEzMjAxMn0.3ti37e6FlkIeCFbkghf-ZaHznTL_Cc-Kx3h9XTnqnJk | string |

### Response: 200

```json
{
    "todo": {
        "_id": "6452864a0e169fae6b597cb4",
        "user": "64514c6e92a981fd805e42f9",
        "title": "Test title 2",
        "description": "Test description for Test title 2",
        "dueDate": 1688312238983,
        "completed": true,
        "createdAt": 1683129684474,
        "updatedAt": 1683129684474,
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Todo

### Method: DELETE

> ```
> http://localhost:3000/todo/6452864a0e169fae6b597cb4
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                        | Type   |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUxNGM2ZTkyYTk4MWZkODA1ZTQyZjkiLCJpYXQiOjE2ODMxMzE4NjksImV4cCI6MTY4MzEzMjQ2OX0.rduSY74x8jKjwpwY5baqJO3BO6Yz8f6O-k_x7KYOQoM | string |

### Response: 200

```json
{
    "todo": {
        "_id": "6452864a0e169fae6b597cb4",
        "user": "64514c6e92a981fd805e42f9",
        "title": "Test title 2",
        "description": "Test description for Test title 2",
        "dueDate": 1688312238983,
        "completed": true,
        "createdAt": 1683129684474,
        "updatedAt": 1683129684474,
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---
