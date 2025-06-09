-- create a new table
CREATE TABLE IF NOT EXISTS biscuits (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, --the id is the unique value we use to identify each entry
  biscuit_name VARCHAR(255) NOT NULL, --NOT NULL makes sure this column always has data
  src TEXT NOT NULL,
  description TEXT,
  crunchiness INT NOT NULL --no trailing commas!
);

-- constraints --> data type I store in each column

--======================================================

-- I want to create new data in a table

INSERT INTO biscuits (biscuit_name, src, description, crunchiness) 
VALUES ('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Mouth-watering piece of heaven', 5 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4);

--make sure your strings use single quotes

--======================================================

-- retrieve data from a table
-- when we select data, we are not creating a new table with data; we are filtering the data in an existing table
SELECT * FROM biscuits;

-- retrieve the name of the biscuit and the description
SELECT biscuit_name, description FROM biscuits;

-- retrieve all data where the crunchiness is 4
SELECT * FROM biscuits WHERE crunchiness = 4;

-- retrieve all data where the crunchiness is 4 and put it in alphabetical order using the name
SELECT * FROM biscuits WHERE crunchiness = 4 ORDER BY biscuit_name ASC;

-- retrieve the name and description but limit the amount of entries to 2 and skip entry 1
SELECT biscuit_name, description FROM biscuits LIMIT 2 OFFSET 1; 

-- retrieve all data from the table and rename the column names --> ALIAS
SELECT biscuit_name AS "biscuit name", description AS "biscuit description", src AS "biscuit image", crunchiness FROM biscuits; -- double quotes for column names

--======================================================

-- update data from a table

-- we ALWAYS need a condition
-- use the id to make sure you target the right entry

UPDATE biscuits SET crunchiness = 7 WHERE id = 4;

--======================================================

-- delete data from a table

-- we ALWAYS need a condition
-- use the id to make sure you target the right entry
DELETE FROM biscuits WHERE id = 5; -- id 5 won't be generated again

-- delete table (super destructive operation)
DROP TABLE biscuits;

-- remove / add / edit column names (check documentation)
ALTER TABLE 