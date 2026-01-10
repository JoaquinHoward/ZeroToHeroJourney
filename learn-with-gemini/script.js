const my_list = document.getElementById('my-list');
const fees = ["tuition", "rent", "meals"];

for(const fee of fees){
    const item = document.createElement('li');
    item.textContent = fee;
    item.addEventListener('click', function(event){
        item.style.color = "pink";
    });
    my_list.appendChild(item);
}