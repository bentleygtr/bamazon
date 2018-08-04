DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;


CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(60) NULL,
    department VARCHAR(60) NULL,
    price DECIMAL(10,2) DEFAULT 0,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ("Diablo 3", "Video Games", 39.99, 100),
("World of Warcraft", "Video Games", 49.99, 100),
("League of Legends", "Video Games", 9.99, 100),
("Razer Black Widow", "Keyboards", 79.99, 35),
("Razer Death Adder", "Mice", 49.99, 45),
("Razer Kraken", "Headsets", 69.99, 60),
("Nintendo Switch", "Consoles", 399.99, 20),
("Zelda: Breath of the Wild", "Video Games", 59.99, 100),
("Mario Odyssey", "Video Games", 59.99, 100),
("Hot Pockets", "Junk Food", 6.99, 1000);

SELECT * FROM products;