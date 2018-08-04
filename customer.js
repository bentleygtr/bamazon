var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "admin1",
    
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
});

//showing customer all the products currently available

connection.query("SELECT * FROM products", function (error, results, fields){
    if (error) throw error;
    console.log("All items for sale");

    for (var i=0; i < results.length; i++){
        products = results[i];
        console.log(products.item_id + " " + products.product_name + " " + products.price)
    }
    promptUser();
})
function promptUser() {

    inquirer.prompt([{
        type: "input",
        message: "Enter ID of product selected for purchase",
        name: "firstPrompt"
    },
    {
        type: "input",
        message: "Enter quantity of product selected for purchase",
        name: "secondPrompt"
    },

    ]).then(answers => {
        //console.log(answers.firstPrompt, answers.secondPrompt)

        let itemChoice = answers.firstPrompt;
        let howMany = answers.secondPrompt;
        var itemID = 'SELECT * FROM products WHERE ?';

        connection.query(itemID, { item_id: answers.initialPrompt }, function (err, data) {



            console.log("Quantity  Selected " + howMany + " " + data[0].product_name + "s at $" + data[0].price + " each")

            let total = addTotal(parseFloat(data[0].price.toFixed(2)), parseFloat(howMany))

            console.log("Your toal is: $" + total)
            if (data.length === 0) {
                console.log("Need a valid ID")
            }
            else if (data[0].stock_quantity > howMany) {
                var updateStock = 'UPDATE products SET stock_quantity = ' + (data[0].stock_quantity - howMany) + ' WHERE item_id = ' + itemChoice;
                var inventory = data[0].stock_quantity;

                connection.query(updateStock, function (err, data) {
                    console.log("Success. We have that item in stock")

                })
            } else if (data[0].stock_quantity < howMany) {
                console.log("Sorry that item is not in stock in that quantity. Please try again")
            }
            connection.end();

        })
    });
}



function addTotal(item, quantity) {
    let total = item * quantity
    return total.toFixed(2)

}
