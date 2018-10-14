//SITE LOOKS BEST ON FIREFOX, TEST ON FIREFOX
// JavaScript source code
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



function incNumber(box) {
        var value = parseInt(document.getElementById('display' + box).value, 10);
        var stock = parseInt(document.getElementById('stock' + box).value, 10);
        value = isNaN(value) ? 0 : value;
        if (value < stock) {
            value++;
        }
        document.getElementById('display'+box).value = value;
}

function decNumber(box) {
    var value = parseInt(document.getElementById('display'+box).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
        value--;
    }
    document.getElementById('display'+box).value = value;
}


function addToCart(fruitID) {
    var list = document.getElementById('basket');
    var entValue = parseInt(document.getElementById("display" + fruitID).value,10);
    var stock = parseInt(document.getElementById('stock' + fruitID).value, 10);

    if (entValue <= stock) {
        if (fruitID == 1) {
            numApples = numApples + entValue;
            var fruitTotal = (parseInt(entValue) * 0.99)
            var listEntry = entValue + " Apple(s)/Pommes, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock1').value = stock - entValue;
        }
        else if (fruitID == 2) {
            numPears = numPears + entValue;
            var fruitTotal = (parseInt(entValue) * 0.99);
            var listEntry = entValue + " Pear(s)/Poires, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock2').value = stock - entValue;
        }
        else if (fruitID == 3) {
            numOranges = numOranges + entValue;
            //translates the same in french as in english
            var fruitTotal = (parseInt(entValue) * 1.99);
            var listEntry = entValue + " Orange(s), Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock3').value = stock - entValue;
        }
        else if (fruitID == 4) {
            numNectarines = numNectarines + entValue;
            //translates the same in french as in english
            var fruitTotal = (parseInt(entValue) * 0.79);
            var listEntry = entValue + " Nectarine(s), Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock4').value = stock - entValue;
        }
        else if (fruitID == 5) {
            numApricots = numApricots + entValue;
            var fruitTotal = (parseInt(entValue) * 0.59);
            var listEntry = entValue + " Apricot(s)/Abricots, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock5').value = stock - entValue;
        }
        else if (fruitID == 6) {
            numBananas = numBananas + entValue;
            var fruitTotal = (parseInt(entValue) * 0.99);
            var listEntry = entValue + " Banana(s)/Bananes, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock6').value = stock - entValue;
        }
        else if (fruitID == 7) {
            numMangoes = numMangoes + entValue;
            var fruitTotal = (parseInt(entValue) * 1.99);
            var listEntry = entValue + " Mango(s)/Mangues, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock7').value = stock - entValue;
        }
        else if (fruitID == 8) {
            numStrawberries = numStrawberries + entValue;
            var fruitTotal = (parseInt(entValue) * 0.19);
            var listEntry = entValue + " Strawberries/Fraises, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock8').value = stock - entValue;
        }
        else if (fruitID == 9) {
            numBlueberries = numBlueberries + entValue;
            var fruitTotal = (parseInt(entValue) * 0.03);
            var listEntry = entValue + " Blueberries/Myrtilles, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock9').value = stock - entValue;
        }
        else if (fruitID == 10) {
            numRaspberries = numRaspberries + entValue;
            var fruitTotal = (parseInt(entValue) * 0.03);
            var listEntry = entValue + " Raspberries/Framboises, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock10').value = stock - entValue;
        }
        else if (fruitID == 11) {
            numLemons = numLemons + entValue;
            var fruitTotal = (parseInt(entValue) * 0.99);
            var listEntry = entValue + " Lemon(s)/Citrons, Price: $" + parseFloat(fruitTotal).toFixed(2);
            document.getElementById('stock11').value = stock - entValue;
        }
        total = total + fruitTotal;
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(listEntry));
        list.appendChild(entry);

        var taxrate = parseInt(document.getElementById('taxrate').value, 10);

        document.getElementById('totalNoTax').innerHTML = 'Total before tax: $' + parseFloat(total).toFixed(2);

        var totalAfter = parseFloat(total * (taxrate/100 + 1)).toFixed(2);

        document.getElementById('totalAfterTax').innerHTML = 'Total after tax ('+taxrate+'%): $' + totalAfter
    }
    else {
        alert("Please choose a quantity less than the amount currently in stock.")
    }
}



function clearList() {
    if (confirm("Are you sure you want to clear your shopping cart?")) {
        for (i = 1; i < 12; i++) {
            var stock = parseInt(document.getElementById('stock' + i).value, 10);
            if (i == 1) {
                document.getElementById('stock' + i).value = stock + numApples;
            }
            else if (i == 2) {
                document.getElementById('stock' + i).value = stock + numPears;
            }
            else if (i == 3) {
                document.getElementById('stock' + i).value = stock + numOranges;
            }
            else if (i == 4) {
                document.getElementById('stock' + i).value = stock + numNectarines;
            }
            else if (i == 5) {
                document.getElementById('stock' + i).value = stock + numApricots;
            }
            else if (i == 6) {
                document.getElementById('stock' + i).value = stock + numBananas;
            }
            else if (i == 7) {
                document.getElementById('stock' + i).value = stock + numMangoes;
            }
            else if (i == 8) {
                document.getElementById('stock' + i).value = stock + numStrawberries;
            }
            else if (i == 9) {
                document.getElementById('stock' + i).value = stock + numBlueberries;
            }
            else if (i == 10) {
                document.getElementById('stock' + i).value = stock + numRaspberries;
            }
            else if (i == 11) {
                document.getElementById('stock' + i).value = stock + numLemons;
            }
        }
        var list = document.getElementById('basket');
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
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

        var taxrate = parseInt(document.getElementById('taxrate').value, 10);
        document.getElementById('totalNoTax').innerHTML = 'Total before tax: ';
        document.getElementById('totalAfterTax').innerHTML = 'Total after tax ('+taxrate+'%): ';
    } else {
        
    }
   

}

function buyItems() {
    var taxrate = parseInt(document.getElementById('taxrate').value, 10);

    if (confirm("Total Price: $" + parseFloat(total * (taxrate/100 + 1)).toFixed(2))) {
        var list = document.getElementById('basket');
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
        
        document.getElementById('totalNoTax').innerHTML = 'Total before tax: ';
        document.getElementById('totalAfterTax').innerHTML = 'Total after tax (' + taxrate +'%): ';

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