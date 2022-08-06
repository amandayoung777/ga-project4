# ga-project4
Project 4 - General Assembly - React App

This is a project using client-side React and server-side postgreSQL which is a mini-shop. Items from the database are rendered on the page as products.

Accounts can be created via the Sign Up page, and once a user is logged in, a "Contact Me" button becomes visible, whereby a user can send a message to the site admin to make purchases. 

# Prerequisites
To build and run project you must have installed:

* React
* postgreSQL
* Heroku (required if deploying to heroku)

# Setup/Run Project
``` yarn install ```
``` psql CREATE DATABASE (your_db_name) ```
``` psql -D (your_db_name) < schema.sql ```
``` psql -D (your_db_name) < seed.sql ```
``` yarn run start:dev ```

# Deploying to Heroku

Pushing to Heroku
``` git push heroku main ```

Adding database to Heroku
``` heroku addons:create heroku-postgresql:hobby-dev ```

Clearing Heroku database
``` heroku pg:reset ```

Pushing database to Heroku
``` heroku pg:push campanion DATABASE_URL ```


# Future Improvements
* CSS document could be cleaned up, into pages/functions
* Adding a Search Function
* Having profile integration that allows for only admins to see posted messages
* Have a shopping cart 
* Delete function for mesages or a to-do list function which clears them once actioned

# Code Snippets
``` SQL
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    price INTEGER,
    img TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    password_hash VARCHAR,
    admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    message VARCHAR
);
```