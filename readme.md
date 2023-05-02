# Project: Nodejs Dependency Injection

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

---
