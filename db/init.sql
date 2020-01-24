CREATE TABLE memes (
    id SERIAL PRIMARY KEY,
    url VARCHAR(3000),
    title VARCHAR(50)
);

SELECT *
FROM memes;