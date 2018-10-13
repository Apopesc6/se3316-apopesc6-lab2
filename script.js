// JavaScript source code
var total = 0;

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
    var entValue = document.getElementById("display" + fruitID).value;
    var stock = parseInt(document.getElementById('stock' + fruitID).value, 10);

    if (entValue <= stock) {
        if (fruitID == 1) {
            var fruitTotal = (parseInt(entValue) * 0.99)
            var listEntry = entValue + " Apple(s)/Pommes, Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        else if (fruitID == 2) {
            var fruitTotal = (parseInt(entValue) * 0.99);
            var listEntry = entValue + " Pear(s)/Poires, Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        else if (fruitID == 3) {
            //translates the same in french as in english
            var fruitTotal = (parseInt(entValue) * 1.99);
            var listEntry = entValue + " Orange(s), Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        else if (fruitID == 4) {
            //translates the same in french as in english
            var fruitTotal = (parseInt(entValue) * 0.79);
            var listEntry = entValue + " Nectarine(s), Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        else if (fruitID == 5) {
            var fruitTotal = (parseInt(entValue) * 0.59);
            var listEntry = entValue + " Apricot(s)/Abricots, Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        else if (fruitID == 6) {
            
            var fruitTotal = (parseInt(entValue) * 0.99);
            var listEntry = entValue + " Banana(s)/Bananes, Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        else if (fruitID == 7) {
            var fruitTotal = (parseInt(entValue) * 1.99);
            var listEntry = entValue + " Mango(s)/Mangues, Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        else if (fruitID == 8) {
            var fruitTotal = (parseInt(entValue) * 0.19);
            var listEntry = entValue + " Strawberries/Fraises, Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        else if (fruitID == 9) {
            var fruitTotal = (parseInt(entValue) * 0.03);
            var listEntry = entValue + " Blueberries/Myrtilles, Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        else if (fruitID == 10) {
            var fruitTotal = (parseInt(entValue) * 0.03);
            var listEntry = entValue + " Raspberries/Framboises, Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        else if (fruitID == 11) {
            var fruitTotal = (parseInt(entValue) * 0.99);
            var listEntry = entValue + " Lemon(s)/Citrons, Price: $" + parseFloat(fruitTotal).toFixed(2);
        }
        total = total + fruitTotal;
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(listEntry));
        list.appendChild(entry);

        document.getElementById('totalNoTax').innerHTML = 'Total before tax: $' + parseFloat(total).toFixed(2);
        var totalAfter = parseFloat(total * 1.13).toFixed(2);
        document.getElementById('totalAfterTax').innerHTML = 'Total after tax (13%): $' + totalAfter
    }
    else {
        alert("Please choose a quantity less than the amount currently in stock.")
    }
}

function clearList() {
    var list = document.getElementById('basket');
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    total = 0;

    document.getElementById('totalNoTax').innerHTML = 'Total before tax: ';
    document.getElementById('totalAfterTax').innerHTML = 'Total after tax (13%): ';

}
