
//SITE LOOKS BEST ON FIREFOX, TEST ON FIREFOX
//PASSWORD FOR LOGIN IS "admin"

var total = 0;
var numApples = 0;
var numPears = 0;
var numOranges = 0;
var numNectarines = 0;
var numApricots = 0;
var numBananas = 0;
var numMangoes = 0;
var numStrawberries = 0;
var numBlueberries = 0;
var numRaspberries = 0;
var numLemons = 0;


//function for incrementing the number in the textbox with the '+' button (the textbox where the user chooses how much fruit to order)
function incNumber(box) {
        //gets the value of the amount currently in the box to be incremented, and the amount in stock
        var value = parseInt(document.getElementById('display' + box).value, 10);
        var stock = parseInt(document.getElementById('stock' + box).value, 10);
        value = isNaN(value) ? 0 : value;
        //doesn't let the user increment past the amount in stock
        if (value < stock) {
            value++;
        }
        //updates the display box after each increment
        document.getElementById('display'+box).value = value;
}

//function for decrementing the number in the textbox with the "-" button (the textbox where the user chooses how much fruit to order)
function decNumber(box) {
    //gets the amount currently in the text box that is to be decremented
    var value = parseInt(document.getElementById('display'+box).value, 10);
    value = isNaN(value) ? 0 : value;
    //doesn't let the user decrement past 1
    if (value > 1) {
        value--;
    }
    //updates the display box
    document.getElementById('display'+box).value = value;
}


function addToCart(fruitID) {
    //gets the list element
    var list = document.getElementById('basket');
    //gets the amount of the fruit ordered and how much is in stock
    var entValue = parseInt(document.getElementById("display" + fruitID).value,10);
    var stock = parseInt(document.getElementById('stock' + fruitID).value, 10);

    if (entValue <= stock) { //if the user doesn't order more than is in stock
        //if the user adds apples
        if (fruitID == 1) {
            //stores the amount of apples ordered in a global variable to be used later
            numApples = numApples + entValue;
            //calculates the total price
            var fruitTotal = (parseInt(entValue) * 0.99);
            //creates the list entry for apples
            var listEntry = entValue + " Apple(s)/Pommes, Price: $" + parseFloat(fruitTotal).toFixed(2);
            //subtracts from the stock value
            document.getElementById('stock1').value = stock - entValue;
        }
        //if the user adds pears (same code for every single entry except price and the specific website elements for each fruit)
        else if (fruitID == 2) {
            numPears = numPears + entValue;
            var fruitTotal = (parseInt(entValue) * 0.99);
            var listEntry = entValue + " Pear(s)/Poires, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock2').value = stock - entValue;
        }
        //if the user adds oranges
        else if (fruitID == 3) {
            numOranges = numOranges + entValue;
            //translates the same in french as in english
            var fruitTotal = (parseInt(entValue) * 1.99);
            var listEntry = entValue + " Orange(s), Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock3').value = stock - entValue;
        }
        //nectarines
        else if (fruitID == 4) {
            numNectarines = numNectarines + entValue;
            //translates the same in french as in english
            var fruitTotal = (parseInt(entValue) * 0.79);
            var listEntry = entValue + " Nectarine(s), Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock4').value = stock - entValue;
        }
        //apricots
        else if (fruitID == 5) {
            numApricots = numApricots + entValue;
            var fruitTotal = (parseInt(entValue) * 0.59);
            var listEntry = entValue + " Apricot(s)/Abricots, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock5').value = stock - entValue;
        }
        //bananas
        else if (fruitID == 6) {
            numBananas = numBananas + entValue;
            var fruitTotal = (parseInt(entValue) * 0.99);
            var listEntry = entValue + " Banana(s)/Bananes, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock6').value = stock - entValue;
        }
        //mangoes
        else if (fruitID == 7) {
            numMangoes = numMangoes + entValue;
            var fruitTotal = (parseInt(entValue) * 1.99);
            var listEntry = entValue + " Mango(s)/Mangues, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock7').value = stock - entValue;
        }
        //strawberries
        else if (fruitID == 8) {
            numStrawberries = numStrawberries + entValue;
            var fruitTotal = (parseInt(entValue) * 0.19);
            var listEntry = entValue + " Strawberries/Fraises, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock8').value = stock - entValue;
        }
        //blueberries
        else if (fruitID == 9) {
            numBlueberries = numBlueberries + entValue;
            var fruitTotal = (parseInt(entValue) * 0.03);
            var listEntry = entValue + " Blueberries/Myrtilles, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock9').value = stock - entValue;
        }
        //raspberries
        else if (fruitID == 10) {
            numRaspberries = numRaspberries + entValue;
            var fruitTotal = (parseInt(entValue) * 0.03);
            var listEntry = entValue + " Raspberries/Framboises, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock10').value = stock - entValue;
        }
        //lemons
        else if (fruitID == 11) {
            numLemons = numLemons + entValue;
            var fruitTotal = (parseInt(entValue) * 0.99);
            var listEntry = entValue + " Lemon(s)/Citrons, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock11').value = stock - entValue;
        }
        //adds to the total price after each addition
        total = total + fruitTotal;
        //adds it to the shopping cart list on the website
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(listEntry));
        list.appendChild(entry);

        //gets the tax rate after each entry
        var taxrate = parseInt(document.getElementById('taxrate').value, 10);

        //updates the total price before tax
        document.getElementById('totalNoTax').innerHTML = 'Total before tax: $' + parseFloat(total).toFixed(2);

        //calculates the total after tax
        var totalAfter = parseFloat(total * (taxrate/100 + 1)).toFixed(2);
        
        //updates the total after tax
        document.getElementById('totalAfterTax').innerHTML = 'Total after tax ('+taxrate+'%): $' + totalAfter
    }
    else {
        //If the user orders more than is in stock
        alert("Please choose a quantity less than the amount currently in stock.")
    }
}


