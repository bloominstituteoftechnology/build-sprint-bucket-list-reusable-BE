# back-end

Hi guys! Here is some documentation to help you figure out the API

This is the full url that you will need as a prefix to every request:
    https://bw-bucketlist.herokuapp.com/api

These are the endpoints available to you:

Users

  POST -- /users/register 
Returns: object
Function: Adds a user to the database, returns that user
Data Structure:
    username: "" - required
    password: "" - required
    email: "" - optional

POST -- /users/login
Returns: object
Function: Returns "login successful" and authorization token
Data Structure:
    username: "" - required
    password: "" - required
    email: "" - optional

GET -- /users
Returns: array of objects
Function: Returns all users
(will not return unless user is logged in, requires token)


