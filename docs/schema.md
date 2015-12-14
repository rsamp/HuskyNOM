# Schema Information

## businesses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
type        | string    | not null
address     | string    | not null
hours       | string    |
delivery    | boolean   |
accept_cc   | boolean   |

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
num_reviews     | integer   | not null, default: 0

## images (polymorphic)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
imageable_id    | integer   | not null
imageable_type  | string    | not null
