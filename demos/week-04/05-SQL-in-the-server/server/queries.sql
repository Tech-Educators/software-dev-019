-- SQL Structured Query Language
-- we will give instructions (queries) to our database using this language

-- The basic queries are:
-- to create a new table
-- to insert data into a table
-- to select data from a table

-- I want to create a table in my database
CREATE TABLE staff (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  staff_name VARCHAR(255),
  staff_location VARCHAR(255),
  staff_role TEXT,
  staff_salary INT
);

-- PRIMARY KEY specifies a column value to be a unique identifier for each entry in our table

-- I want to insert new data into the table
-- use single quotes for strings
INSERT INTO staff (staff_name, staff_location, staff_role, staff_salary) 
VALUES ('Manny', 'Norwich', 'instructor', 1000000),
('Joe', 'Norwich', 'TA', 2000000);

-- I want to select the entries in my table
SELECT * FROM staff;
SELECT staff_name FROM staff;
SELECT * FROM staff WHERE id = 1;
SELECT * FROM staff WHERE staff_name = 'Joe';