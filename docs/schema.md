# DB Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed
created_at      | datetime  | 
updated_at      | datetime  | 

## videos
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed
description     | text      | not null
category        | string    | not null, indexed
url             | string    | not null
created_at      | datetime  | 
updated_at      | datetime  | 

## showings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
host_id         | string    | not null, indexed, foreign key references users
viewer_id       | string    | not null, indexed, foreign key references users
video_id        | string    | not null, indexed, foreign key references videos
title           | string    | not null, default: video title plus start date & time
start date      | datetime  | not null
start time      | datetime  | not null
active          | boolean   | not null, default: false
created_at      | datetime  | 
updated_at      | datetime  | 

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
author_id       | integer   | not null, indexed, foreign key references users
showing_id      | integer   | not null, indexed, foreign key references showings
parent_id       | integer   | indexed, foreign key references parent comment
created_at      | datetime  | 
updated_at      | datetime  | 
