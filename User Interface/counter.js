let counter=0
const counterValue = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');


incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
  
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});

  