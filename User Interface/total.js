const price=document.getElementsByClassName("price");
let priceArray=[]
for(i=0;i<=price.length; i++){
    const p= price[i].innerText;
    priceArray.push(p)
    
}
const quantity=document.getElementsByClassName("qty");
let quantityArray=[]
for(i=0;i<=quantity.length; i++){
    const q= quantity[0].innerText;
    quantityArray.push(q)
}
console.log(quantityArrayArray)
let totalArray=[]
for(i=0;i<=quantity.length; i++){
    const t= priceArray[i] * quantityArray[i];
    totalArray.push(t)
}
console.log(totalArray)
function total(totalArray){
    let sum = 0
    for (let i = 0; i < totalArray.length; i += 1) {
    sum += total[i]}
return sum
}

to= total(totalArray);
document.getElementById("total").innerHTML = to;