//function for clearing the shopping cart and resetting the stock amounts for each fruit
function clearList() {
    //asks the user to confirm that they want to clear the shopping cart
    if (confirm("Are you sure you want to clear your shopping cart?")) {

        //gets the stock for a different fruit and resets it after each iteration
        for (i = 1; i < 12; i++) {
            //getting the stock (when i=1 the stock is for apples, i=2 it is for pears, and so on..)
            var stock = parseInt(document.getElementById('stock' + i).value, 10);
            //resetting apples
            if (i == 1) {
                document.getElementById('stock' + i).value = stock + numApples;
            }
            //resetting pears
            else if (i == 2) {
                document.getElementById('stock' + i).value = stock + numPears;
            }
            //resetting oranges
            else if (i == 3) {
                document.getElementById('stock' + i).value = stock + numOranges;
            }
            //resetting nectarines
            else if (i == 4) {
                document.getElementById('stock' + i).value = stock + numNectarines;
            }
            //resetting apricots
            else if (i == 5) {
                document.getElementById('stock' + i).value = stock + numApricots;
            }
            //resetting bananas
            else if (i == 6) {
                document.getElementById('stock' + i).value = stock + numBananas;
            }
            //resetting mangoes
            else if (i == 7) {
                document.getElementById('stock' + i).value = stock + numMangoes;
            }
            //resetting strawberries
            else if (i == 8) {
                document.getElementById('stock' + i).value = stock + numStrawberries;
            }
            //resetting blueberries
            else if (i == 9) {
                document.getElementById('stock' + i).value = stock + numBlueberries;
            }
            //resetting raspberries
            else if (i == 10) {
                document.getElementById('stock' + i).value = stock + numRaspberries;
            }
            //resetting lemons
            else if (i == 11) {
                document.getElementById('stock' + i).value = stock + numLemons;
            }
        }
        //removes all of the items from the shopping cart
        var list = document.getElementById('basket');
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
        //resets all of the global variables
        total = 0;
        numApples = 0;
        numPears = 0;
        numOranges = 0;
        numNectarines = 0;
        numApricots = 0;
        numBananas = 0;
        numMangoes = 0;
        numStrawberries = 0;
        numBlueberries = 0;
        numRaspberries = 0;
        numLemons = 0;

        //updates the total prices before and after tax
        var taxrate = parseInt(document.getElementById('taxrate').value, 10);
        document.getElementById('totalNoTax').innerHTML = 'Total before tax: ';
        document.getElementById('totalAfterTax').innerHTML = 'Total after tax ('+taxrate+'%): ';
    } else {
        
    }
   

}

function buyItems() {
    //gets the taxrate
    var taxrate = parseInt(document.getElementById('taxrate').value, 10);

    //if the user confirms they want to buy the items, it removes the items from the shopping cart without resetting any values
    if (confirm("Total Price: $" + parseFloat(total * (taxrate/100 + 1)).toFixed(2))) {
        var list = document.getElementById('basket');
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }

        //updates the total prices before and after tax
        document.getElementById('totalNoTax').innerHTML = 'Total before tax: ';
        document.getElementById('totalAfterTax').innerHTML = 'Total after tax (' + taxrate +'%): ';

        //resetting global variables
        total = 0;
        numApples = 0;
        numPears = 0;
        numOranges = 0;
        numNectarines = 0;
        numApricots = 0;
        numBananas = 0;
        numMangoes = 0;
        numStrawberries = 0;
        numBlueberries = 0;
        numRaspberries = 0;
        numLemons = 0;
    } else {
        
    }
}

function login() {
    //PASSWORD FOR LOGIN IS "admin"
    var password = "admin";
    //asks the user to enter a password
    var person = prompt("Please enter the password:");
    //if the user enters the correct password
    if (person == password) {
        //disabling the login button from being used again
        document.getElementById("login").disabled = true;
        //creating the logout button
        var logoutbtn = document.createElement("BUTTON");
        var t = document.createTextNode("Log out");
        logoutbtn.appendChild(t);
        document.body.appendChild(logoutbtn);
        logoutbtn.id = "logoutbutton";
        //when the log out button is clicked, call the logout function
        logoutbtn.addEventListener("click", logout);

        //lets the user know that they have the powers of a manager
        alert("You are now logged in as a manager, you may edit the quantity of fruits and the tax rate. Click 'Log Out' at the bottom of the page to save your changes.");

        //tax rate and stock textboxes are no longer read only
        document.getElementById('taxrate').readOnly = false;

        for (i = 1; i < 12; i++) {
            document.getElementById('stock'+i).readOnly = false;
        }
        
    } else {
        alert ("Incorrect login")
    }
    
}

function logout() {
    //allows the user to log in again as admin
    document.getElementById("login").disabled = false;

    //locks all of the quantity and tax rate textboxes to readonly again
    document.getElementById('taxrate').readOnly = true;
   
    for (i = 1; i < 12; i++) {
        document.getElementById('stock' + i).readOnly = true;
    }

    //updating the tax values 
    var taxrate = parseInt(document.getElementById('taxrate').value, 10);
    document.getElementById('totalAfterTax').innerHTML = 'Total after tax (' + taxrate + '%): ';

    //removes the logout button
    var removelogout = document.getElementById("logoutbutton");
    removelogout.parentNode.removeChild(removelogout);
    alert("Logged out, changes saved.");
}