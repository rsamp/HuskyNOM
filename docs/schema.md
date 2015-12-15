# Schema Information

## businesses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
category    | string    | not null
lat         | float     | not null
lng         | float     | not null
address     | string    |
hours       | string    |
delivery    | boolean   |
accept_cc   | boolean   |
image_id    | integer   | foreign key (referenes images)

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
business_id | integer   | not null, foreign key (references businesses), indexed
rating      | integer   | not null
body        | text      | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## images (polymorphic if time allows)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
url             | string    | not null
imageable_id    | integer   | not null
imageable_type  | string    | not null
