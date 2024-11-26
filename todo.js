const input = document.querySelector(".todo-input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".show-area");

function getData() {
    let val = input.value;
    const li = document.createElement('li');
    if (val != "") {
        li.innerHTML = val;
        console.log(li);
        output.appendChild(li);
        input.value = '';
    }else {
        alert("fill the input box..!");
    }
}

btn.addEventListener('click', () => {
    getData();
});

input.addEventListener('keydown',(event) => {
    if(event.key === "Enter"){
        getData();
    }
});
