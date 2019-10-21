# back-end

Hi guys! Here is some documentation to help you figure out the API

This is the full url that you will need as a prefix to every request:
    https://bw-bucketlist.herokuapp.com/api

These are the endpoints available to you:

Users

POST /users/register
returns: object
function: adds user to database
Data structure:
  username: "" *required*
  password: "" *required*
  email: "" *optional*

POST /users/login
returns: object
function: verifies user is registered in the database, provides token to allow access to protected material
Data structure:
  username: "" *required*
  password: "" *required*
  email: "" *optional*

GET /users
returns: array
function: shows list of all users in database
  


