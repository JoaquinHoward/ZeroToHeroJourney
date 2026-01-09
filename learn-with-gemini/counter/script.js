const count_display = document.getElementById('count-display');
let count = 0;
function updateBox(){
    count_display.textContent = ++count;
}