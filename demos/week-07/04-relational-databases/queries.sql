-- create my relational tables
CREATE TABLE IF NOT EXISTS customers (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  customer_name VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS biscuits (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  biscuit_name VARCHAR(255),
  src TEXT,
  description TEXT,
  crunchiness INT,
  customer_id INT REFERENCES customers(id)
);

-- insert data into tables

INSERT INTO customers (customer_name) 
VALUES ('Manny'), ('Joe'), ('Sam'), ('Tim');

INSERT INTO biscuits (biscuit_name, src, description, crunchiness, customer_id) 
VALUES ('Bourbon', 'https://images.unsplash.com/photo-1603194556500-bdd4c947a952?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 6, 2),
('Custard Cream', 'https://avatars.githubusercontent.com/u/144026692?v=4', 'Mouth-watering piece of heaven', 5, 1 ),
('Hobnob', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hobnobs.jpg', 'Mouth-watering piece of heaven', 4, 4),
('Ginger Nuts', 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Mouth-watering piece of heaven', 4, 3 ),
('Chocolate Cookies', 'https://images.unsplash.com/photo-1589988802149-7f9cb13a468e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Delicious cookie with scrumptious chocolate', 4, 1);

-- select the customer name and the biscuit name from the tables
-- SELECT biscuit_name FROM biscuits AND SELECT customer_name FROM customers; --> this is not valid syntax

-- JOIN 
-- to specify the table and the column, we can use dot notation --> customers.id, biscuits.customer_id
SELECT customer_name, biscuit_name FROM customers
JOIN biscuits ON biscuits.customer_id = customers.id;

-- if you select everything, you will get all data from both tables
SELECT * FROM customers
JOIN biscuits ON biscuits.customer_id = customers.id;

-- You can use aliases, conditions, different orders, just like any regular select query 
SELECT customer_name AS "customer name", biscuit_name AS "biscuit name" FROM customers
JOIN biscuits ON biscuits.customer_id = customers.id
WHERE customers.id = 1
ORDER BY biscuit_name ASC;