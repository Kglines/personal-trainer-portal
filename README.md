# Personal Trainer Portal

## DB Schema Design

## API Documentation

### All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require Authentcation
    * Status Code: 401
    * Headers: 
        * Content-Type: application/json
    * Body:
        ```json
            {
                "message": "Authentication Required",
                "statusCode": 401
            }
        ```
### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

* Request: endpoints that require proper authorization
* Error Response: Require proper authorization
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
        {
        "message": "Forbidden",
        "statusCode": 403
        }
    ```

### GET the Current User
Returns the information about the current user that is logged in.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /currentUser
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "profileImg": "https://www.profile-image.com/JohnSmith.jpeg",
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /login
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "token": ""
    }
    ```

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid credentials",
      "statusCode": 401
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "email": "Email is required",
        "password": "Password is required"
      }
    }
    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /signup
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "firstName": "John",
      "lastName": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "token": ""
    }
    ```

* Error response: User already exists with the specified email
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

* Error response: User already exists with the specified username
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "username": "User with that username already exists"
      }
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "email": "Invalid email",
        "username": "Username is required",
        "firstName": "First Name is required",
        "lastName": "Last Name is required"
      }
    }
    ```
### GET all Announcements
Return all announcements for a month.

* Require Authentication: true
* Request: 
    * Method: GET
    * URL: /home
    * Body: none
* Success Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:
        ```json
            {
              "Announcements": [
                {
                  "id": 1,
                  "userId": 2,
                  "date": "2023-12-01",
                  "Body": "Today is the first of December. Have a great day!"
                },
                {
                  "id": 2,
                  "userId": 2,
                  "date": "2023-12-02",
                  "Body": "Today is the second of December. Have a great day!"
                },
              ]
            }
        ```

### GET one Announcement
Returns one of the announcements for a month.

* Require Authentication: true
* Request:
    * Method: GET
    * URL: /announcements/:id
    * BodyL none
* Success Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:
        ```json
            {
                "Announcement": [
                    {
                        "id": 1,
                        "date": "2023-12-01",
                        "userId": 2,
                        "body": "Today is the first of December. Have a great day!"
                    }
                ]
            }
        ```


### GET all Machines
Returns all the machines for a club.

* Require Authentication: false
* Request:
    * Method: GET
    * URL: /machines
    * Body: none
* Success Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:
        ```json
            {
                "Machines": [
                    {
                        "id": 1,
                        "number": 1,
                        "manufacturer": "Precor",
                        "type": "Cardio",
                        "name": "TRM 885",
                        "description": "Treadmill",
                        "machine_img": "https://www.precor.com/sites/www.precor.com/files/asset-images/product/TRM885_2017.png",
                        "dateNew": "2023-11-01",
                        "mileage": 25,
                        "hours": 5,
                    }
                ]
            }
        ```

### Get One Machine
Returns one of the machines for a club.

* Require Authentication: false
* Request:
    * Method: GET
    * URL: /machines/:id
    * BodyL none
* Success Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:
        ```json
            {
                "Machine": [
                    {
                        "id": 1,
                        "number": 1,
                        "manufacturer": "Precor",
                        "type": "Cardio",
                        "name": "TRM 885",
                        "description": "Treadmill",
                        "machine_img": "https://www.precor.com/sites/www.precor.com/files/asset-images/product/TRM885_2017.png",
                        "dateNew": "2023-11-01",
                        "mileage": 25,
                        "hours": 5,
                    }
                ]
            }
        ```

### Create a Machine
Creates a the machines for a club.

* Require Authentication: false
* Request:
    * Method: POST
    * URL: /machines/:id
    * Body: 
    ```json
        {
          "number": 1,
          "manufacturer": "Precor",
          "type": "Cardio",
          "name": "TRM 885",
          "description": "Treadmill",
          "machine_img": "https://www.precor.com/sites/www.precor.com/files/asseproduct/TRM885_2017.png",
          "dateNew": "2023-11-01",
          "mileage": 25,
          "hours": 5,
        }
    ```
* Success Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:
        ```json
            {
                "Machine": [
                    {
                        "id": 1,
                        "number": 1,
                        "manufacturer": "Precor",
                        "type": "Cardio",
                        "name": "TRM 885",
                        "description": "Treadmill",
                        "machine_img": "https://www.precor.com/sites/www.precor.com/files/asset-images/product/TRM885_2017.png",
                        "dateNew": "2023-11-01",
                        "mileage": 25,
                        "hours": 5,
                    }
                ]
            }
        ```

### Edit A Machine
Edits one of the machines for a club.

* Require Authentication: false
* Request:
    * Method: PUT
    * URL: /machines/:id
    * Body: 
    ```json
        {
          "id": 1,
          "number": 1,
          "manufacturer": "Precor",
          "type": "Cardio",
          "name": "TRM 885",
          "description": "Treadmill",
          "machine_img": "https://www.precor.com/sites/www.precor.com/files/asseproduct/TRM885_2017.png",
          "dateNew": "2023-11-01",
          "mileage": 25,
          "hours": 5,
        }
    ```
* Success Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:
        ```json
            {
                "Machine": [
                    {
                        "id": 1,
                        "number": 1,
                        "manufacturer": "Precor",
                        "type": "Cardio",
                        "name": "TRM 885",
                        "description": "Treadmill",
                        "machine_img": "https://www.precor.com/sites/www.precor.com/files/asset-images/product/TRM885_2017.png",
                        "dateNew": "2023-11-01",
                        "mileage": 25,
                        "hours": 5,
                    }
                ]
            }
        ```

### Delete a Machine
Deletes one of the machines for a club.

* Require Authentication: false
* Request:
    * Method: DELETE
    * URL: /machines/:id
    * Body: none
* Success Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:
        ```json
            {
                "Machine": [
                    {
                        "id": 1,
                        "number": 1,
                        "manufacturer": "Precor",
                        "type": "Cardio",
                        "name": "TRM 885",
                        "description": "Treadmill",
                        "machine_img": "https://www.precor.com/sites/www.precor.com/files/asset-images/product/TRM885_2017.png",
                        "dateNew": "2023-11-01",
                        "mileage": 25,
                        "hours": 5,
                    }
                ]
            }
        ```
