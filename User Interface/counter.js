function increaseQty(e) { 
    var span = e.previousElementSibling;
    var currentVal = span.innerText;
    span.innerText = ++currentVal;
}
function decreaseQty(e) { 
    var span = e.nextElementSibling;
    var currentVal = span.innerText;
    if(currentVal == 0) return;
     span.innerText = --currentVal;

}

