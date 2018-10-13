// JavaScript source code

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

