# bamazon
Through out this week, I've been building the basic app customer app for bamazon. I've spent roughly 8 hours over the past week trying to get this to work, where most of my time has been spent reading documentation of SQL in hopes of figuring out database manipulation. I feel somewhat succesful but also regret not having put more time into this project.
1) The app lists the items for sale with set price
2) User selects the ID of item he/she wishes to purchase
3) User inputs the amount of that item
4) customer.js then checks to make sure there is enough quantity in database. If there is, it subtracts the amount from database and alerts user that the transaction was a success. If not enough, customer.js
prompts the user that there currently isn't that quantity of item and to try again.