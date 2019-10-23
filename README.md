# back-end

Hi guys! Here is some documentation to help you figure out the API

Here are some dummy accounts with stuff in them if you'd like to use them for development:

username: "dummy1"
password: "dummy1"

username: "dummy2"
password: "dummy2"

**dummy1 has 2 buckets with 1 item each associated with it, dummy2 has 1 bucket with 1 item**

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
function: shows list of all users in database *must be logged in to view

GET /users/:id
returns: object
function: returns specified user by id *must be logged in to view

PUT /users/:id
returns: object
function: updates specified user information **NOTE: password cannot be changed! *must be logged in to change

DELETE /users/:id
returns: object
function: removes user from database **NOTE: this is irreversible! *must be logged in to remove 


Buckets

GET /buckets
returns: array
function: shows buckets belonging to the specified user (right now it just shows all buckets, but I'll fix that)

POST /buckets
returns: object
function: adds a new bucket to a specified user
Data structure:
  title: "" *required*
  created_by: "" *optional*
  user_id: integer *required*

GET /buckets/:id
returns: object
function: shows the bucket with the specified id

PUT /buckets/:id
returns: object
function: user can update the bucket information
Data structure:
  title: "" *required*
  created_by: "" *optional*
  user_id: integer *required*

DELETE /buckets/:id
returns: object
function: removes bucket from database

Items

GET /items
returns: array
function: shows buckets belonging to the specified user (right now it just shows all buckets, but I'll fix that)

POST /items
returns: object
function: adds a new bucket to a specified bucket
Data structure:
  item_name: "" *required*
  journal_entry: "" *optional*
  photo: "" *optional* **NOTE- I don't have it set up for uploads yet, but we can put in strings from unsplash and it works for now.
  completed: true or false(defaults to false)
  bucket_id: integer *required*

GET /items/:id
returns: object
function: shows the item with the specified id

PUT /items/:id
returns: object
function: user can update the item information
Data structure:
  item_name: "" *required*
  journal_entry: "" *optional*
  photo: "" *optional* **NOTE- I don't have it set up for uploads yet, but we can put in strings from unsplash and it works for now.
  completed: true or false(defaults to false)
  bucket_id: integer *required*

DELETE /items/:id
returns: object
function: removes item from database




