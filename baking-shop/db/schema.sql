DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

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